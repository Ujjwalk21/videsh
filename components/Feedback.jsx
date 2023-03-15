import { useState,react } from 'react';
import { AppBar,Avatar, Stack, Box, IconButton, Drawer, Container, useMediaQuery, useTheme, Button, Typography,Rating } from '@mui/material'
import { Close, Menu } from "@mui/icons-material"
const Feedback = ({data}) => {
    return(
    <Box
        sx={{
            width: '92%',
            textAlign: 'left',
            alignContent: 'left',
            
            display: 'flex',
            flexDirection: 'column',
            outline:'1px solid red',
            borderRadius: '10px',
            padding: '10px',
            marginX: '20px',
            marginY: '10px',
            }}>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'left',
                marginX: '0px',
                textAlign: 'left',
                }}>
            <Avatar sx={{
                outline: "1px solid red",
                outlineOffset: "2px",
                width: "40px", height: "40px"
            }}
                src="p1.png"
            />

            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                marginX: '0px',
                textAlign: 'left',
            }}
            >

            
            <Typography
            variant= 'h7'
            sx={{
                marginLeft: '10px',
                fontWeight: 400,
            }}>
                {data?.name}
            </Typography>


            <Box
            sx={{
                marginLeft: '10px',
            }}
            >
            <Rating name="read-only" value={data?.score} readOnly size="small" precision={.1}/> 
            <Typography variant='h7' sx={{color: 'grey', paddingX: '10px',}}>  
                    {data?.date}
            </Typography>
            </Box>



            </Box>

            </Box>

            <Typography
            variant='h4'
            sx={{
                marginLeft: '5px',
                marginY: '10px',
            }}>
                <b>
                {data?.title}
                </b>
            </Typography>

            <Typography
            variant='h10'
            sx={{
                marginLeft: '5px',
                marginBottom: '10px',
                fontWeight: '400',
                }}>
               {data?.comment}
            </Typography>

            <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                textAlign: 'center',
            }}>
                <Box
                display={data?.service1}
                sx={{
                    background: '#FF7F68',
                    borderRadius: '12px',
                    border: '1px solid red',
                    margin: '10px',
                    paddingX: '10px',
                    paddingY: '5px',
                    color: 'white',
                }}>
                    <Typography  variant= 'h7' sx={{fontWeight:700}}>
                        SOP
                    </Typography>
                </Box>

                <Box
                display={data?.service2}
                sx={{
                    background: '#FF7F68',
                    borderRadius: '12px',
                    border: '1px solid red',
                    margin: '10px',
                    paddingX: '10px',
                    paddingY: '5px',
                    color: 'white',
                }}>
                    <Typography  variant= 'h7' sx={{fontWeight:700}}>
                        LOR
                    </Typography>
                </Box>

                <Box
                display={data?.service3}
                sx={{
                    background: '#FF7F68',
                    borderRadius: '12px',
                    border: '1px solid red',
                    margin: '10px',
                    paddingX: '10px',
                    paddingY: '5px',
                    color: 'white',
                }}>
                    <Typography  variant= 'h7' sx={{fontWeight:700}}>
                        Consulting
                    </Typography>
                </Box>
            </Box>
            
    </Box>
    )
};
export default Feedback