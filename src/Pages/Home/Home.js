import React from 'react';
import Banner from './Banner';
import Deals from './Deals';
import Parts from './Parts';
import Stat from './Stat';
import Trust from './Trust';
import UserReview from './UserReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Deals></Deals>
            <Parts></Parts>
            <Stat/>
            <UserReview/>
            <Trust/>
        </div>
    );
};

export default Home;