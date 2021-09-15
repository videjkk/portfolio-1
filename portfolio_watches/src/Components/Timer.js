import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../styled/Container'
import { Header } from '../styled/Header'
import { Navbar } from '../styled/Navbar'
import { View } from '../styled/View'

export const Timer = () => {
	return (
		<Container className='timer'color="timer">
			<Header>
				<Navbar>
					<Link to="/time" className="link">
						<View >Time</View>
					</Link>
					<Link to="/stopwatch" className="link">
						<View>Stopwatch</View>
					</Link>
					<Link to="/timer" className="link">
						<View className="active">Timer</View>
					</Link>
				</Navbar>
			</Header>
		</Container>
	)
}
