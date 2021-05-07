import React from 'react';

const FilteredFruitList = ({ fruit, filter }) => {
  
  const filteredFruit = !filter || filter === 'all' ? fruit : fruit.filter(i => i.fruit_type === filter)
  
  return (
    <ul className="fruit-list">
      { filteredFruit.map((fruit, i) => <li key={i}>{fruit.char}</li>) }
    </ul>
  )
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}

export default FilteredFruitList;