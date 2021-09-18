import styled from "styled-components";

const StatusBadge = ({status}) => {

    const StatusBadge = styled.span`{
      padding: 2px 10px;
      background: ${status === 'Active' ? '#D1FAE5' : '#FEF3F2'};
      border-radius: 9999px;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: ${status === 'Active' ? '#065F46' : '#B42318'};
    }`
    return (<StatusBadge>{status}</StatusBadge>)
}

export default StatusBadge;