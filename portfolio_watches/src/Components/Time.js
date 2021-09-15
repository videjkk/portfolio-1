import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../styled/Container'
import { Header } from '../styled/Header'
import { Navbar } from '../styled/Navbar'
import { View } from '../styled/View'
import { Main } from '../styled/Main'

export const Time = () => {
	const [time, setTime] = useState(new Date())
	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date())
		}, 1000)
		return () => {
			clearInterval(timer)
		}
	}, [])
	const currentTime = time.toLocaleTimeString('en', {
		hour: 'numeric',
		hour12: false,
		minute: 'numeric',
		second: 'numeric',
	})
	const currentDate = time.toLocaleString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
	return (
		<Container className="time" color="time">
			<Header>
				<Navbar>
					<Link to="/time" className="link">
						<View className="active">Time</View>
					</Link>
					<Link to="/stopwatch" className="link">
						<View>Stopwatch</View>
					</Link>
					<Link to="/timer" className="link">
						<View>Timer</View>
					</Link>
				</Navbar>
			</Header>
			<Main>
				<span>{currentTime}</span>
				<span className="date">{currentDate}</span>
			</Main>
		</Container>
	)
}
