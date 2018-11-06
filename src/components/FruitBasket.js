
import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange = { props.updateFilterCallback } />
      <FilteredFruitList filter = { props.currentFilter }/>
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: true,
  filters: true,
  currentFilter: true,
  updateFilterCallback: true
}

export default FruitBasket;
