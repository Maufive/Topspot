import React from "react"
import { Spring, config } from "react-spring"
import { Jumbotron, Pokal } from "../styles/Landing"
import GameOver from "./GameOver"

const Landing = ({ load, gameover }) => (
	<Jumbotron>
		{!gameover ? (
			<div>
				<Spring
					from={{ opacity: 0, transform: "translateY(50px)" }}
					to={{ opacity: 1, transform: "translateY(0px)" }}
					config={config.wobbly}
				>
					{props => (
						<div>
							<h1 style={props}>
								TOPSPOT<Pokal>🏆</Pokal>
							</h1>
							<h2>Vilken låt har mest spelningar på Spotify?</h2>
							<button onClick={() => load()}>SPELA!</button>
						</div>
					)}
				</Spring>
				<div style={{ marginTop: "200px" }}>
					<h3>Disclaimer:</h3>
					<p>
						Antalet streams på låtarna sparades tidigt Februari 2019. <br />{" "}
						Detta är ett hobbyprojekt helt för eget bruk
					</p>
				</div>
			</div>
		) : (
			<GameOver load={load} />
		)}
	</Jumbotron>
)

export default Landing
