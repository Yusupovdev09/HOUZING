import styled from "styled-components";
// import { ReactComponent as bed } from "../../assets/icons/bed.svg";
// import { ReactComponent as garage } from "../../assets/icons/garage.svg";
// import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
// import { ReactComponent as bath } from "../../assets/icons/bath.svg";
// import { ReactComponent as resize } from "../../assets/icons/resize.svg";
// import { ReactComponent as love } from "../../assets/icons/love.svg";

const Container = styled.div`
  width: 100%;
  max-height: 380px;
  max-width: 280px;
  min-width: 230px;
  min-height: 250px;
  border-radius: 3px;

  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.6))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`;

// padding: var(--padding);
const Img = styled.img`
  width: 100%;
  border-radius: 3px;
`;
const Content = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0;
  right: 0;
  left: 0;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
`;
const Blur = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);

  border-radius: 3px;
`;

const Icons = styled.div``;
export { Container, Img, Content, Icons, Blur };
