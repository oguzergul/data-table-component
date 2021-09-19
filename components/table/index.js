import TableWrapper from "./TableWrapper";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({head, body}) => {
    return (
        <>
            <TableWrapper>
                <TableHead headData={head}/>
                <TableBody bodyData={body}/>
            </TableWrapper>
        </>
    )
};

export default Table;