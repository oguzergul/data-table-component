import TableRow from "./TableRow";

const TableBody = (props) => {
    return (<tbody>{props.bodyData.map((person, index) => <TableRow width={props.width} key={index}
                                                                    data={person}/>)}</tbody>)
}
export default TableBody;