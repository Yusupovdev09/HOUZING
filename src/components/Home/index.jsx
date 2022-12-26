import Carousel from "../Carousel";
import React from "react";
import { Container } from "./style";
import Category from "../Category";

export const Home = () => {
  return (
    <Container>
      <Carousel />
      <Category />
    </Container>
  );
};
export default Home;
