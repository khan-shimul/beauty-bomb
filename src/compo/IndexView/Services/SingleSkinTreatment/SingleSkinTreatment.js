import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const SingleSkinTreatment = ({ skinService }) => {
    const { title, img, price, featureOne, featureTwo, details } = skinService;


    return (
        <Grid item xs={12} sm={12} md={4}>
            <Box>
                {/* Image */}
                <Box>
                    <img
                        width={'100%'}
                        src={img}
                        alt="skin service" />
                </Box>
                {/* Description Part */}
                <Box sx={{ background: '#FF508B', px: 2, py: 3, mt: -0.7, zIndex: 1, position: 'relative' }}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontSize: '1.4rem',
                            fontFamily: 'Prata',
                            color: '#FFFEFE'
                        }}> {title} </Typography>
                    <Box
                        sx={{
                            height: '1px',
                            width: '50px',
                            background: '#FFFEFE',
                            my: 1.5
                        }}
                    ></Box>
                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: 'Lato',
                            fontSize: '0.85rem',
                            color: '#FFFEFE',
                            mb: 1.5
                        }}
                    >
                        {featureOne}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: 'Lato',
                            fontSize: '0.85rem',
                            color: '#FFFEFE',
                        }}
                    >
                        {featureTwo}
                    </Typography>
                    {/* Hidden */}
                    <Box>
                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily: 'Lato',
                                fontSize: '0.85rem',
                                color: '#FFFEFE',
                                mt: 2
                            }}
                        >
                            {details.slice(0, 120)}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};

export default SingleSkinTreatment;