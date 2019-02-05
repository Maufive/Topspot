import React, { Component } from "react"
import axios from "axios"
import { Spring, animated, config } from "react-spring"
import PreviewTrackProvider, {
	IsPlayingConsumer
} from "./components/context/PreviewTrackProvider"
import Card from "./components/Card"
import Landing from "./components/Landing"
import {
	Container,
	Versus,
	ScoreContainer,
	GameContainer
} from "./styles/Index"

class Page extends Component {
	state = {
		data: null,
		answered: [],
		showPlaycount: false,
		score: 0,
		selectedTrack: null,
		winner: null,
		gameover: false
	}

	togglePlaycount = async song_id => {
		await this.setState({
			showPlaycount: !this.state.showPlaycount,
			selectedTrack: song_id
		})
	}

	checkPlaycount = async () => {
		const { winner, selectedTrack } = this.state
		const track1 = this.state.data[0]
		const track2 = this.state.data[1]

		if (track1.playcount > track2.playcount) {
			await this.setState({ winner: this.state.data[0].song_id })
		} else if (track2.playcount > track1.playcount) {
			await this.setState({ winner: this.state.data[1].song_id })
		} else {
			console.log("wut?")
		}

		if (winner) {
			if (selectedTrack === winner) {
				console.log("Du valde rätt låt. Här, ta ett poäng!")
				await this.props.incrementScore()
				setTimeout(this.getNewTracks, 2000)
			} else {
				console.log("Du valde fel låt. Synd, n00b.")
				setTimeout(() => {
					this.setState({
						gameover: true,
						data: null,
						winner: null,
						showPlaycount: false,
						selectedTrack: null
					})
				}, 1500)
			}
		}
	}

	getNewTracks = async () => {
		await this.setState({
			data: null,
			winner: null,
			showPlaycount: false,
			selectedTrack: null
		})
		axios
			.get("https://spotifygame-kfcnctlnxs.now.sh/game/new", {
				params: {
					answered: this.state.answered
				}
			})
			.then(res => {
				const oldState = [...this.state.answered]
				oldState.push(res.data[0].song_id)
				oldState.push(res.data[1].song_id)
				this.setState({ data: res.data, answered: oldState })
			})
	}

	getdata = () => {
		this.props.resetScore()
		axios
			.get("https://spotifygame-kfcnctlnxs.now.sh/game/new", {
				params: {
					answered: this.state.answered
				}
			})
			.then(res => {
				const oldState = [...this.state.answered]
				oldState.push(res.data[0].song_id)
				oldState.push(res.data[1].song_id)
				this.setState({ data: res.data, answered: oldState, gameover: false })
			})
	}

	render() {
		const { score } = this.props
		return (
			<div>
				<ScoreContainer>
					<p>Poäng: {score}</p>
				</ScoreContainer>

				<Container>
					{this.state.data ? (
						<PreviewTrackProvider>
							<IsPlayingConsumer>
								{({ isPlaying, playPreview, pausePreview }) => (
									<GameContainer>
										<Spring
											from={{ opacity: 0, position: "relative", right: 100 }}
											to={{ opacity: 1, right: 0 }}
											config={config.stiff}
											native
										>
											{props => (
												<animated.div style={props}>
													<Card
														id={1}
														data={this.state.data[0]}
														togglePlaycount={this.togglePlaycount}
														showPlaycount={this.state.showPlaycount}
														isPlaying={isPlaying}
														playPreview={playPreview}
														pausePreview={pausePreview}
														checkPlaycount={this.checkPlaycount}
														winner={
															this.state.winner === this.state.data[0].song_id
														}
													/>
												</animated.div>
											)}
										</Spring>
										<Spring
											from={{ transform: "scale(0.01)" }}
											to={{ transform: "scale(1)" }}
											config={config.wobbly}
											native
										>
											{props => (
												<Versus style={props}>
													<h1>VS</h1>
												</Versus>
											)}
										</Spring>
										<Spring
											from={{ opacity: 0, position: "relative", left: 100 }}
											to={{ opacity: 1, left: 0 }}
											native
											config={config.stiff}
										>
											{props => (
												<animated.div style={props}>
													<Card
														data={this.state.data[1]}
														togglePlaycount={this.togglePlaycount}
														showPlaycount={this.state.showPlaycount}
														isPlaying={isPlaying}
														playPreview={playPreview}
														pausePreview={pausePreview}
														checkPlaycount={this.checkPlaycount}
														winner={
															this.state.winner === this.state.data[1].song_id
														}
													/>
												</animated.div>
											)}
										</Spring>
									</GameContainer>
								)}
							</IsPlayingConsumer>
						</PreviewTrackProvider>
					) : (
						<Landing load={this.getdata} gameover={this.state.gameover} />
					)}
				</Container>
			</div>
		)
	}
}

export default Page
