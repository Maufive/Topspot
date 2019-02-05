import styled from "styled-components"
import { animated } from "react-spring"

export const Container = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	position: relative;

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		width: 100%;
	}
`

export const GameContainer = styled.div`
	width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	/* flex-wrap: wrap; */
	position: relative;
	padding: 0 3rem;

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		width: 100%;
		flex-direction: column;
		padding: 0;
		height: 100vh;
	}
`

export const CardStyles = styled.div`
	position: relative;
	height: 500px;
	width: 550px;
	border-radius: 5px;
	background: ${props => `url(${props.background}) center center`};
	background-size: auto 550px;
	object-fit: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 0 2rem;
	box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.3);
	transition: all 300ms ease-out;

	&:hover {
		transform: translateY(-3px);
		box-shadow: 0px 7px 3px 0px rgba(0, 0, 0, 0.3);
		cursor: pointer;
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		width: 100%;
		height: 50vh;
		border-radius: 0;
		border-top: 2px solid ${props => props.theme.purple};
		border-bottom: 2px solid ${props => props.theme.purple};
		justify-content: center;
	}
`

export const Playcount = styled.div`
	position: absolute;
	top: 37.5%;
	left: 20%;
	color: ${props => props.theme.black};
	width: 100%;
	padding: 1rem 3rem;
	box-sizing: border-box;

	> div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		min-width: 275px;
		width: fit-content;
		padding: 1rem 0;
		background: linear-gradient(119.84deg, #f5f7fa 0%, #c3cfe2 117.46%);
		border-radius: 5px !important;
		border: 5px solid ${props => props.theme.purple};
		font-weight: 700;
		transition: all 400ms ease;
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		left: 10%;
	}
`

export const Versus = styled(animated.div)`
	height: 150px;
	width: 150px;
	z-index: 10;
	border-radius: 50%;
	position: absolute;
	left: 44%;
	top: 35%;
	background: linear-gradient(119.84deg, #f5f7fa 0%, #c3cfe2 117.46%);
	border: 5px solid ${props => props.theme.purple};
	color: ${props => props.theme.purple};
	display: flex;
	justify-content: center;
	align-items: center;

	> h1 {
		font-family: "Racing Sans One" !important;
		font-size: 5rem;
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		height: 100px;
		width: 100px;
		top: 42%;
		left: 38%;
		border-width: 3px;
		h1 {
			font-size: 3rem;
		}
	}
`

export const ScoreContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	color: ${props => props.theme.white};
	p {
		padding: 0 5rem;
		font-size: 3rem;
		margin: 2rem 0;
		@media (max-width: ${props => props.theme.mobileBreakpoint}) {
			padding: 0;
			font-size: 1.5rem;
			margin: 0;
			display: none;
		}
	}
`

export const DetailsContainer = styled.div`
	font-size: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	p {
		border-radius: 10px 10px 0 0;
		color: ${props => props.theme.purple};
		background: ${props => props.theme.white};
		/* background: linear-gradient(119.84deg, #f5f7fa 0%, #c3cfe2 117.46%); */
		margin: 0;
		width: fit-content;
		padding: 1rem 2rem;
		height: 100%;
		display: flex;
		align-items: center;
	}
	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		font-size: 1.5rem;
		order: ${props => (props.id ? 1 : null)};
		> p {
			padding: 1rem 1rem;
			border-radius: ${props => (props.id ? "0 0 10px 10px" : null)};
		}
	}
`

export const ClickArea = styled.div`
	height: 100%;
	width: 100%;

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		order: ${props => (props.id ? 2 : null)};
	}
`
