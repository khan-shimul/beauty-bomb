import { Box, Grid } from '@mui/material';
import React from 'react';
import { useServices } from '../../../../hooks/useServices/useServices';
import Loader from '../Loader/Loader';
import SingleSkinTreatment from '../SingleSkinTreatment/SingleSkinTreatment';

const Aroma = () => {
    const [services] = useServices();
    const aromaServices = services.filter(service => service.category === 'aroma');

    return (
        <Box component="div">
            {
                !aromaServices.length && <Loader />
            }
            <Grid container spacing={4}>
                {
                    aromaServices.map(service => <SingleSkinTreatment
                        key={service._id}
                        service={service}
                    />)
                }
            </Grid>
        </Box>
    );
};

export default Aroma;