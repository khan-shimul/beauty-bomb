import React from 'react';
import Banner from '../../compo/IndexView/Banner/Banner';
import Intro from '../../compo/IndexView/Intro/Intro';
import SpaServices from '../../compo/IndexView/Services/SpaServices/SpaServices';
import Footer from '../../compo/shared/Footer/Footer';
import Header from '../../compo/shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Intro />
            <SpaServices />
            <Footer />
        </div>
    );
};

export default Home;