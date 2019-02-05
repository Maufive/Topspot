import { keyframes } from "styled-components"

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const grow = keyframes`
  0% {
    transform: scale(1);
    

  }

  100% {
    transform: scale(1.2);
  }
`

export const ButtonJump = keyframes`
  0% {
    opacity: 0;
    transform: translateY(150px)
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`
