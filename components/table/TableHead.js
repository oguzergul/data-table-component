import TableHeadItem from "./TableHeadItem";
const TableHead = (props) => {
    return (
        <thead>
            <tr>{props.headData.map((item,index) => <TableHeadItem width={props.width} key={index} title={item.title}/>)}</tr>
        </thead>
    )
}
export default TableHead;