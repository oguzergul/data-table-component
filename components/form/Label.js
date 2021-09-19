import styled from 'styled-components';

const CustomLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #374151;
`;

const Label = (props) => {
    return (<CustomLabel>{props.label}</CustomLabel>)
}

export default Label;