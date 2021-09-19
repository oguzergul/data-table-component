import styled from "styled-components";
import Label from "./Label";

const CustomInput = styled.input`
  width: 100%;
  height: 42px;
  background: #FFFFFF;
  border-radius: 6px;
  border: 1px solid #D1D5DB;
  margin-bottom: 10px;
  margin-top: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding-left: 20px;
  box-sizing: border-box;

  :focus {
    border: 1px solid #6366F1 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 1px #6366F1 !important;
  }

  ::placeholder {
    font-size: 16px;
    line-height: 24px;
    color: #6B7280;
  }
`;

const Input = (props) => {
    return (
        <>
            <Label label={props.label}/>
            <CustomInput name={props.name} onChange={props.onChange} placeholder={props.placeholder} type={props.type}/>
        </>
    )

}
export default Input;