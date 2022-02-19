import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import bannerImg from '../../../images/Banner/woman2.png';
import { makeStyles } from '@mui/styles';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import freshGreen from '../../../images/Banner/green.png';

const Banner = () => {
    const useStyles = makeStyles({
        primaryBtn: {
            textTransform: 'none !important',
            background: '#F44A4A !important',
            borderRadius: '0px !important',
            color: '#fff !important',
            fontFamily: 'Lato',
            transition: 'transform 250ms !important',
            '&:hover': {
                background: '#E54646 !important',
                transform: 'translateY(-10px) !important'
            }
        },
        secondaryBtn: {
            textTransform: 'none !important',
            background: 'transparent !important',
            borderRadius: '0px !important',
            color: '#F44A4A !important',
            fontFamily: 'Lato',
            transition: 'transform 250ms !important',
            '&:hover': {
                border: '1px solid #F44A4A !important',
                transform: 'translateY(-10px) !important'
            }
        }
    });
    const classes = useStyles();
    return (
        <Box component="section" sx={{ background: '#F6ECE5', marginTop: 3, pb: 2 }}>
            <Container>
                <Grid container spacing={3} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box sx={{ display: { xs: 'none', md: 'block' }, ml: -10, mb: -5 }}>
                            <img
                                width='120px'
                                height='120px'
                                src={freshGreen} alt="" />
                        </Box>

                        <Typography variant="h2" sx={{ fontFamily: 'Prata', fontWeight: 500, color: '#423033', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '3rem', md: '3.7rem' } }}>
                            Brighten Your Skin & Make Yourself More Beautiful
                        </Typography>
                        <Typography component="div" variant="body2" sx={{ width: { md: '65%' }, color: '#848484', py: 3.5, textAlign: { xs: 'center', md: 'left' } }}>
                            Taking care of your overall health is the first step towards achieving naturally glowing skin. You will not need any make-up to look gorgeous.
                        </Typography>
                        <Button
                            elevation={0}
                            className={classes.primaryBtn}
                            sx={{ width: { xs: '100%', md: '30%' }, mb: { xs: 2, md: 0 }, mr: 2.5, px: 4.5, py: 1.5, fontWeight: 600 }}
                        >Read More</Button>
                        <Button
                            startIcon={<SlowMotionVideoIcon />}
                            className={classes.secondaryBtn}
                            sx={{ width: { xs: '100%', md: '35%' }, mb: { xs: 2, md: 0 }, px: 4.5, py: 1.5, fontWeight: 600 }}
                        >Watch Video</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{ marginBottom: -2.5 }}>
                        <img
                            width='100%'
                            height='100%'
                            src={bannerImg} alt="img" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;