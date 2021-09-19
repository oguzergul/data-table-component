import TableCell from "./TableCell";

const TableRow = ({data}) => {
    return (
        <tr>
            <TableCell width={''} image={data.image} textOne={data.name} textTwo={data.email}/>
            <TableCell width={''} textOne={data.title} textTwo={data.department}/>
            <TableCell width={''} status={data.status} />
            <TableCell width={''} textTwo={data.role} />
            <TableCell width={''} textTwo={'Edit'}/>
        </tr>
    )
}

export default TableRow