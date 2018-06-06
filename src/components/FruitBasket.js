import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({handleChange, filters, filter, fruit}) => (
  <div className = 'fruit-basket'>
    <Filter handleChange = {handleChange} filters = {filters} />
    <FilteredFruitList fruit = {fruit} list = {filter} />
  </div>
)

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
};
export default FruitBasket;
