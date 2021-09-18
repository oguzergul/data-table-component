import TableHeadItem from "./TableHeadItem";

const TableHead = ({headData}) => {
    return (
        <thead>
            <tr>{headData.map(item => <TableHeadItem key={item.id} title={item.title}/>)}</tr>
        </thead>
    )
}
export default TableHead;