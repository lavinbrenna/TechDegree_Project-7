import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
  componentDidMount() {
      this.getImages('light art');  
  }
  getImages = (query) => {

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1`)
    .then(response => {
        this.setState({
            photos: response.data.photos.photo,
            loading: false,
            title: query,
  
        })
    })
  
    .catch(error => {
      console.log('There was an error fetching and/or parsing data', error);
    });
  
  }
render() {

return (


<BrowserRouter>
  <div className="container">


          <SearchForm
              onSearch={ this.getImages }
              query={ this.state.query }
          />

          <Nav />

        
    
    <Switch>
        <Route exact path="/"  render={ () => <Gallery data={this.state.photos} /> } />

        <Route path="/keith" render={ () =>  <Gallery data={this.state.photos} /> } />

        <Route path="/james" render={ () => <Gallery data={this.state.photos}  /> } />

        <Route path="/olafur" render={ () => <Gallery data={this.state.photos} /> } />

        <Route path="/teamlab" render={ () => <Gallery data={this.state.photos} /> } />

        <Route path="/search/:query"  render={ () => <Gallery data={this.state.photos}  /> } />
        <Route component = {NotFound}/>                                               
    </Switch>
  </div>
 </BrowserRouter>
);
}
}

export default App;