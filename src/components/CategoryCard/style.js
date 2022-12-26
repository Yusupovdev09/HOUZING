import styled from "styled-components";
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
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
