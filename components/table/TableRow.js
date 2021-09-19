import TableCell from "./TableCell";

const TableRow = (props) => {
    return (
        <tr>
            <TableCell width={props.width} image={props.data.image} textOne={props.data.name}
                       textTwo={props.data.email}/>
            <TableCell width={''} textOne={props.data.title} textTwo={props.data.department}/>
            <TableCell width={''} status={props.data.status}/>
            <TableCell width={''} textTwo={props.data.role}/>
            <TableCell width={''} textTwo={'Edit'}/>
        </tr>
    )
}

export default TableRow