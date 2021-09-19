import styled from "styled-components";

const StatusBadges = styled.span`{
      padding: 2px 10px;
      background: ${props => props.status === 'Active' ? '#D1FAE5' : '#FEF3F2'};
      border-radius: 9999px;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: ${props => props.status === 'Active' ? '#065F46' : '#B42318'};
    }`
const StatusBadge = ({status}) => {

    return (<StatusBadges status={status}>{status}</StatusBadges>)
}

export default StatusBadge;