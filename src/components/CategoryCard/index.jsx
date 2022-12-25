import { Blur, Container, Content, Img } from "./style";
import noimg from "../../assets/img/noimg.png";
import category from "../../assets/img/category.png";

export const HouseCard = ({ data = {} }) => {
  // console.log(data);
  const { name } = data;
  return (
    <Container>
      <Img src={ category || noimg } />
      <Blur/>
      <Content>
       {name || 'CategoryName'}
      </Content>
    </Container>
  );
};
export default HouseCard;
