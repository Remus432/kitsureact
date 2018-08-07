import React, { Component } from 'react';

import AnimeList from "./components/AnimeList";

class App extends Component {
  state = {
    animes: []
  }

  getAnime = (e) => {
    fetch(`https://kitsu.io/api/edge/anime?filter[text]=${e.target.value}`)
      .then(res => res.json())
      .then(data => {
        this.setState({animes: [...data.data]})
      })
  }

  render() {
    return (
      <div className="App">
         <input onChange={this.getAnime} type="text"/>
         <AnimeList animes={this.state.animes}/>
      </div>
    );
  }
}

export default App;
