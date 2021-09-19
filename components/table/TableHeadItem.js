import styled from "styled-components";
import CustomText from "../form/Text";
const TableHeadItems = styled.th`
      position: sticky;
      top: 0;
      z-index: 1;
      background: #F9FAFB;
      text-transform: uppercase;
      border-radius: 8px 8px 0 0;
      border-bottom: 1px solid #E5E7EB;

      :first-child {
        left: 0;
        z-index: 2;
      }
    `;
const TableHeadItem = ({title}) => {
    return (
        <TableHeadItems>
            <CustomText type={'secondary'} text={title}/>
        </TableHeadItems>
    )
}
export default TableHeadItem;