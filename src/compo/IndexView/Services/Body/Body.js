import { Box, Grid } from '@mui/material';
import React from 'react';
import { useServices } from '../../../../hooks/useServices/useServices';
import Loader from '../Loader/Loader';
import SingleSkinTreatment from '../SingleSkinTreatment/SingleSkinTreatment';

const Body = () => {
    const [services] = useServices();
    const bodyServices = services.filter(service => service.category === 'body');
    return (
        <Box component="div">
            {
                !bodyServices.length && <Loader />
            }
            <Grid container spacing={4}>
                {
                    bodyServices.map(service => <SingleSkinTreatment
                        key={service._id}
                        service={service}
                    />)
                }
            </Grid>
        </Box>
    );
};

export default Body;