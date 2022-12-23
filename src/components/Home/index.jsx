import  Carousel  from '../Carousel';
import React from 'react'
import { Container } from './style'
import HouseCard from '../HouseCard';

export const Home = () => {
    return (
        <Container>
            <Carousel />
            <HouseCard/>
        </Container>
    )
}
export default Home;