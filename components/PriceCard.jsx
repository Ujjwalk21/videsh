import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../helpers/theme'

const PriceCard = ({ data }) => {

    return (
        <Box sx={{
            width: "260px",
            height: "370px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-around",
            // border: "1px solid #FF7F68",
            borderRadius: "20px",
            background: data?.bg && `${data?.bg}`,
            padding: "1.5rem",
        }}>
            <Typography variant='h6' sx={{
                margin: "1rem auto",
                fontWeight: 700,
                color: data?.bg ? "#fff" : "#000"
            }}>{data?.title}</Typography>
            <Box component='ul' sx={{
                fontSize: "14px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                margin: "1rem auto",
                color: data?.bg ? "#fff" : "#000",
                [theme.breakpoints.down('md')]: {
                    fontSize: '12px',
                },

            }}>
                {
                    data?.description.map((item, index) => {
                        return (<Box component='li' key={index}>{item}</Box>)
                    })
                }

            </Box>
            <Button sx={{
                width: "227px",
                height: "51px",
                border: "1px solid #FF7F68",
                boxShadow: "8px 8px 30px rgba(249, 247, 247, 0.1)",
                borderRadius: "10px",
                background: "#fff",
                color: "#FF7F68",
                fontWeight: 700,
            }} variant='contained'>${data?.price}</Button>
        </Box>
    )
}

export default PriceCard