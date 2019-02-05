import React, { Component } from "react"

const IsPlayingContext = React.createContext()

let previewTrack = ""

class PreviewTrackProvider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isPlaying: false,
			previewTrack: null
		}
	}

	playPreview = url => {
		previewTrack = new Audio(url)
		if (!this.state.isPlaying) {
			previewTrack.play()
			previewTrack.onended = () => {
				console.log("Slut på trudilutten")
				this.setState({ isPlaying: false, previewTrack: null })
			}
			this.setState({ isPlaying: true, previewTrack })
		}
	}

	pausePreview = () => {
		previewTrack.pause()
		this.setState({ isPlaying: false, previewTrack: null })
	}

	render() {
		const isPlaying = this.state.isPlaying
		return (
			<IsPlayingContext.Provider
				value={{
					isPlaying,
					playPreview: this.playPreview,
					pausePreview: this.pausePreview
				}}
			>
				{this.props.children}
			</IsPlayingContext.Provider>
		)
	}
}

const IsPlayingConsumer = IsPlayingContext.Consumer

export default PreviewTrackProvider
export { IsPlayingConsumer }
