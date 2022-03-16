import { Box, Grid } from '@mui/material';
import React from 'react';
import { useServices } from '../../../../hooks/useServices/useServices';
import SingleSkinTreatment from '../SingleSkinTreatment/SingleSkinTreatment';


const SkinTreatment = () => {
    const [services] = useServices();
    const skinServices = services.filter(service => service.category === 'skin');

    return (
        <Box component="div">
            <Grid container spacing={4}>
                {
                    skinServices.map(skinService => <SingleSkinTreatment
                        key={skinService._id}
                        skinService={skinService}
                    />)
                }
            </Grid>
        </Box>
    );
};

export default SkinTreatment;