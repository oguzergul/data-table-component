import styled from "styled-components";
import Avatar from "../global/Avatar";
import CustomText from "../global/CustomText";
import StatusBadge from "../global/StatusBadge";
const TableCell = ({image, textOne, textTwo, status}) => {
    const TableCell = styled.td`
      display: ${image ? 'flex' : ''};
      align-items: ${image ? 'center' : ''};
      border: none;
      border-bottom: 1px solid #E5E7EB;

      & .cell-inner {
        margin-left: ${image ? '1rem' : 0};
      }

      :first-child {
        position: sticky;
        left: 0;
        z-index: 1;
        background: #ffffff;
      }
    `;
    return (
        <TableCell>
            {image ? <Avatar src={image}/> : ''}
            {textTwo ?
                <div className='cell-inner'>
                    <CustomText primary={true} text={textOne}/>
                    <CustomText text={textTwo}/>
                </div> : ''}
            {status ? <StatusBadge status={status}/> : ''}

        </TableCell>
    )
}
export default TableCell;