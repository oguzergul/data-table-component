import styled from "styled-components";

const CustomText = ({text, primary, secondary}) => {
    const CustomText = styled.span`
      display: block;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      font-size: ${primary ? '14px' : '12px' };
      color: ${primary ? "#111827" : secondary ? "#4F46E5" : "#6B7280"};
    `
    return <CustomText>{text}</CustomText>
}

export default CustomText;