import React, { Component } from "react"
import styled from "styled-components"
import { ReactComponent as Play } from "../assets/play.svg"
import { ReactComponent as Pause } from "../assets/pause.svg"

const PreviewContainer = styled.span`
	/* background: ${props => props.theme.white}; */
	display: flex;
	align-items: center;
	> svg {
		height: 3rem;
		width: 3rem;
		fill: ${props => props.theme.green};
		margin-right: 3rem;
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
      > svg {
				height: 2rem;
				width: 2rem;
				margin-right: 1.5rem;
			}
    }
`

class PreviewTrack extends Component {
	render() {
		const url = this.props.url
		const { isPlaying, playPreview, pausePreview } = this.props
		if (!url) return null
		return (
			<PreviewContainer>
				{isPlaying ? (
					<Pause onClick={() => pausePreview()} />
				) : (
					<Play onClick={() => playPreview(url)} />
				)}
			</PreviewContainer>
		)
	}
}

export default PreviewTrack
