import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
      currentFilter: null,
      fruit: []
    };
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
    }

  render() {
    return (
      <FruitBasket fruit={this.state.fruit} filters={this.state.filters} currentFilter={this.state.currentFilter} updateFilterCallback={this.handleFilterChange}/>
    )
  }
}
export default App;
