import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { makeStyles } from '@mui/styles';

const SingleSkinTreatment = ({ service }) => {
    const { title, img, price, featureOne, featureTwo, details } = service;

    const useStyles = makeStyles({
        root: {
            transition: 'transform 300ms !important',
            '&:hover': {
                transform: 'translateY(-15px) !important',

            }
        },
        btnDetails: {
            color: '#FAF5F7 !important',
            textTransform: 'none !important',
            border: '1px solid #FAF5F7 !important',
            transition: '0.5ms',
            '&:hover': {
                color: '#DFDADA !important'
            }
        }
    });

    const classes = useStyles();

    return (
        <Grid item xs={12} sm={12} md={4}>
            <Box
                data-aos="zoom-in"
                data-aos-duration="3000"
                component="div"
                className={classes.root}
            >
                {/* Image */}
                <Box>
                    <img
                        width='100%'
                        src={img}
                        alt="skin service" />
                </Box>
                {/* Description Part */}
                <Box
                    position="relative"
                    top="-30px"
                    sx={{
                        background: '#FF508B',
                        px: 2,
                        py: 3,

                    }}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontSize: '1.4rem',
                            fontFamily: 'Prata',
                            color: '#FFFEFE'
                        }}> {title} </Typography>
                    {/* Line1 */}
                    <Box
                        sx={{
                            height: '1px',
                            width: '50px',
                            background: '#EDE6E6',
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
                            {details.slice(0, 80)}...
                        </Typography>
                        {/* line2 */}
                        <Box
                            sx={{
                                height: '1px',
                                maxWidth: '100%',
                                background: '#EDE6E6',
                                mt: 2.5,
                                mb: 2
                            }}
                        ></Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: 'Lato',
                                    fontSize: '1.5rem',
                                    color: '#FFFEFE',
                                    fontWeight: 700,
                                }}
                            > ${price} </Typography>
                            <Button
                                variant="text"
                                endIcon={<NavigateNextIcon />}
                                className={classes.btnDetails}
                            >View Details</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};

export default SingleSkinTreatment;