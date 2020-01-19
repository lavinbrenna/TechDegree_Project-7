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
      tags: '',
      loading: true,
    };
  }
  componentDidMount() {
      this.getImages('light art');
    

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${'light art'}&per_page=24&format=json&nojsoncallback=1&safe_search=1`)
          .then( response => {
            let home = {...this.state.home};
                home.photos = response.data.photos.photo;
                home.loading = false;
                home.title = 'light art';
            this.setState({ home })
          })
    
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${'keith sonnier'}&per_page=24&format=json&nojsoncallback=1&safe_search=1`)
          .then( response => {
            let keith = {...this.state.keith};
                keith.photos = response.data.photos.photo;
                keith.loading = false;
                keith.title = 'keith sonnier';
            this.setState({ keith })
          })

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${'james turrell'}&per_page=24&format=json&nojsoncallback=1&safe_search=1`)
          .then( response => {
            let james = {...this.state.james};
            james.photos = response.data.photos.photo;
            james.loading = false;
            james.title = 'james turrell';
        this.setState({ james })
          })
   
   
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${'olafur eliasson'}&per_page=24&format=json&nojsoncallback=1&safe_search=1`)
          .then( response => {
            let olafur = {...this.state.olafur};
                olafur.photos = response.data.photos.photo;
                olafur.loading = false;
                olafur.title = 'olafur eliasson';
            this.setState({ olafur })
          })

  
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${'teamlab'}&per_page=24&format=json&nojsoncallback=1&safe_search=1`)
          .then( response => {
            let teamlab = {...this.state.teamlab};
                teamlab.photos = response.data.photos.photo;
                teamlab.loading = false;
                teamlab.title = 'teamlab';
            this.setState({ teamlab })
          })
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
              title={ this.state.title }
          />

          <Nav />

        
    
    <Switch>
        <Route exact path="/" render={ () => <Gallery data={this.state.photos} query={this.state.query} loading={this.state.loading} fetchData={this.search} /> } />

        <Route path="/keith" render={ () => <Gallery data={this.state.photos} query={this.state.query} loading={this.state.loading} fetchData={this.search} /> } />

        <Route path="/james" render={ () => <Gallery data={this.state.photos} query={this.state.query} loading={this.state.loading} fetchData={this.search} /> } />

        <Route path="/olafur" render={ () => <Gallery data={this.state.photos} query={this.state.query} loading={this.state.loading} fetchData={this.search} /> } />

        <Route path="/teamlab" render={ () => <Gallery data={this.state.photos} query={this.state.query} loading={this.state.loading} fetchData={this.search} /> } />

        <Route path="/search/:title"  render={ () => <Gallery data={this.state.photos} query={this.state.query} loading={this.state.loading} fetchData={this.search} /> } />
        <Route path ="/notfound" component = {NotFound}/>                                               
    </Switch>
  </div>
 </BrowserRouter>
);
}
}

export default App;