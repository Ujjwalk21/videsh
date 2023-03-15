import { useState } from 'react'
import { Box, Button, Checkbox, TextField, Typography, useTheme } from '@mui/material'
import { ArrowBack, ArrowLeftOutlined, Palette, Send } from '@mui/icons-material'
import styled from '@emotion/styled'
import { theme } from '../helpers/theme'
const Contact = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e, value) => {
        setData({ ...data, [e.target.id]: e.target.value || value })
    }
    const submit = () => {
        // const Ref = doc(db, 'messages', `${data?.name + Math.floor(Math.random() * 100) + data?.email}`);
        // setDoc(Ref, {
        //     email: data?.email,
        //     name: data?.name,
        //     message: data?.message
        // }, { merge: true });


    }
    return (
        <Box sx={{
            minWidth: '350px',
            minHeight: '60vh',
            display: "flex",
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
            background: "#FFFFFF",
            boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.05)",
            borderRadius: "30px",
            padding: "2rem"
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                position: "relative",
                marginBottom: "40px",
                fontSize: "20px"
            }}>
                <ArrowBack sx={{ position: "absolute", top: "50%", left: 10, transform: "translate(0,-50%)" }} />
                <Typography variant='body1'>Register for <strong>SOP editing</strong></Typography>
            </Box>
            <TextField
                variant="outlined"
                label="name"
                size="medium"
                sx={{
                    width: "474px", margin: '10px',
                    borderRadius: "20px",
                    [theme.breakpoints.down('md')]: {
                        width: "280px"
                    },
                }}
                id="name"
                onChange={handleChange}
            />
            <TextField
                variant="outlined"

                label="Email"
                size="medium"
                sx={{
                    width: 474, margin: '10px',
                    [theme.breakpoints.down('md')]: {
                        width: "280px"
                    },
                }}
                id="email"
                onChange={handleChange}
            />
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                gap: "16px"
            }}>
                <TextField
                    variant="outlined"
                    label="code"
                    size="medium"
                    sx={{
                        width: "97px",
                        [theme.breakpoints.down('md')]: {
                            width: "57px"
                        },
                    }}
                    id="code"
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"

                    label="Phone Number"
                    size="medium"
                    sx={{
                        width: "361px",
                        [theme.breakpoints.down('md')]: {
                            width: "213px"
                        },
                    }}
                    id="phone"
                    onChange={handleChange}
                />
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "center",
                width: "100%",
                gap: "16px"
            }}>
                <Checkbox sx={{
                    color: theme?.palette?.primary?.main,
                }} />
                <Typography variant='body1'>Receive Updates through Whatsapp</Typography>
            </Box>
            <Button variant="contained" sx={{
                width: "474px",
                height: "64px",
                background: "#FF7F68",
                color: theme?.palette?.background?.main,
                boxShadow: "8px 8px 30px rgba(249, 247, 247, 0.1)",
                borderRadius: "10px",
                fontWeight: "700",
                fontSize: "20px",
                '&:hover': {
                    background: theme?.palette?.background?.main,
                    color: theme?.palette?.primary?.main,
                    transition: "all .1s ease-in",
                    boxShadow: "none",
                    border: `1px solid ${theme?.palette?.primary?.main}`,
                },
                [theme.breakpoints.down('md')]: {
                    width: "280px"
                },

            }}
                onClick={submit}
            >
                Pay $19.99
            </Button>
        </Box >
    )
}

export default Contact