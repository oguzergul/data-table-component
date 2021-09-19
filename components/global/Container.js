import styled from 'styled-components';

const MainContainer = styled.div`;
  width: 100vw;
  height: 100%;
  max-width: 1080px !important;
  margin: 0 auto;
  padding: 35px 0;
`;
const Container = (props) => {
    return (<MainContainer>{props.children}</MainContainer>)
}
export default Container;