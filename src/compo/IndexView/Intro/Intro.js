import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import storyImg from '../../../images/welcome/story.jpg'
import serviceImg from '../../../images/welcome/service.jpg'
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    btnRegular: {
        textTransform: 'none !important',
        background: '#F44A4A !important',
        borderRadius: '0px !important',
        color: '#fff !important',
        fontFamily: 'Lato !important',
        fontWeight: '600 !important',
        padding: '7px 25px !important',
        transition: '0.3s !important',
        '&:hover': {
            background: '#D83C3A !important',
        }
    },
    imgTransform: {
        transition: 'transform 300ms !important',
        '&:hover': {
            transform: 'translateY(-8px) !important'
        }
    }
});

const Intro = () => {
    const classes = useStyles();
    return (
        <Container>
            <Box component="div" sx={{ my: 8 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        data-aos="fade-up"
                        data-aos-duration="800"
                        variant="h3"
                        sx={{ fontSize: '3rem', color: '#423033', fontFamily: 'Prata' }}>Welcome to Beauty Bomb Salon</Typography>
                    <Typography
                        variant="p"
                        component="div"
                        sx={{ width: { xs: '100%', md: '50%' }, mx: 'auto', color: '#848484', fontSize: '1rem', lineHeight: '1.5rem', mt: 1.5 }}>
                        We offer a variety of health, relaxation and beauty treatments for both women and men, from top end luxury to very affordable treatments
                    </Typography>
                </Box>
                <Box sx={{ py: 5 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={6}>
                            <img
                                width="100%"
                                className={classes.imgTransform}
                                src={storyImg}
                                alt="" />
                            {/* Story Part */}
                            <Box
                                data-aos="fade-up"
                                data-aos-duration="800"
                                position="relative"
                                top="-30px"
                                sx={{ width: '90%', mx: 'auto', textAlign: 'center', background: '#FAF5F7', p: 5 }}>
                                <Typography variant="h4" sx={{ fontFamily: 'Prata', fontSize: '1.75rem' }}>
                                    Our Story
                                </Typography>
                                <Typography
                                    variant="p"
                                    component="div"
                                    sx={{ fontSize: '1rem', lineHeight: '1.5rem', py: 2.5, color: '#818181' }}
                                >
                                    Spa is a business which provides services in terms of health and beauty treatment. Bio-Valley Day Spa is...
                                </Typography>
                                <Button
                                    contained
                                    className={classes.btnRegular}
                                >
                                    Discover
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <img
                                width="100%"
                                className={classes.imgTransform}
                                src={serviceImg}
                                alt="" />
                            {/* Service Part */}
                            <Box
                                data-aos="fade-up"
                                data-aos-duration="800"
                                position="relative"
                                top="-30px"
                                sx={{ width: '90%', mx: 'auto', textAlign: 'center', background: '#FAF5F7', p: 5 }}>
                                <Typography variant="h4" sx={{ fontFamily: 'Prata', fontSize: '1.75rem' }}>
                                    Our Service
                                </Typography>
                                <Typography
                                    variant="p"
                                    component="div"
                                    sx={{ fontSize: '1rem', lineHeight: '1.5rem', py: 2.5, color: '#818181' }}
                                >
                                    Easily create your spa Executive Summary and glow your skin using our simple to follow template.
                                </Typography>
                                <Button
                                    contained
                                    className={classes.btnRegular}
                                >
                                    Discover
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Intro;