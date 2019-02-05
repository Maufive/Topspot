import styled from "styled-components"
import { grow, ButtonJump } from "../styles/Animations"

export const Jumbotron = styled.div`
	margin: 0 auto;
	width: 100%;
	color: ${props => props.theme.white};
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 80vh;

	h1 {
		font-size: 3.5rem;
		letter-spacing: 10px;
		display: flex;
		justify-content: center;

		@media (max-width: ${props => props.theme.mobileBreakpoint}) {
			font-size: 2.5rem;
			margin-top: 5rem;
		}
	}

	h2 {
		font-size: 2.5rem;
		font-weight: 400;
		margin-top: 5rem;

		@media (max-width: ${props => props.theme.mobileBreakpoint}) {
			font-size: 2rem;
		}
	}

	button {
		background: ${props => props.theme.white};
		padding: 1.5rem 3rem;
		width: 200px;
		margin-top: 5rem;
		font-size: 3rem;
		color: ${props => props.theme.purple};
		letter-spacing: 1.5px;
		font-weight: 700;
		border-radius: 100px;
		transition: all 500ms ease-out;
		cursor: pointer;
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
		animation: ${ButtonJump} 500ms 700ms cubic-bezier(0.175, 0.885, 0.32, 1.275)
			backwards;

		&:hover {
			box-shadow: 0 15px 10px rgba(0, 0, 0, 0.3);
			transform: translateY(-5px);
		}

		&:active {
			outline: none;
			transform: translateY(-1px);
			box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
		}

		@media (max-width: ${props => props.theme.mobileBreakpoint}) {
			font-size: 2rem;
		}
	}
`

export const Pokal = styled.div`
	animation: ${grow} 1s ease infinite alternate;
	margin-left: 2rem;
`
