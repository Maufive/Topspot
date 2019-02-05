import React from "react"
import { Spring, config } from "react-spring"
import PreviewButton from "./PreviewTrack"
import {
	CardStyles,
	Playcount,
	DetailsContainer,
	ClickArea
} from "../styles/Index"

class Card extends React.Component {
	render() {
		const {
			data,
			togglePlaycount,
			showPlaycount,
			isPlaying,
			playPreview,
			pausePreview,
			checkPlaycount,
			winner,
			id
		} = this.props
		const streams = data.playcount.toFixed()
		return (
			<CardStyles background={data.image}>
				<ClickArea onClick={() => togglePlaycount(data.song_id)} id={id}>
					{showPlaycount && (
						<Playcount>
							<Spring
								from={{ number: 0 }}
								to={{ number: streams }}
								config={config.gentle}
								onRest={() => checkPlaycount(this.props.data.song_id)}
							>
								{props => (
									<div
										style={
											winner
												? {
													background: "#99ba53",
													color: "white",
													borderColor: "#99ba53"
												  }
												: { borderColor: "#45326d" }
										}
									>
										<span>Streams: </span>
										<span>{props.number.toLocaleString()}</span>
									</div>
								)}
							</Spring>
						</Playcount>
					)}
				</ClickArea>
				<DetailsContainer id={id}>
					<p>
						<PreviewButton
							isPlaying={isPlaying}
							playPreview={playPreview}
							pausePreview={pausePreview}
							url={data.preview_url}
						/>
						{data.artist_name} - {data.song_name}
					</p>
				</DetailsContainer>
			</CardStyles>
		)
	}
}

export default Card
