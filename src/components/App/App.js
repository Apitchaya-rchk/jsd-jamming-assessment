import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{ name: 'O.O', artist: 'NMIXX', album: 'NMIXX 1st Single <AD MARE>', id: 1 },
      { name: 'Stereotype', artist: 'STAYC', album: '1st mini album [STEREOTYPE]', id: 2 },
      { name: 'Savage', artist: 'aespa', album: '1st mini album [Savage]', id: 3 }],
      playlistName: 'My Playlist',
      playlistTracks: [{ name: 'Only', artist: 'LEE HI', album: '3rd Album "4 ONLY"', id: 4 },
      { name: 'Love Me Like That', artist: 'Sam Kim (샘김)', album: 'Nevertheless, (Original Television Soundtrack)', id: 5 },
      { name: 'Psycho', artist: 'Red Velvet', album: 'The ReVe Festival: Finale', id: 6 }]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);

  }


  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTracks => currentTracks.id !== track.id);
    this.setState({ playlistTracks: tracks });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <SearchBar />
          <div className="App-playlist">
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults
            searchResults={this.state.searchResults}
            onAdd={this.addTrack} />
            {/* <!-- Add a Playlist component --> */}
            <Playlist 
            playlistName={this.state.playlistName} 
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
