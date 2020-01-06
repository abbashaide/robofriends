import React, { Component } from 'react';
import CardList from '../components/CardList.js';   // ../ refers to leave dir and then continue path given
import SearchBox from '../components/SearchBox.js'
import Scroll from '../components/Scroll.js'; //Its just a wrap component means it renders nothing it just wraps Card List to make it scrollable(just scroll card list and not H1 and search bar)
import ErrorBoundary from '../components/ErrorBoundary.js';
import './App.css';


class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	onSearchChange = (event)=> {
		this.setState({ searchField: event.target.value });
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')//fetch() is a window function which we use to make rqst to the server
		.then(response => response.json())                 //weird syntax we have to use all the time dont worry about it
		.then(users => this.setState({ robots: users }));
	}

	render(){
		const { robots, searchField } = this.state;  //did destructring so we dont have to use this.state.blalaala again and again
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		// instead of if else we used ternary operator here
		return !robots.length ?  // just in case if list is long and takes time to load and here robots.length will return false if its 0 but ! will trun it true and 1st condition will run
			<h1 className='tc f1'>LOADING</h1>:
			(														
				<div className='tc'>
					<h1 className='f1'>Robo Friends</h1>
					<SearchBox searchChange={ this.onSearchChange } />
					<Scroll>
						<ErrorBoundary>
							<CardList robots={ filteredRobots }/>
						</ErrorBoundary>
					</Scroll>
				</div>
			)
		;
	}
}

export default App;


// robots.name.toLowerCase() because its easy for comparision when lowercased
//includes() is another javaScript feature
//whenever creating own methods in react insted of using this way --- onSearchChange(event){}
// use this onSearchChange = (event) => {}
//when setting a value for state never use this.state.searchField = .....
//use this way   this.setState({ searchField: event.target.value })

//when the app runs filteredRobots will have all the robots since searchfield is empty
