import React from 'react';
import Banner from '../../compo/IndexView/Banner/Banner';
import Intro from '../../compo/IndexView/Intro/Intro';
import SpaServices from '../../compo/IndexView/SpaServices/SpaServices';

const Home = () => {
    return (
        <div>
            <Banner />
            <Intro />
            <SpaServices />
        </div>
    );
};

export default Home;