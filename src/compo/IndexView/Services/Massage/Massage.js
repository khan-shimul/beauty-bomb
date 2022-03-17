import React from 'react';
import { Box, Grid } from '@mui/material';
import { useServices } from '../../../../hooks/useServices/useServices';
import SingleSkinTreatment from '../SingleSkinTreatment/SingleSkinTreatment';
import Loader from '../Loader/Loader';


const Massage = () => {
    const [services] = useServices();
    const massageServices = services.filter(service => service.category === 'massage');

    return (
        <Box component="div">
            {
                !massageServices.length && <Loader />
            }
            <Grid container spacing={4}>
                {
                    massageServices.map(service => <SingleSkinTreatment
                        key={service._id}
                        service={service}
                    />)
                }
            </Grid>
        </Box>
    );
};

export default Massage;