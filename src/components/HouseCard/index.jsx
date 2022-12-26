import { Container, Content, Details, Img, Icons, Divider } from "./style";
import noimg from "../../assets/img/noimg.png";

export const HouseCard = ({ data = {} }) => {
  // console.log(data);
  const {
    attachments,
    address,
    salePrice,
    price,
    city,
    country,
    houseDetails,
    description,
    category,
  } = data;
  return (
    <Container>
      <Img src={(attachments && attachments[0]?.imgPath) || noimg} />
      <Content>
        <div className="subTitle inline">
          {city},{country},{description}
        </div>
        <div className="info">
          {address || "Quincy St, Brooklyn, NY, USA"}-
          {category?.name || "Category"} {houseDetails?.room || 0}-rooms
        </div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">{houseDetails?.beds || 0} Beds</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">{houseDetails?.bath || 0} Baths</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className="info">{houseDetails?.garage || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">{houseDetails?.area || 0} kv</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Item footer>
          <div className="info">
            <del>${salePrice || 0}/mo</del>
          </div>
          <div className="subTitle">${price || 0}/mo</div>
        </Details.Item>
        <Details.Item row>
          <Icons.Resize />
          <Icons.Love />
        </Details.Item>
      </Content>
    </Container>
  );
};
export default HouseCard;
