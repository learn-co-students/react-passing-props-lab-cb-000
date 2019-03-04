import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };
  }

  updateFilter = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  componentDidMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }))
      .then(console.log('Filters have been fetched.'));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }))
      .then(console.log('Fruit has been fetched.'));
  }
  
  render() {
    return (
      <div>

        <FruitBasket
          updateFilterCallback={this.updateFilter}
          currentFilter={this.state.currentFilter}
          filters={this.state.filters}
          fruit={this.state.fruit} 
        />
      </div>
    )
  }
}