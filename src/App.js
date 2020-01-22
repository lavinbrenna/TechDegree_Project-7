//imports all react components
import React, { Component } from 'react';
import {
  BrowserRouter, 
  Route, 
  Switch
} from 'react-router-dom';
//imports app css
import './App.css';
//imports my api fetching package
import axios from 'axios';
//imports all necessary components for app.
import apiKey from './Config';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';

//creation of the app component.
 class App extends Component {
  //constructor for the project, starting with standard object template, and setting up templates for my API objects
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
//mounting the images to the page on load
  componentDidMount() {
    this.getImages();

//my api calls for each of my separate gallery links
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=light+art&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1`)
    .then(response => {
            let home ={...this.state.home};
              home.photos = response.data.photos.photo;
              home.loading= false;
              this.setState({home});
        })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=keith+sonnier&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1`)
        .then(response => {
                let keith ={...this.state.keith};
                  keith.photos = response.data.photos.photo;
                  keith.loading= false;
                  this.setState({keith});
            })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=james+turrell&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1`)
          .then(response => {
                let james ={...this.state.james};
                      james.photos = response.data.photos.photo;
                      james.loading= false;
                      this.setState({james});
                })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=olafur+eliasson&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1`)
          .then(response => {
                 let olafur ={...this.state.olafur};
                          olafur.photos = response.data.photos.photo;
                          olafur.loading= false;
                          this.setState({olafur});
                    })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=teamlab&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1`)
          .then(response => {
              let teamlab ={...this.state.teamlab};
                  teamlab.photos = response.data.photos.photo;
                  teamlab.loading= false;
                  this.setState({teamlab});
                        })
  }
//my original getImages() function 
  getImages = (query="light art") => {

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1`)
    .then(response => {
        this.setState({
            photos: response.data.photos.photo,
            loading: false,
            title: query
  
        })
      })
      .catch(error=>{
console.log('there was an error parsing data', error);
      });}
//render components to the app

render(){
return (
<BrowserRouter>
  <div className="container">
    <SearchForm onSearch={ this.getImages }/> 
    <Nav />
    <Switch>
        <Route exact path="/"  render={ () => <Gallery data={this.state.home.photos} /> } />
        <Route path="/keithsonnier" render={ () =>  <Gallery data={this.state.keith.photos} loading= {this.state.keith.loading}/>}/>
        <Route path="/jamesturrell" render={ () => <Gallery data={this.state.james.photos} loading= {this.state.james.loading}/> } />
        <Route path="/olafureliasson" render={ () => <Gallery data={this.state.olafur.photos} loading= {this.state.olafur.loading}/> } />
        <Route path="/teamlab" render={ () => <Gallery data={this.state.teamlab.photos} loading= {this.state.teamlab.loading}/> } />
        <Route path="/search/:query" render={()=><Gallery data = {this.state.photos} loading = {this.state.loading} />}/>
        <Route component = {NotFound}/>                                               
    </Switch>
  </div>
 </BrowserRouter>
);
}

 }

export default App;