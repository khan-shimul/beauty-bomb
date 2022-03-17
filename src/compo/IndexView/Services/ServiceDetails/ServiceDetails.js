import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../../shared/Footer/Footer';
import Header from '../../../shared/Header/Header';

const ServiceDetails = () => {
    const { id } = useParams();
    const [singleService, setSignleService] = useState({});

    // Load Single Service
    useEffect(() => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            <Header />
            <h2>Service Details {id} </h2>
            <Footer />
        </div>
    );
};

export default ServiceDetails;