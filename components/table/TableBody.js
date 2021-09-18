import TableRow from "./TableRow";

const TableBody = ({bodyData}) => {
    return (
        <tbody>
        {bodyData.map(person => <TableRow key={person.title} data={person}/>)}
        </tbody>
    )
}

export default TableBody;