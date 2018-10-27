import React, {Component} from 'react';

import FruitBasket from './FruitBasket';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      filters: [],
      selectedFilter: 'all',
      items: []
    }
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchItems();
  }

  fetchItems = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  getFilteredFruits = () => {
    const list = this.state.selectedFilter === 'all' ? this.state.items : this.state.items.filter(i => i.fruit_type === this.state.selectedFilter);
    return list.map((item, index) => <li key={index}>{item.char}</li>)
  }

  render(){
    return(
      <div>
        <FruitBasket handleChange={(event) => this.handleFilterChange(event)}  filters={this.state.filters} fruits={this.getFilteredFruits()} />
      </div>
    )
  }
}
