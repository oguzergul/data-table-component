import styled from "styled-components";

const TableWrapper = (props) => {
    const TableWrapper = styled.table`
      white-space: nowrap;
      margin: 100px auto;
      border: 1px solid #E5E7EB;
      border-collapse: separate;
      border-spacing: 0;
      width: 100%;
      max-width: 1216px;
      background: #FFFFFF;
      border-radius: 8px;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
    `;

    return (<TableWrapper>{props.children}</TableWrapper>)
}

export default TableWrapper;