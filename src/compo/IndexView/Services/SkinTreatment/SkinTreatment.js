import { Box, Grid } from '@mui/material';
import React from 'react';
import { useServices } from '../../../../hooks/useServices/useServices';
import Loader from '../Loader/Loader';
import SingleSkinTreatment from '../SingleSkinTreatment/SingleSkinTreatment';


const SkinTreatment = () => {
    const [services] = useServices();
    const skinServices = services.filter(service => service.category === 'skin');

    return (
        <Box component="div">
            {
                !skinServices.length && <Loader />
            }
            <Grid container spacing={4}>
                {
                    skinServices.map(service => <SingleSkinTreatment
                        key={service._id}
                        service={service}
                    />)
                }
            </Grid>
        </Box>
    );
};

export default SkinTreatment;