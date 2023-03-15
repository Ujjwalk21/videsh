import { ArrowRightAltOutlined, Description } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material"

const ServiceCard = ({ data }) => {
    return (
        <Box sx={{
            display: "flex",
            alignItems: "left",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "600px",
            height: "300px",
            background: "#FFFFFF",
            borderRadius: "30px",
            padding: "2rem",
            marginRight: "20px"
        }}>
            <Typography variant='h6' sx={{ fontWeight: "700" }}>{data?.title}</Typography>
            <Typography variant='body1'>{data?.description}</Typography>

            <Button
                endIcon={<ArrowRightAltOutlined />}
                sx={{
                    width: "174px",
                    height: "42px",
                    background: "#F9F7F7",
                    border: "1px solid #7254F2",
                    borderRadius: "50px",
                    color: "#7254F2",
                    fontWeight: "500",
                    marginRight: "10px"
                }}>
                <Typography variant="body1">
                    View Services
                </Typography>
            </Button>
        </Box>
    )
}

export default ServiceCard