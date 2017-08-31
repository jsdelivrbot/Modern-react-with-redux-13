import React, { Component } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import WeatherList from './components/WeatherList/WeatherList'

export default class App extends Component {
  render() {
    return (
        <div>
            <SearchBar />
            <WeatherList />
        </div>
    );
  }
}
