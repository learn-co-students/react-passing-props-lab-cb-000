import React, {Component} from 'react';

import FruitBasket from './FruitBasket';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      filters: [],
      currentFilter: null,
      fruit: []
    };
  }

  componentWillMount() {
    fetch('/api/fruit_types')
      .then(resp => resp.json())
      .then(filters => this.setState({ filters }));
  }

  componentDidMount() {
    fetch('/api/fruit')
      .then(resp => resp.json())
      .then(fruit => this.setState({ fruit }));
  }

  handleFilterChange = e => this.setState({ currentFilter: e.target.value })

  render() {
    return (
      <FruitBasket
        updateFilterCallback={this.handleFilterChange}
        currentFilter={this.state.currentFilter}
        filters={this.state.filters}
        fruit={this.state.fruit}
      />
    )
  }

}
