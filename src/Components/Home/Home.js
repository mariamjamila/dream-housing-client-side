import React from 'react';
import Navigation from '../Home/Navigation/Navigation';
import Login from '../Login/Login';
import Footer from '../Home/Footer/Footer';
import Banner from './Banner/Banner';
import AllHouses from './AllHouses/AllHouses';
import BestHouses from './BestHouses/BestHouses';
import ReviewsList from './Review/ReviewsList';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2>This is home</h2>
            <BestHouses></BestHouses>
            <ReviewsList></ReviewsList>
           
           
        </div>
    );
};

export default Home;