import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.updateFilterCallback} filters={props.filters} />
      <FilteredFruitList
        filter={props.currentFilter} items={props.fruit} />
    </div>
  );
}

FruitBasket.defaultProps = {
  updateFilterCallback: null,
  currentFilter: null,
  filters: null,
  fruit: null
}

export default FruitBasket;
