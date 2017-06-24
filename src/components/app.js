import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ImagesList from '../containers/images_list';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<ImagesList />
      </div>
    );
  }
}
