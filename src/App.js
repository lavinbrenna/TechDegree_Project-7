import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import apiKey from './Config';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

export default class App extends Component {
  
  constructor(){
    super();
    this.state= {
      photos: [],
      loading: true,
    };
  }
  componentDidMount(){
    this.performSearch("robot");
  }
  performSearch =(query)=>{
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&content_type=1&per_page=24&format=json&nojsoncallback=1`)
    .then(response=>{
      this.setState({
        photos: response.data.data,
        loading:false
      })
    })
    .catch(error => {
      console.log('Error parsing data', error)
    });
  };
  
  render(){
    console.log(this.state.photos)
    return(
      <div className="container">
        <SearchForm onSearch ={this.performSearch}/>
        <BrowserRouter>
        <Nav/>
        </BrowserRouter>
        <Gallery/>

        
      </div>
    
      
    )
  }
}
