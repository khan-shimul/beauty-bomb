import React from 'react';
import { Box, Button, Container, Grid, Typography, TextField } from '@mui/material';
import login from '../../../images/login/login2.png';
import { useStyles } from '../../../compo/IndexView/Intro/Intro';
import { makeStyles } from '@mui/styles';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const useStyles2 = makeStyles({
    textFiled: {
        '& label.Mui-focused': {
            color: '#FF725E',
        },
        '& .MuiInput-underline:after': {
            // borderBottomColor: 'pink',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#DCDCDC',
            },
            '&:hover fieldset': {
                borderColor: '#DCDCDC',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FF725E',
            },
        }
    }
});

const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
    };
    const classes = useStyles();
    const classes2 = useStyles2();
    return (
        <Box>
            <Container>
                <Box sx={{ my: 10 }}>
                    <Grid container spacing={{ xs: 2, md: 8 }}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box>
                                <img style={{ width: '100%' }} src={login} alt="" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box>
                                <Typography variant="h5" sx={{ my: 3, fontWeight: 600, fontFamily: 'Lato' }}>Login</Typography>
                                {/* Login Form */}
                                <from onSubmit={handleLogin}>
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        id="outlined-basic"
                                        label="Email Address"
                                        variant="outlined"
                                    />
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        id="outlined-basic"
                                        label="Password"
                                        variant="outlined"
                                        type="password"
                                    />
                                    <Button
                                        sx={{ width: { xs: 1, md: '80%' }, py: 1.5, mb: 2 }}
                                        className={classes.btnRegular}
                                    >
                                        Login</Button>
                                </from>
                                <Typography variant="body1" sx={{ fontFamily: 'Lato', width: { xs: 1, md: '80%' }, textAlign: 'center', mb: 2 }}>
                                    <Box component="span" sx={{ color: '#938E8E' }}> Don't have an account? </Box>
                                    <Box component="span" sx={{ fontWeight: 600, color: '#2A2929' }}>Register</Box>
                                </Typography>
                                {/* Social Media */}
                                <Box sx={{ width: { xs: 1, md: '80%' }, textAlign: 'center', mt: { xs: 0, md: 3 } }}>
                                    <Button
                                        sx={{ color: '#F44A4A' }}
                                        startIcon={<GoogleIcon />}
                                    ></Button>
                                    <Button
                                        startIcon={<FacebookIcon />}
                                    ></Button>
                                    <Button
                                        sx={{ color: '#1D9BF0' }}
                                        startIcon={<TwitterIcon />}
                                    ></Button>
                                    <Button
                                        sx={{ color: '#F44A4A' }}
                                        startIcon={<InstagramIcon />}
                                    ></Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>

    );
};

export default Login;