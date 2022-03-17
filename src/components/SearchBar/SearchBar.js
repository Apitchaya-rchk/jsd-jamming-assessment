/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton">SEARCH</button>
      </div>
    )
  }
}

export default SearchBar;
