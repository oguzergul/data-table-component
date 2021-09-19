import styled from 'styled-components';
import Button from "../Form/Button";
import CustomText from "./CustomText";

const SubHeaders = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const SubHeader = (props) => {
    return (
        <>
            <SubHeaders>
                <CustomText text={props.title}/>
                <Button clickHandler={props.handleButton} text={props.buttonText}/>
            </SubHeaders>
        </>
    )
}
export default SubHeader;