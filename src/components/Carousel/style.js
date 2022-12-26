import styled from "styled-components";
import { ReactComponent as arrow } from '../../assets/icons/arrow.svg'


const Container = styled.div`
position: relative;
height: fit-content;
box-sizing: border-box;
background-color: red;
width: 100%;
padding: 0;
margin: 0;
`

const Arrow = styled(arrow)`
position: absolute;
top: 50%;
width: 50px;
height: 50px;
border-radius: 50%;
padding: 18px; 
background: rgba( 255, 255, 255, 0.2) ;
transform: matrix(-1, 0, 0, 1, 0, 0);
transform: ${({ left }) => (!left ? 'rotate(0deg)' : 'rotate(180deg)')};
left: ${({ left }) => (!left && '20px')}; 
right: ${({ left }) => (left && '20px')};
cursor: pointer;
:hover{
background: rgba( 255, 255, 255, 0.4) ;
}
 `
const Img = styled.img`
  width: 100%;
  height:571px;
`

const Blur = styled.div`
  position: absolute;
  top:0px;
  bottom:0;
  right:0;
  left:0;
  background: rgba(0,0,0,0.3);
`
const Content = styled.div`
  position: absolute;
  top:0px;
  bottom:0;
  right:0;
  left:0;

  background: rgba(0,0,0,0.3);
  display:flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
`

Content.Title = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 44px;
line-height: 48px;
letter-spacing: -0.02em;
color: #FFFFFF;
`
Content.Desc = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
`
Content.Price=styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 36px;
letter-spacing: -0.02em;
color: #FFFFFF;
`
export { Container, Arrow, Img, Blur, Content }