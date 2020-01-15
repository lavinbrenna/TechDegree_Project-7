import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import apiKey from './Config';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';


 class App extends Component {
  
  constructor(props){
    super(props);
    this.state= {
      photos: [],
      query: '',
      loading: true,
    };
  }
  componentDidMount(){
    this.performSearch();
  }
  performSearch =(query)=>{
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response=>{
      this.setState({
        photos: response.data.photos.photo,
        query,
        loading:false
      })
    })
    .catch(error => {
      console.log('Error parsing data', error)
    });
  };
  
  render(){
    return(
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch ={this.performSearch} loading={this.state.loading}/>
          <Nav/>
          <Switch>
            <Route exact path = "/" render ={() => <Redirect to ="/robots"/>}/>
            <Route exact path="/search/:searchtext" render={ (props) => <Gallery {...props} data={this.state.photos} query={this.state.queryContent} loading={this.state.loading} fetchData={this.search} />} />
            <Route path="/(robots|cats|pizza)" render={ (props) => <Gallery {...props} data={this.state.photos} query={this.state.queryContent} loading={this.state.loading} fetchData={this.search} />} />
            <Route component = {NotFound} />
          </Switch>
          <Gallery/>
        </div>
      </BrowserRouter>
      
    )
  }
};
export default App;