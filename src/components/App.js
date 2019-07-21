import React, { useState } from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fruit:[],
      filters:[],
      currentFilter:null
    }
  }

  componentWillMount() {
    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  render(){
    return(<FruitBasket />);
  }
}
