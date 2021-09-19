import styled from 'styled-components';
import Button from "../form/Button";
import CustomText from "../form/Text";

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