import Carousel from "../Carousel";
import React from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard";
import CategoryCard from "../CategoryCard";

export const Home = () => {
  return (
    <Container>
      <Carousel />
      <HouseCard />
      <CategoryCard />
    </Container>
  );
};
export default Home;
