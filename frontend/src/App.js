import React, { Component } from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { getHashParams } from "./assets/hashParams"
import Page from "./Page"
import ScoreProvider, {
	ScoreConsumer
} from "./components/context/ScoreProvider"

const params = getHashParams()
const accessToken = params.access_token

const theme = {
	orange: "#FE7E11",
	purple: "#45326d",
	blue: "#537bba",
	green: "#99ba53",
	black: "#282828",
	darkGrey: "#3E3E3E",
	grey: "#828282",
	lightGrey: "#E0E0E0",
	white: "#FCF7FF",
	maxWidth: "1200px",
	mobileBreakpoint: "768px",
	animationTime: "200ms",
	bs: "0 5px 24px 0 rgba(0, 0, 0, 0.06)"
}

const StyledPage = styled.div`
	color: ${props => props.theme.grey};
	min-height: 100vh;
	width: 100%;
`

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');
	@import url('https://fonts.googleapis.com/css?family=Merriweather+Sans');


	@import url('https://fonts.googleapis.com/css?family=Racing+Sans+One');


  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: "Merriweather Sans", Arial, Helvetica, sans-serif, sans-serif;
		-webkit-font-smoothing: antialiased !important;
    text-shadow:1px 1px 1px 1px rgba(0,0,0,0.005);
    padding: 0;
    margin: 0;
    background: linear-gradient(119.84deg, #F05F57 -80.16%, #360940 117.46%);
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
    
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
		line-height: 2;
  }

  h1, h2, h3, h4 {
    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  h1 {
    font-family: "Merriweather Sans" !important;
  }

  h2, h3 {
    font-family: "Merriweather Sans" !important;
  }

  a, a:visited {
    color: ${props => props.theme.grey};
    text-decoration: none;
  }
`

export const options = {
	headers: {
		Authorization: `Bearer ${accessToken}`
	}
}

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<GlobalStyle />
					<ScoreProvider>
						<ScoreConsumer>
							{({ score, incrementScore, resetScore }) => (
								<Page
									score={score}
									resetScore={resetScore}
									incrementScore={incrementScore}
								/>
							)}
						</ScoreConsumer>
					</ScoreProvider>
				</StyledPage>
			</ThemeProvider>
		)
	}
}

export default App
