import React from 'react';
import Navigation from '../Home/Navigation/Navigation';
import Login from '../Login/Login';
import Footer from '../Home/Footer/Footer';
import Banner from './Banner/Banner';
import AllHouses from './AllHouses/AllHouses';
import BestHouses from './BestHouses/BestHouses';
import ReviewsList from './Review/ReviewsList';
import { Container, Divider } from '@mui/material';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Container>
                <BestHouses></BestHouses>
                <Divider></Divider>
                <ReviewsList></ReviewsList>
            </Container>
           
           
           
        </div>
    );
};

export default Home;