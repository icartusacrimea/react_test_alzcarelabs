import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ImagesList from '../containers/images_list';

export default class App extends Component {
  render() {
    return (
      <div>
      	<h3 className="title">iCartusFlickrSearch</h3>
      	<SearchBar />
      	<ImagesList />
      	<footer>made by icartusacrimea 2017</footer>
      </div>
    );
  }
}
