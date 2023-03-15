import { Avatar, Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { theme } from '../helpers/theme'

const FounderComment = ({ data }) => {

    const isMidUp = useMediaQuery(theme?.breakpoints?.up('md'))
    return (
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "25px", marginTop: isMidUp && `${data?.mt}vh`, marginLeft: isMidUp && `${data?.ml}vw` }}>
            <Avatar sx={{
                outline: "1px solid red",
                outlineOffset: "8px",
                width: "100px", height: "100px"
            }}
                src={data?.image}
            />
            <Box sx={{
                maxWidth: "386px", height: "227px", borderRadius: "20px", background: "#fff", outline: "1px solid red",
                outlineOffset: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-around",
                padding: "15px"

            }}>
                <Typography variant='body1'>
                    {data?.comment}
                </Typography>
                <Box>
                    <Typography variant='h4'>
                        <strong>
                            {data?.name}
                        </strong>
                    </Typography>
                    <Typography variant='body1'>
                        <em>{data?.qualification}</em>
                    </Typography>
                </Box>
            </Box>
        </Box>)
}

export default FounderComment