import React from "react"
import styled from "styled-components"
import { ScoreConsumer } from "./context/ScoreProvider"
import { Spring, config } from "react-spring"

const GameOverStyles = styled.div`
	position: absolute;
	height: 400px;
	width: 500px;
	z-index: 10;
	background: ${props => props.theme.white};
	color: ${props => props.theme.black};
	display: flex;
	flex-direction: column;
	text-align: center;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border-radius: 10px;
	align-items: center;
	padding: 40px;
	justify-content: center;

	> button {
		font-size: 2rem !important;
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2) !important;
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		width: 100%;
		height: 800px;
	}
`

const GameOver = ({ load }) => (
	<ScoreConsumer>
		{({ score }) => (
			<Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={config.stiff}>
				{props => (
					<div>
						<GameOverStyles style={props}>
							<h1>GAME OVER!</h1>
							<h3>Du fick {score} poäng</h3>
							<p>Vill du spela igen?</p>
							<button onClick={() => load()}>Spela igen</button>
						</GameOverStyles>
					</div>
				)}
			</Spring>
		)}
	</ScoreConsumer>
)

export default GameOver
