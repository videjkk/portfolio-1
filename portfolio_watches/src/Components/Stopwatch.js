import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../styled/Container'
import { Header } from '../styled/Header'
import { Navbar } from '../styled/Navbar'
import { View } from '../styled/View'

export const Stopwatch = () => {
	return (
		<Container className="stopwatch" color="stopwatch">
			<Header>
				<Navbar>
					<Link to="/time" className="link">
						<View >Time</View>
					</Link>
					<Link to="/stopwatch" className="link">
						<View className="active">Stopwatch</View>
					</Link>
					<Link to="/timer" className="link">
						<View>Timer</View>
					</Link>
				</Navbar>
			</Header>
		</Container>
	)
}
