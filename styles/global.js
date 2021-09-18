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
    
    & button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 13px 25px;
      height: 42px;
      background: #4F46E5;
      border-radius: 4px;
      width: 100%;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #FFFFFF;
      border:none;
      :focus {
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), 0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #6366F1;
      }
    }
  }
`
export default GlobalStyle;