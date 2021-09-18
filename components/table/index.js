import {TABLE_HEAD_DATA, TABLE_BODY_DATA} from "../../static/tableData";
import TableWrapper from "./TableWrapper";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = () => {
    return (
        <>
            <TableWrapper>
                <TableHead headData={TABLE_HEAD_DATA}/>
                <TableBody bodyData={TABLE_BODY_DATA}/>
            </TableWrapper>
        </>
    )
};

export default Table;