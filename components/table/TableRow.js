import TableCell from "./TableCell";

const TableRow = ({data}) => {
    return (
        <tr key={data.title}>
            <TableCell image={data.image} textOne={data.name} textTwo={data.email}/>
            <TableCell textOne={data.title} textTwo={data.department}/>
            <TableCell status={data.status} />
            <TableCell textTwo={data.role} />
            <TableCell textTwo={'Edit'}/>
        </tr>
    )
}

export default TableRow