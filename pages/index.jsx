import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { AppBar, Avatar, Box, Button, Grid, Typography, useTheme } from '@mui/material'
import Nav from '../components/Nav'
import { maxWidth, width } from '@mui/system'
import { ArrowRightAlt, ArrowRightAltOutlined, ArrowRightAltSharp, ArrowRightAltTwoTone, KeyboardArrowRight, KeyboardDoubleArrowRightTwoTone, LogoDev, SubdirectoryArrowRightSharp } from '@mui/icons-material'
import FounderComment from '../components/FounderComment'
import ServiceCard from '../components/ServiceCard'
import PriceCard from '../components/PriceCard'
import Contact from '../components/Contact'
import Hiddenwall from '../components/Hiddenwall'
import { theme } from '../helpers/theme'

export default function Home() {

  const services = [{
    title: "SOP & Resume Editing",
    description: "Our resume editing service includes detailed comments and edits to improve the content and presentation of your document. We also provide samples of successful resumes from applicants who were accepted to top universities, including MIT, Stanford, Purdue, UIUC, and Michigan",
  },
  {
    title: "LOR Advice",
    description: "Our resume editing service includes detailed comments and edits to improve the content and presentation of your document. We also provide samples of successful resumes from applicants who were accepted to top universities, including MIT, Stanford, Purdue, UIUC, and Michigan",
  },
  {
    title: "1 : 1 Consultation Call",
    description: "Our resume editing service includes detailed comments and edits to improve the content and presentation of your document. We also provide samples of successful resumes from applicants who were accepted to top universities, including MIT, Stanford, Purdue, UIUC, and Michigan",
  },
  ]
  const pricing = [
    {
      title: "SOP & Resume Editing",
      description: [
        "Detailed SOP Feedback and Editing.",
        "Samples from successful applicants to top universities.",
        "Pdf With Tips for writing a Excellent SOP.",
      ],
      price: "19.99"
    },
    {
      title: "LOR Advice",
      description: [
        "Detailed SOP Feedback and Editing.",
        "Samples from successful applicants to top universities.",
        "Pdf With Tips for writing a Excellent SOP.",
      ],
      price: "19.99"
    },
    {
      title: "1 : 1 Consultation Call",
      description: [
        "Detailed SOP Feedback and Editing.",
        "Samples from successful applicants to top universities.",
        "Pdf With Tips for writing a Excellent SOP.",
      ],
      price: "19.99"
    },
    {
      title: "Best Value",
      description: [
        "Detailed SOP Feedback and Editing.",
        "Samples from successful applicants to top universities.",
        "Pdf With Tips for writing a Excellent SOP.",
      ],
      price: "29.99",
      bg: "#FF7F68"
    },
  ]
  const comments = [{
    image: "p1.png",
    name: "Sreedath Panat",
    qualification: "IIT Madrass,PhD MIT",
    comment: "Videsh exists to help you achieve your academic and personal goals through studying abroad. Our team of advisors is here to guide and support you every step of the way.",
    mt: "0",
    ml: "0"
  },
  {
    image: "p1.png",

    name: "Raj Dandekar",
    qualification: "IIT Madrass,PhD MIT",
    comment: "Videsh exists to help you achieve your academic and personal goals through studying abroad.",
    mt: "10",
    ml: "10"
  },
  {
    image: "p2.png",

    name: "Rajat Dandekar",
    qualification: "IIT Madrass,PhD Purdue University",
    comment: "Videsh exists to help you achieve your academic and personal goals through studying abroad.",
    mt: "20",
    ml: "-5"
  }
  ]


  return (
    <>
      <Head>
        <title>Videsh</title>
        <meta name="description" content="Videsh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Grid container sx={{
        display: "grid",
        placeContent: "center",
        marginTop: "10vh",
        width: "100vw"
      }}>
        <Grid item sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100vw",
          height: "90vh",
          padding: "4rem",
          background: "url(/bg3.svg)",
          backgroundPosition: "300% 30%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "80%",
          [theme.breakpoints.down('md')]: {
            height: "fit-content",
          },
        }}>
          <Box sx={{
            display: "flex",
            alignItems: "left",
            flexDirection: "column",
            maxWidth: "650px",
          }}>
            <Typography variant='h1' sx={{ fontWeight: "700" }}>Expert Help For Your Study Abroad Journey</Typography>
            <Box sx={{ padding: "2rem" }} >
              <Typography variant='h4' sx={{ paddingLeft: "16px", borderLeft: "1px solid rgba(41, 41, 41, 0.5)" }}>Lorem ipsum dolor sit amet consectetur. Aliquet nam duis pellentesque nisl ullamcorper in ornare ultrices. Proin volutpat aliquam nulla quam sed sem duis feugiat. </Typography>

            </Box>
            <Box>
              <Button sx={{
                width: "191px",
                height: "52px",
                background: "#F9F7F7",
                border: "1px solid #7254F2",
                borderRadius: "50px",
                color: "#7254F2",
                fontWeight: "500",
                fontSize: "16px",
                marginRight: "10px",
                marginTop: "10px",

                "&:hover": {
                  background: "#7254F2",
                  color: "#F9F7F7",
                  transition: "all .1s ease-in",
                }
              }}>View Services</Button>
              <Button sx={{
                width: "191px",
                height: "52px",
                background: "#7254F2",
                border: "1px solid #7254F2",
                boxShadow: "0px 4px 50px rgba(114, 84, 242, 0.2)",
                borderRadius: "50px",
                color: "#F9F7F7",
                fontWeight: "500",
                fontSize: "16px",
                marginTop: "10px",

                "&:hover": {
                  background: "#F9F7F7",
                  color: "#7254F2",
                  transition: "all .1s ease-in",
                }

              }}>Book a call</Button>
            </Box>
          </Box>
        </Grid>
        <Grid item sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap-reverse",
          width: "100vw",
          height: "90vh",
          padding: "4rem",
          position: "relative",
          background: "url(/bg3.svg)",
          backgroundPosition: "270% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "70%",
          // '&:before': {
          //   width: "100%",
          //   height: "100%",
          //   content: "''",
          //   position: "absolute",
          //   top: "50%",
          //   right: "-50%",
          //   background: "url(/bg3.svg)",
          //   backgroundPosition: "90% 200%",
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "40%",
          //   transform: "rotateZ(-90deg) translateY(-50%)",
          //   zIndex: "-1"
          // },

          [theme.breakpoints.down('md')]: {
            height: "fit-content",
          },
        }}>
          <Box sx={{
            display: "flex",
            alignItems: "left",
            flexDirection: "column",
            maxWidth: "600px",
            gap: "20px  "
          }}>
            <Typography variant='h2' sx={{ fontWeight: "700" }}>Why we Exist</Typography>

            <Typography variant='h4' sx={{}}>Videsh exists to help you achieve your academic and personal goals through studying abroad. Our team of advisors is here to guide and support you every step of the way.</Typography>

            <Box>
              <Button endIcon={<ArrowRightAltOutlined />} sx={{
                width: "191px",
                height: "52px",
                background: "#F9F7F7",
                border: "1px solid #7254F2",
                borderRadius: "50px",
                color: "#7254F2",
                fontWeight: "500",
                fontSize: "16px",
                marginRight: "10px"
              }}>View Services</Button>
            </Box>
          </Box>
          <Box sx={{
            width: "500px",
            [theme.breakpoints.down('md')]: {
              width: "90%"
            },
          }}>
            <img style={{
              width: "100%",
            }} src="/bg1.png" />
          </Box>
        </Grid>
        <Grid item sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", padding: "4rem",
          gap: "3rem",
          position: "relative",
          background: "url(/bg3.svg)",
          backgroundPosition: "350% -50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "80%",

        }}>
          <Box sx={{
            background: `url("/bg1.png")`,
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "80%",
            position: "absolute",
            top: 0, left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            opacity: "0.05"
          }}></Box>
          <Typography variant='h2' sx={{ fontWeight: "700" }}>Hear from the Founders</Typography>
          <Box sx={{
            display: "flex", flexDirection: "row", gap: "25px",
            flexWrap: "wrap"

          }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
              <FounderComment data={comments[0]} />
              <FounderComment data={comments[1]} />
            </Box>
            <FounderComment data={comments[2]} />
          </Box>
        </Grid>
        <Grid item sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "3rem",
          overflowX: "scroll",

          "&::-webkit-scrollbar": {
            display: "none",
            // width: "0px",
          },
          position: "relative"
        }}>
          <Box sx={{
            background: `url("/bg2.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            backgroundPosition: "top left",
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            // opacity: "1"
          }}></Box>
          <Typography variant='h2' sx={{ margin: "1rem 4rem", fontWeight: "700" }}>Services</Typography>
          <Box sx={{
            // width: "100vw",
            // overflowX: "scroll",
            display: "flex",
            flexDirection: "row",
            margin: "1rem 4rem",
            gap: "20px",
          }}>
            {
              services.map((service, index) => {
                return (
                  <ServiceCard data={service} key={index} />
                )
              })
            }
          </Box>
        </Grid>
        <Grid item sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "4rem",
          gap: "3rem",
          overflowX: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          position: "relative"
        }}>
          <Box sx={{
            background: `url("/bg2.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "90%",
            backgroundPosition: "-90% 50%",
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            // opacity: "1"
          }}></Box>
          <Typography variant='h2' sx={{ fontWeight: "700" }}>Pricing</Typography>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap-reverse",
            alignItems: "center",
            gap: "0.5rem",
            maxWidth: "1289px",
            minHeight: "430px",
            background: "#fff",
            borderRadius: "30px",
            padding: "1rem",

          }}>
            {
              pricing.map((price, index) => {
                return (
                  <PriceCard data={price} key={index} />
                )
              })
            }
            {/* <PriceCard />
            <PriceCard />
            <PriceCard />
            <PriceCard bg="#FF7F68" /> */}
          </Box>
        </Grid>
        <Grid item sx={{
          display: "grid",
          placeContent: "center",
          height: "100vh",
          position: "relative"
        }}>
          <Box sx={{
            background: `url("/bg2.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "90%",
            backgroundPosition: "-150% 50%",
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            // opacity: "1"
          }}></Box>
          <Contact />
        </Grid>
      </Grid>
      <Hiddenwall/>
    </>
  )
}

