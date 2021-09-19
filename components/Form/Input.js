import styled from "styled-components";

const CustomInputs = styled.input`
  width: 100%;
  height: 42px;
  background: #FFFFFF;
  border-radius: 6px;
  border: 1px solid #D1D5DB;
  margin-bottom: 10px;
  margin-top: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  padding-left: 20px;
  box-sizing: border-box;

  :focus {
    border: 1px solid #6366F1 !important;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), 0px 0px 0px 1px #6366F1 !important;
  }

  ::placeholder {
    font-size: 16px;
    line-height: 24px;
    color: #6B7280;
  }
`;
const CustomLabels = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #374151;
`;
const CustomInput = ({placeholder, type, label, onChange, name}) => {
    return (
        <>
            <CustomLabels>{label}</CustomLabels>
            <CustomInputs name={name} onChange={onChange} placeholder={placeholder} type={type}/>
        </>
    )

}

export default CustomInput;