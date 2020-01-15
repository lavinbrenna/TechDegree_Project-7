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
      tags: '',
      loading: true,
    };
  }
  componentDidMount(){
    this.getImages("tokyo night");
  }
  getImages =(query)=>{
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response=>{
      this.setState({
        photos: response.data.photos.photo,
        tags: '',
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
          <SearchForm onSearch ={this.getImages} loading={this.state.loading}/>
          <Nav/>
          <Switch>
            <Route exact path = "/" render ={() => <Redirect to ="/tokyo"/>}/>
            <Route exact path="/search/:searchtext" render={ (props) => <Gallery {...props} data={this.state.photos} query={this.state.query} loading={this.state.loading} fetchData={this.search} />} />
            <Route path="/(tokyo|cyberspace|vaporwave)" render={ (props) => <Gallery {...props} data={this.state.photos} query={this.state.query} loading={this.state.loading} fetchData={this.search} />} />
            <Route component = {NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
      
    )
  }
};
export default App;