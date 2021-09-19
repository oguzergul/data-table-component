import TableRow from "./TableRow";

const TableBody = ({bodyData}) => {
    return (
        <tbody>
        {bodyData.map((person,index) => <TableRow key={index} data={person}/>)}
        </tbody>
    )
}

export default TableBody;