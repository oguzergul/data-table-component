import TableRow from "./TableRow";

const TableBody = ({bodyData}) => {
    return (
        <tbody>
        {bodyData.map(person => <TableRow data={person}/>)}
        </tbody>
    )
}

export default TableBody;