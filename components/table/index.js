import TableWrapper from "./TableWrapper";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = (props) => {
    return (
        <>
            <TableWrapper>
                <TableHead width={props.width} headData={props.head}/>
                <TableBody width={props.width} bodyData={props.body}/>
            </TableWrapper>
        </>
    )
};

export default Table;