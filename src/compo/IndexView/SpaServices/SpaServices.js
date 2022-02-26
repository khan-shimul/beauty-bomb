import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

// Custom Styles
const useStyles = makeStyles({
    navItem: {
        color: '#423033 !important',
        // display: 'block',
        fontFamily: 'Prata !important',
        textTransform: 'none !important',
        fontSize: '1.6rem !important',
        transition: '0.3s !important',
        '&:hover': {
            color: '#F34A4A !important',
        }
    },
    activePage: {
        // color: '#F34A4A !important',
        borderBottom: '1.5px solid #F44A4A',
    }
});

const SpaServices = () => {
    // const treatMents = ['Skin', 'Message', 'Body', 'Aroma'];
    // treatMents.map((index, treatMent) => console.log(index[treatMent], treatMent))
    const classes = useStyles();
    return (
        <Box component="section">
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
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 3.5 }}>
                <NavLink to="/skin"
                    className={(navInfo) => ((navInfo.isActive ? classes.activePage : ''))}
                >
                    <Button className={classes.navItem}>Skin</Button>
                </NavLink>
                <NavLink to="/message"
                    className={(navInfo) => ((navInfo.isActive ? classes.activePage : ''))}
                >
                    <Button className={classes.navItem}>Message</Button>
                </NavLink>
                <NavLink to="/body"
                    className={(navInfo) => ((navInfo.isActive ? classes.activePage : ''))}
                >
                    <Button className={classes.navItem}>Body</Button>
                </NavLink>
                <NavLink to="/aroma"
                    className={(navInfo) => ((navInfo.isActive ? classes.activePage : ''))}
                >
                    <Button className={classes.navItem}>Aroma</Button>
                </NavLink>
            </Box>
            <Outlet />
        </Box>
    );
};

export default SpaServices;