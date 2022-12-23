import styled from "styled-components";
import { ReactComponent as bed } from '../../assets/icons/bed.svg'
import { ReactComponent as garage } from '../../assets/icons/garage.svg'
import { ReactComponent as ruler } from '../../assets/icons/ruler.svg'
import { ReactComponent as bath } from '../../assets/icons/bath.svg'
import { ReactComponent as resize } from '../../assets/icons/resize.svg'
import { ReactComponent as love } from '../../assets/icons/love.svg'

const Container = styled.div`
  width: 380px;
  height: 429px;
  filter: drop-shadow(0px 20px 38px rgba(0,0,0,0.6))
  drop-shadow(0px 7px 46px rgba(0 , 0, 0, 0.06))
  drop-shadow(0px 8px 15px rgba(0 , 0, 0, 0.06));
  margin: 100px;
`

const Img = styled.img`
  width: 100%;
  max-height: 220px;
`
const Content = styled.div`
display: flex;
flex-direction: ${({ footer }) => footer ? 'row' : 'column'};
justify-content: ${({ footer }) => footer && 'space-between'};
padding: 16px 20px ;
background:white ;
`
const Details = styled.div`
display: flex;
justify-content: space-between;
padding-top: 16px;
`

Details.Item = styled.div`
flex-direction: column;
flex-direction: ${({ row }) => (row ? 'row' : 'column')};
display:flex;
align-items: ${({ footer }) => !footer && 'center'};

`
const Icons = styled.div``

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Ruler = styled(ruler)``;
Icons.Garage = styled(garage)``;
Icons.Resize = styled(resize)``
Icons.Love = styled(love)`
width:27px;
height:27px;
padding:5px ;
border-radius: 50%;
background: #F6F8F9 ;
margin-left: 20px; 
cursor: pointer;
:active{
   transform: scale(0.9);
}
`

const Divider = styled.div`
 background:#E6E9EC;
 height: 1px;
 width:100%;
 `

export { Container, Img, Content, Details, Icons, Divider }