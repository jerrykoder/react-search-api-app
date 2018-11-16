import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Single from './Components/Single'
import Genres from './Components/Genres'
import Popular from './Components/Popular'
import Footer from './Components/Footer'
import TodosList from './Components/TodosList'

class App extends Component {
	render() {
		return (
		 <Router>
		 	<React.Fragment>
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/genres" component={Genres} />
					<Route exact path="/popular" component={Popular} />
					<Route exact path="/todos" component={TodosList} />
					<Route exact path="/:id" component={Single} />
				</Switch>
				<Footer />
			</React.Fragment>
		 </Router>
		);
	}
}

export default App;