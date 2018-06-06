import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component{
	constructor(props){
		super(props)

		this.state = {
      fruit: [],
			filters: [],
			currentFilter: null
		}
	}

  componentWillMount() {
    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

   handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

	render(){

		return(
			<FruitBasket handleChange = {this.handleFilterChange.bind(this)}
      filters={this.state.filters} filter={this.state.currentFilter} fruit = {this.state.fruit} />
		)
	}
}

export default App;
