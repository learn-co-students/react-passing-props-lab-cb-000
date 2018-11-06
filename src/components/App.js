import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  render(){
    return ( <FruitBasket/> )
  }
}
