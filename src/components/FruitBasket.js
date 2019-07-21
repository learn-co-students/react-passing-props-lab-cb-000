import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => (
  <div className="fruit-basket">
    <Filter handleChange={props.handleFilterChange} />
    <FilteredFruitList
      filter={props.selectedFilter} />
  </div>
)
/*
  constructor() {
    super();

    this.state = {
      filters: [],
      selectedFilter: null
    };
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  render() {
    return (
    );
  }
}
*/
FruitBasket.defaultProps = {
  fruit:'',
  currentFilter:null,
  updateFilterCallback:null,
  filters:null
};
export default FruitBasket;
