import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: #F3F4F6;
    font-family: Inter, 'sans-serif';

    & th, td {
      padding: 12px 24px;
      text-align: left;
      white-space: nowrap;
    }
     
    
    
  }
  
`
export default GlobalStyle;