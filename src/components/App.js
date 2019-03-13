import React from 'react';

import FruitBasket from './FruitBasket';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';


class App extends React.Component {
  constructor() {
    super() ;

    this.state = {
      filters: [],
      currentFilter: null,
      fruit: []
    }
    this.handleFilterChange = this.handleFilterChange.bind(this) ;
    this.fetchFilters = this.fetchFilters.bind(this) ;
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
  componentWillMount() {
    this.fetchFilters();
  }
  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }
  render() {
    var list = !this.state.currentFilter || this.state.currentFilter === 'all' ? this.state.fruit : this.state.fruit.filter(i => i.fruit_type === this.state.currentFilter);

    return (
      <FruitBasket
      handleChange={this.handleFilterChange}
      selectedFilter={this.state.currentFilter}
      filters={this.state.filters}
      items={this.state.fruit}
      list={list}
      />
    )
  }
}
export default App;
