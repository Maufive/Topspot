import React, { Component } from "react"

const ScoreContext = React.createContext()

class ScoreProvider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			score: 0
		}
	}

	incrementScore = () => {
		this.setState({ score: this.state.score + 1 })
	}

	resetScore = () => {
		this.setState({ score: 0 })
	}

	render() {
		const score = this.state.score
		return (
			<div>
				<ScoreContext.Provider
					value={{
						score,
						incrementScore: this.incrementScore,
						resetScore: this.resetScore
					}}
				>
					{this.props.children}
				</ScoreContext.Provider>
			</div>
		)
	}
}

const ScoreConsumer = ScoreContext.Consumer

export default ScoreProvider
export { ScoreConsumer }
