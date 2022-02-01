import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import bannerImg from '../../../images/Banner/woman2.png';

const Banner = () => {

    return (
        <Box component="section" sx={{ background: '#F6ECE5', marginTop: 3 }}>
            <Container>
                <Grid container spacing={3} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography variant="h2">
                            Brighten Your Skin <br /> & Make Yourself <br /> More Beautiful
                        </Typography>
                        <Typography component="div" variant="body">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                        </Typography>
                        <Button variant="contained">Read More</Button>
                        <Button variant="outlined">Watch Video</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{ marginBottom: -.6 }}>
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