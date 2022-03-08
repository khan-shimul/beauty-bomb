import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../../images/logo/bbs.png';
import { makeStyles } from '@mui/styles';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const useStyles = makeStyles({
    root: {
        background: '#FAF5F7 !important',
        padding: '10px',
    },
    logo: {
        height: '40px',
        width: '40px',
        marginRight: '20px'
    },
    menu: {
        color: '#423033 !important',
        // display: 'block',
        fontFamily: 'Lato',
        textTransform: 'none !important',
        fontSize: '16px !important',
        transition: '0.3s !important',
        '&:hover': {
            color: '#F34A4A !important',
        }
    },
    activePage: {
        color: '#F34A4A !important',
        borderBottom: '1.5px solid #F44A4A',
    }
});

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const classes = useStyles();

    const { user } = useAuth();


    return (
        <AppBar component="div" elevation={0} position="sticky" className={classes.root}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <img className={classes.logo} src={logo} alt="logo" />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, color: '#423033', fontFamily: 'Lato' }}
                    >
                        BBS
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ color: '#423033' }} />
                        </IconButton>

                        {/* Mobile Menu */}
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <Box onClick={handleCloseNavMenu}>
                                <Link to="/home">
                                    <MenuItem className={classes.menu} >Home</MenuItem>
                                </Link>
                                <Link to="/about">
                                    <MenuItem className={classes.menu}>About Us</MenuItem>
                                </Link>
                                <Link to="/service">
                                    <MenuItem className={classes.menu}>Our Service</MenuItem>
                                </Link>
                                <Link to="/team">
                                    <MenuItem className={classes.menu}>Team</MenuItem>
                                </Link>
                                <Link to="/contact">
                                    <MenuItem className={classes.menu}>Contact</MenuItem>
                                </Link>
                                <Link to="/login">
                                    <MenuItem className={classes.menu}>Login</MenuItem>
                                </Link>
                            </Box>
                        </Menu>
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ fontFamily: 'Lato', flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
                        <NavLink to="/home"
                            className={(navInfo) => ((navInfo.isActive ? classes.activePage : ''))}
                        >
                            <Button className={classes.menu}>Home</Button>
                        </NavLink>
                        <NavLink to="/about"
                            className={(navInfo) => (navInfo.isActive ? classes.activePage : "")}
                        >
                            <Button className={classes.menu}>About Us</Button>
                        </NavLink>
                        <NavLink to="/service"
                            className={(navInfo) => (navInfo.isActive ? classes.activePage : "")}
                        >
                            <Button className={classes.menu}>Our Service</Button>
                        </NavLink>
                        <NavLink to="/team"
                            className={(navInfo) => (navInfo.isActive ? classes.activePage : "")}
                        >
                            <Button className={classes.menu}>Team</Button>
                        </NavLink>
                        <NavLink to="/contact"
                            className={(navInfo) => (navInfo.isActive ? classes.activePage : "")}
                        >
                            <Button className={classes.menu}>Contact</Button>
                        </NavLink>
                        {
                            user?.email ?
                                <Button className={classes.menu}>Logout</Button>
                                :
                                <NavLink to="/login"
                                    className={(navInfo) => (navInfo.isActive ? classes.activePage : "")}
                                >
                                    <Button className={classes.menu}>Login</Button>
                                </NavLink>
                        }
                    </Box>

                    <Box sx={{ flexGrow: 0, ml: 2 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
