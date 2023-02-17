import { styled } from "@mui/material";
import { keyframes } from "@mui/system";

const typing = keyframes`
  from { max-width: 0 }
  to { max-width: 100% }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`;

export const TypewrittenTitle = styled("h2") ({
  width: "auto",
  display: "inline-block",
  overflow: "hidden", /* Ensures the content is not revealed until the animation */
  borderRight: ".15em solid orange", /* The typwriter cursor */
  whiteSpace: "nowrap", /* Keeps the content on a single line */
  margin: "0 auto", /* Gives that scrolling effect as the typing happens */
  marginBottom: "20px",
  letterSpacing: ".15em", /* Adjust as needed */
  textAlign: "center",
  fontFamily: "courier",
  animation: `
    ${typing} 5s steps(40, end),
    ${blinkCaret} .75s step-end infinite;
  `  
})
