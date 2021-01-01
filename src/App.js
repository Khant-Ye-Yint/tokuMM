import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar } from './components';
import Home from './pages/Home';
import SeriesList from './pages/SeriesList';
import Serie from './pages/Serie';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/:genre/:era' exact component={SeriesList} />
				<Route path='/:genre/:era/:id' exact component={Serie} />
			</Switch>
		</Router>
	);
};

export default App;
