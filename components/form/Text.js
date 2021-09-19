import styled from "styled-components";

const CustomTexts = styled.span`
      display: block;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      font-size: ${props => props.type === 'primary' ? '14px' : '12px'};
      color: ${props => props.type  === 'primary'  ? "#111827" : props.type === 'secondary' ? "#6B7280" : "#4F46E5"};
    `

const Text = ({text, type}) => {
    return <CustomTexts type={type}>{text}</CustomTexts>
}

export default Text;