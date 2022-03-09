import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Box, Button, Container, Grid, Typography, TextField, CircularProgress } from '@mui/material';
import login from '../../../images/login/login2.png';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useStyles } from '../../../compo/IndexView/Intro/Intro';
import { useStyles2 } from '../Login/Login';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerNewUser, loading, authError } = useAuth();
    const navigate = useNavigate();
    const classes = useStyles();
    const classes2 = useStyles2();

    // Handle Login Info
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    };
    // Handle Login Form
    const handleRegister = e => {
        e.preventDefault();
        // Pass doesn't match
        if (loginData.password !== loginData.password2) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your Password Did Not Match!'
            });
            return
        };
        // Call / register new user func
        registerNewUser(loginData.email, loginData.password, navigate);
    };
    // Display Register Auth Error
    if (authError) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${authError}`
        });
        return
    };
    // Display Successfully Register Message
    if (user.email) {
        Swal.fire({
            icon: 'success',
            title: 'Congrats',
            text: `You have successfully registered!`
        })
    };

    return (
        <Box>
            <Container>
                <Box sx={{ my: 10 }}>
                    <Grid container spacing={{ xs: 2, md: 8 }} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box>
                                <img style={{ width: '100%' }} src={login} alt="" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            {!loading && <Box >
                                <Typography variant="h5" sx={{ my: 3, fontWeight: 600, fontFamily: 'Lato' }}>Register</Typography>
                                {/* Login Form */}
                                <form onSubmit={handleRegister}>
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        // required
                                        name="name"
                                        id="outlined-basic"
                                        label="Your Name"
                                        variant="outlined"
                                        onChange={handleOnChange}
                                    />
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        // required
                                        name="email"
                                        type="email"
                                        id="outlined-basic"
                                        label="Email Address"
                                        variant="outlined"
                                        onChange={handleOnChange}
                                    />
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        // required
                                        name="password"
                                        id="outlined-basic"
                                        label="Password"
                                        variant="outlined"
                                        type="password"
                                        onChange={handleOnChange}
                                    />
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        // required
                                        name="password2"
                                        id="outlined-basic"
                                        label="Confirm Password"
                                        variant="outlined"
                                        type="password"
                                        onChange={handleOnChange}
                                    />
                                    <Button
                                        sx={{ width: { xs: 1, md: '80%' }, py: 1.5, mb: 2 }}
                                        className={classes.btnRegular}
                                        type='submit'
                                    >
                                        Register</Button>
                                </form>
                                <Typography variant="body1" sx={{ fontFamily: 'Lato', width: { xs: 1, md: '80%' }, textAlign: 'center', mb: 2 }}>
                                    <Box component="span" sx={{ color: '#938E8E' }}> Already Registered? </Box>
                                    <Box component="span" sx={{ fontWeight: 600, color: '#2A2929' }}><NavLink to='/login'>Login</NavLink></Box>
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
                            </Box>}
                            {loading && <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <CircularProgress sx={{ color: '#EA4544' }} />
                            </Box>}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Register;