import { Box } from '@mui/material';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
            <CircularProgress
                // color="secondary"
                sx={{ color: '#F44A4A', mt: 2 }}
            />
        </Box>
    );
};

export default Loader;