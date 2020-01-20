import React, { Component } from 'react';
import {
  BrowserRouter, 
  Route, 
  Switch
} from 'react-router-dom';

import './App.css';

import axios from 'axios';

import apiKey from './Config';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';


 class App extends Component {
  
  constructor(){
    super();
    this.state= {
      photos: [],
      query: '',
      loading: true,
      home:{
        photos:[],
        loading:true
      },
      keith:{
        photos:[],
        loading:true
      },
      james:{
        photos:[],
        loading:true
      },
      olafur:{
        photos:[],
        loading: true
      },
      teamlab:{
        photos:[],
        loading: true
      }
    };
  }

  componentDidMount() {
    this.getImages();

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=light+art&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1`)
    .then(response => {
            let home ={...this.state.home};
              home.photos = response.data.photos.photo;
              home.loading= false;
        })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=keith+sonnier&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1`)
        .then(response => {
                let keith ={...this.state.keith};
                  keith.photos = response.data.photos.photo;
                  keith.loading= false;
            })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=james+turrell&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1`)
          .then(response => {
                let james ={...this.state.james};
                      james.photos = response.data.photos.photo;
                      james.loading= false;
                })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=olafur+eliasson&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1`)
          .then(response => {
                 let olafur ={...this.state.olafur};
                          olafur.photos = response.data.photos.photo;
                          olafur.loading= false;
                    })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=teamlab&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1`)
          .then(response => {
              let teamlab ={...this.state.teamlab};
                  teamlab.photos = response.data.photos.photo;
                  teamlab.loading= false;
                        })
  }

  getImages = (query="light art") => {

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1`)
    .then(response => {
        this.setState({
            photos: response.data.photos.photo,
            loading: false,
  
        })
      })
      .catch(error=>{
console.log('there was an error parsing data', error);
      });}


render(){
return (
<BrowserRouter>
  <div className="container">
    <SearchForm onSearch={ this.getImages }query={ this.state.query }/> 
    <Nav />
    <Switch>
        <Route exact path="/"  render={ () => <Gallery data={this.state.photos} /> } />
        <Route path="/keith" render={ () =>  <Gallery data={this.state.keith.photos} loading= {this.state.keith.loading}/>}/>
        <Route path="/james" render={ () => <Gallery data={this.state.james.photos} loading= {this.state.james.loading}/> } />
        <Route path="/olafur" render={ () => <Gallery data={this.state.olafur.photos} loading= {this.state.olafur.loading}/> } />
        <Route path="/teamlab" render={ () => <Gallery data={this.state.teamlab.photos} loading= {this.state.teamlab.loading}/> } />
        <Route component = {NotFound}/>                                               
    </Switch>
  </div>
 </BrowserRouter>
);
}

 }

export default App;