import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }   
      
  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }   

  componentWillMount() {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }   
      
  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  render () {
    return (
      <FruitBasket fruit={this.fruit} filters={this.filters} currentFilter={this.currentFilter} updateFilterCallback={this.handleFilterChange}/>
    );
  }
}
