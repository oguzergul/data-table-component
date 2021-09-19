import TableHeadItem from "./TableHeadItem";

const TableHead = ({headData}) => {
    return (
        <thead>
            <tr>{headData.map((item,index) => <TableHeadItem key={index} title={item.title}/>)}</tr>
        </thead>
    )
}
export default TableHead;