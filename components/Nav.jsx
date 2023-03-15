import { useState } from 'react';
import styled from '@emotion/styled';
import { AppBar, Stack, Box, IconButton, Drawer, Container, useMediaQuery, useTheme, Button, Typography } from '@mui/material'
import { Close, Menu } from "@mui/icons-material"
import { Link } from 'react-scroll';


const Nav = () => {
    const theme = useTheme()


    const NavLinkStack = styled(Stack)(({ theme }) => ({
        '&.MuiStack-root': {
            [theme?.breakpoints?.down("lg")]: {
                display: "none",
            }
        },
        '& .MuiStack': {
            [theme?.breakpoints?.down("lg")]: {
                display: "none",
            }
        }
    }))
    const SideContainer = styled(Container)(({ theme }) => ({
        '&.MuiContainer-root': {
            marginLeft: '100px',
            [theme?.breakpoints?.up("md")]: {
                display: "none",
            }
        }
    }))
    // const BurgerIcon = styled(IconButton)(({ theme }) => ({
    //     '&.MuiIconButton-root': {
    //         [theme?.breakpoints?.up("md")]: {
    //             display: "none",
    //         }
    //     }
    // }))

    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        setOpen(open);
    };
    const showStack = useMediaQuery(theme?.breakpoints?.up('md'));
    return (
        <AppBar component="nav" sx={{ background: "#F9F7F7", color: theme?.palette?.color?.main, position: 'fixed', left: 0, top: 0, display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', height: '10vh', width: '100vw', boxShadow: 'none' }
        }>
            <Box sx={{
                marginLeft: '20px',

            }}>
                <Link spy smooth to="hero">
                    <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                        <img src="/Logo.svg" alt="" style={{ width: "45px", }} />
                        <Typography variant='h5' sx={{ marginLeft: "10px", fontWeight: "700", color: "black " }}>Videsh</Typography>
                    </Box>
                </Link>
            </Box>

            <Stack direction='row' alignItems="center" sx={{ position: 'relative', color: theme?.palette?.color?.main }} spacing={3} mr={4}>
                {/* <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '30vw' }}> */}
                {showStack && <NavLinkStack direction='row' alignItems="center" spacing={4}>

                    <Link spy smooth offset={-100} to="home">Home</Link>
                    <Link spy smooth offset={-100} to="about">About</Link>
                    <Link spy smooth offset={-100} to="services">Services</Link>
                    <Link spy smooth offset={-100} to="pricing">Pricing</Link>
                </NavLinkStack>}
                {/* </Toolbar> */}


            </Stack>

            <Button sx={{
                width: "123px",
                height: "33px",
                background: "#F9F7F7",
                border: "1px solid #7254F2",
                borderRadius: "50px",
                color: "#7254F2",
                fontWeight: "500",
                fontSize: "14px",
                marginRight: "20px",
                "&:hover": {
                    background: "#7254F2",
                    color: "#F9F7F7",
                    transition: "all .1s ease-in",
                }
            }}>Book a Call</Button>

            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
                sx={{
                    marginLeft: '20px',
                    '&.MuiIconButton-root': {
                        [theme?.breakpoints?.up("md")]: {
                            display: "none",
                        }
                    }
                }}
            >
                <Menu />
            </IconButton>


            <Drawer
                anchor='right'
                open={open}
                onClose={toggleDrawer(false)}
                sx={{
                    width: 320,
                    minHeight: '30vh',
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: 'center',
                    flexDirection: 'column',


                }}
            >
                <Box sx={{
                    width: '320px',
                    height: '100%',
                    padding: '20px'
                }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer(false)}
                        sx={{
                            marginLeft: '20px',
                        }}
                    >
                        <Close />
                    </IconButton>

                    <NavLinkStack direction='column' alignItems="center" spacing={4}
                        sx={{
                            marginTop: '2rem'
                        }}>
                        <Link spy smooth offset={-100} to="home">Home</Link>
                        <Link spy smooth offset={-100} to="about">About</Link>
                        <Link spy smooth offset={-100} to="services">Services</Link>
                        <Link spy smooth offset={-100} to="pricing">Pricing</Link>
                    </NavLinkStack>
                </Box>
            </Drawer>

        </AppBar >

    )
};
export default Nav;
