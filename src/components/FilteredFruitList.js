import React, { Component } from 'react';

const FilteredFruitList = ({fruit,filter}) => {
  const list = !filter ? fruit : fruit.filter(item => item.fruit_type === filter);
  return(
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  fruit:'',
  filter:null
};
/*
{
  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  render() {


    return (

    );
  }
}
*/

export default FilteredFruitList;
