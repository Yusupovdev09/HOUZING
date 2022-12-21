import styled from "styled-components";

const getType = ({ type }) => {
    switch (type) {
        case 'dark':
            return {
                background: 'transparent',
                border: '1px solid #ffff',
                color: '#ffff',
            };
        case 'light':
            return {
                background: '#fffff',
                border: '1px solid #E6E9EC',
                color: '#0D263B',
            };
        case 'primary':
            return {
                background: '#0061DF',
                border: 'none',
                color: '#ffff',
            };
        default:
            return {
                background: '#0061DF',
                border: 'none',
                color: '#ffff',
            };
    }
}
const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:2px;
  min-width: 120px;
  font-size: ${({ fontSize }) => fontSize ? `${fontSize}px` : '14px '};
  height: ${({ height }) => height ? `${height}px` : '44px'};
  width: ${({ width }) => width ? `${width}px` : '100%'};
  border: 1px solid #E6E9EC;
  outline:none;
  padding-left: ${({ icon }) => icon ? "35px" : "20px"};
  /* ${getType}  */
`;

const Wrapper = styled.div`
position:relative;
display: flex;
align-items: center ;
   width: ${({ width }) => width ? `${width}px` : '100%'};
`
const Icon = styled.div`
position: absolute ;
left: 20px;
transform: translate(-50%,-50%);
top: 50%;
`


export { Container, Wrapper, Icon }