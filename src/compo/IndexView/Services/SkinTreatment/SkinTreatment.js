import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useServices } from '../../../../hooks/useServices/useServices';

const SkinTreatment = () => {
    const [services] = useServices();
    const skinServices = services.filter(service => service.category === 'skin');

    return (
        <Box component="div">
            <Grid container spacing={4}>
                {
                    skinServices.map(skinService => <Grid item xs={12} sm={12} md={4} key={skinService._id}>
                        <Box>
                            <img
                                width={'100%'}
                                src={skinService.img}
                                alt="skin service" />
                            <Typography> {skinService.title} </Typography>
                        </Box>
                    </Grid>)
                }
            </Grid>
        </Box>
    );
};

export default SkinTreatment;