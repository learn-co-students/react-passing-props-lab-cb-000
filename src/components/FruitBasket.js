import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props =>
      <div className="fruit-basket">
        <Filter handleChange={props.handleChange} filters={props.filters} />
        <FilteredFruitList  list={props.list} />
      </div>;
FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
}
export default FruitBasket;
