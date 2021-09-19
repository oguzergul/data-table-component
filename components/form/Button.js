import styled from 'styled-components';

const ButtonComponent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 25px;
  height: 42px;
  width: 200px;
  background: #4F46E5;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  border: none;
  cursor: pointer;

  :focus {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 2px #FFFFFF, 0 0 0 4px #6366F1;
  }
`;
const Button = (props) => {
    return (<ButtonComponent onClick={props.clickHandler}>{props.text}</ButtonComponent>)
}

export default Button;