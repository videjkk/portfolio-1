import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Stopwatch } from './Components/Stopwatch'
import { Time } from './Components/Time'
import { Timer } from './Components/Timer'

export function App() {
	return (
		<Router>
			<Switch>
				<Route path="/time">
					<Time />
				</Route>
				<Route path="/stopwatch">
					<Stopwatch />
				</Route>
				<Route path="/timer">
					<Timer />
				</Route>
			</Switch>
		</Router>
	)
}
