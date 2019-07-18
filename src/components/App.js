import React, { Component }  from 'react';

import FruitBasket from './FruitBasket';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null
    };
  }

  componentWillMount() {
    this.fetchFilters();
  }

  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ fruit }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket updateFilterCallback={this.handleFilterChange} filters={this.state.filters} fruit={this.state.fruit} currentFilter={this.state.currentFilter}/>
    );
  }
}
