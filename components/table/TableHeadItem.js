import styled from "styled-components";
import CustomText from "../form/Text";
const TableHeadItems = styled.th`
      position: sticky;
      top: 0;
      z-index: 3;
      background: #F9FAFB;
      text-transform: uppercase;
      border-radius: 8px 8px 0 0;
      border-bottom: 1px solid #E5E7EB;
      width:${props => props.width || ""};
  
  
      :first-child {
        left: 0;
        z-index: 4;
      }
    `;
const TableHeadItem = (props) => {
    return (
        <TableHeadItems>
            <CustomText type={'secondary'} text={props.title}/>
        </TableHeadItems>
    )
}
export default TableHeadItem;