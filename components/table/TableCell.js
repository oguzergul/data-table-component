import styled from "styled-components";
import Avatar from "../global/Avatar";
import CustomText from "../form/Text";
import StatusBadge from "../global/StatusBadge";


const TableCells = styled.td`
  display: ${props => props.hasImage ? 'flex' : ''};
  align-items: ${props => props.hasImage ? 'center' : ''};
  width: ${props => props.width};
  border: none;
  & .cell-inner {
    margin-left: ${props => props.hasImage ? '1rem' : 0};
  }
  :first-child {
    position: sticky;
    left: 0;
    z-index: 1;
    background: #fff;
  }
  
  
  
`;


const TableCell = ({image, textOne, textTwo, status,width}) => {
    return (
        <TableCells width={width} hasImage={!!image}>
            {image ? <Avatar src={image}/> : ''}
            {textTwo ?
                <div className='cell-inner'>
                    <CustomText type={'primary'} text={textOne}/>
                    <CustomText type={'secondary'} text={textTwo}/>
                </div> : ''}
            {status ? <StatusBadge status={status}/> : ''}

        </TableCells>
    )
}
export default TableCell;