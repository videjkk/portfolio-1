import styled from 'styled-components'

export const Container = styled.div`
	margin: 0;
	padding: 0;
	background: ${(props) => {
		switch (props.color) {
			case 'time':
				return 'linear-gradient(359.98deg, #64D1AA 0.01%, #205E44 101.3%);'
			case 'timer':
				return 'linear-gradient(359.98deg, #D24F5C 0.01%, #2A1D52 101.3%);'
			case 'stopwatch':
				return 'linear-gradient(359.98deg, #585ABE 0.01%, #36205E 101.3%);'
			default:
				return 0
		}
	}};

	height: 100vh;
`
