import { Box, Button, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// Custom Styles
const useStyles = makeStyles({
    navItem: {
        color: '#423033 !important',
        fontFamily: 'Prata !important',
        textTransform: 'none !important',
        fontSize: '1.6rem !important',
        transition: '0.3s !important',
        '&:hover': {
            color: '#F34A4A !important',
            background: 'transparent !important'
        }
    },
    activePage: {
        // color: '#F34A4A !important',
        borderBottom: '1.5px solid #F44A4A',
    }
});

const SpaServices = () => {
    const [spaCategory, setSpaCategory] = useState('');
    const [services, setServices] = useState([]);

    // Handle Spa Services Category
    const handleSpaCategory = (category) => {
        setSpaCategory(category);
    };

    // Load services categories wise from db
    // useEffect(() => {
    //     fetch(`http://localhost:5000/services`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setServices(data)
    //             const categoriesFiltering = data.filter(singleData => singleData.category === spaCategory);
    //             setServices(categoriesFiltering);
    //         });
    // }, []);



    const classes = useStyles();
    return (
        <Box component="section">
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    sx={{ textAlign: 'center', fontSize: '2.5rem', color: '#333333', fontFamily: 'Prata' }}
                >Popular Procedures
                </Typography>
                <Box component="div" sx={{ height: '1px', width: '50px', background: '#EA4544', mx: 'auto', my: 2 }}></Box>
                <Typography
                    variant="body1"
                    sx={{ textAlign: 'center', color: '#848484', fontFamily: 'Lato' }}
                >
                    Where nature meets bliss
                </Typography>
                {/* NavLinks */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 3.5,
                        mb: 5
                    }}>
                    <NavLink to="/skin"
                        className={(navInfo) => ((navInfo.isActive ? classes.activePage : ''))}
                    >
                        <Button
                            className={classes.navItem}
                            onClick={() => handleSpaCategory('skin')}
                        >Skin</Button>
                    </NavLink>
                    <NavLink to="/message"
                        className={(navInfo) => ((navInfo.isActive ? classes.activePage : ''))}
                    >
                        <Button
                            className={classes.navItem}
                            onClick={() => handleSpaCategory('message')}
                        >Massage</Button>
                    </NavLink>
                    <NavLink to="/body"
                        className={(navInfo) => ((navInfo.isActive ? classes.activePage : ''))}
                    >
                        <Button
                            className={classes.navItem}
                            onClick={() => handleSpaCategory('body')}
                        >Body</Button>
                    </NavLink>
                    <NavLink to="/aroma"
                        className={(navInfo) => ((navInfo.isActive ? classes.activePage : ''))}
                    >
                        <Button
                            className={classes.navItem}
                            onClick={() => handleSpaCategory('aroma')}
                        >Aroma</Button>
                    </NavLink>
                </Box>
                <Outlet />
            </Container>
        </Box>
    );
};

export default SpaServices;