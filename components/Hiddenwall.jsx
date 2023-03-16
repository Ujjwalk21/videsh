import { useState} from 'react';
import { AppBar,Box, IconButton, Drawer, Button,Rating,Typography, useTheme, useMediaQuery  } from '@mui/material'
import { Close} from "@mui/icons-material"
import Feedback from './Feedback';
import { SliderButton } from '@typeform/embed-react'
import ratings from './ratings.json'
import AddCommentIcon from '@mui/icons-material/AddComment';
import {styled} from '@mui/system';



const Hiddenwall = () => {
    const theme = useTheme()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const comment = useMediaQuery(theme.breakpoints.up('md'));
    
    const count = ratings.length;
    const scores = ratings.map(item => item.score);
    const average = scores.reduce((acc, curr) => acc + curr, 0) / scores.length;
      
    

    
    const MyComponent = styled('Box')({ 
        width: '480px',
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',  
        [theme.breakpoints.down('sm')]: 
          {
            width: '100vw',
          }, 
      });


    return(
        <>
        <Box
        sx={{
            background: 'transparent',
            position: 'fixed',
            left: '20px',
            bottom: '30px', 
            display: comment && 'none',      
       }}
       onClick= {() => setIsDrawerOpen(true)}
       >
            <AddCommentIcon color="secondary" fontSize='large'/>
        </Box>


        <AppBar component="hiddenwall" 
        sx={{
             background: "#F9F7F7", 
             position: 'fixed',
             left: '1%',
             top: '85%',
             alignItems: 'center',
             height: '90px', 
             width: '200px', 
             boxShadow: '0 2 12 0', 
             borderRadius: '10px',
             display: matches && 'none',
        }}>
          <Box
          sx={{height:'100vh', width:'100vw'}}
          onClick= {() => setIsDrawerOpen(true)}
          >
                <Box
                    sx={{
                        textAlign: 'center',
                        alignContent: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '20px',
                    }}>
                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}>
                    <Typography variant='h4' sx={{color: 'black',}}>
                        <strong>
                        {average.toFixed(1)}
                        </strong>
                    </Typography>
                    <Rating name="read-only" value= {average.toFixed(1)} readOnly precision={.1}/> 
                    </Box>
                    <Typography variant='h10' sx={{color: 'grey',}}>
                        <u>
                            Read out {count} reviews
                        </u>
                    </Typography>
                </Box>
          </Box>
          </AppBar>


          <Drawer 
             anchor='left'
             open ={isDrawerOpen}
             onClose={() => setIsDrawerOpen(false)}
            >
                <Box 
                sx={{
                    textAlign: 'right',
                }}>
                <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setIsDrawerOpen(false)}
                    >
                        <Close />
                </IconButton>
                </Box>

                <MyComponent>
                    <Typography variant='h5' component='div' fontWeight="700" width="100%">
                        <strong>
                        What our customers say?
                        </strong>
                    </Typography>


                    <Box
                    sx={{
                        
                        textAlign: 'left',
                        alignContent: 'left',
                        width: '92%',
                        display: 'flex',
                        flexDirection: 'column',
                        outline:'1px solid red',
                        borderRadius: '10px',
                        padding: '10px',
                        marginX: 'auto',
                        marginY: '10px',
                    }}>
                    <Typography component="legend" variant="h5" sx={{color:'black', }}>Rating</Typography>
                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'left',
                        marginX: '0px',
                        textAlign: 'left',
                    }}>
                    <Typography variant='h4' sx={{color: 'black',}}>
                        <strong>
                        {average.toFixed(1)}
                        </strong>
                    </Typography>
                    <Rating name="read-only" value={average.toFixed(1)} readOnly precision={.1}/> 
                    <Typography variant='h10' sx={{color: 'grey', paddingX: '10px',}}>
                        
                            {count} reviews
                        
                    </Typography>
                    </Box>

                    <Box sx={{width: '50px'}}>
                    <SliderButton id="https://iv0waaxwhqb.typeform.com/to/DJBG5w5n">
                    <Button 
                    sx={{
                        marginY: '0px',
                        height: "33px",
                        width: "180px",
                        background: "#7254F2",
                        border: "1px solid #7254F2",
                        borderRadius: "5px",
                        color: "#F9F7F7",
                        fontWeight: "800",
                        fontSize: "14px",
                        marginRight: "0px",
                        "&:hover": {
                            background: "#7254F2",
                            transition: "all .1s ease-in",
                        }
                      }}>Write a Review
                      </Button>
                    </SliderButton>
                    </Box>
                    </Box>

                    {
                        ratings && ratings.map(ratings => {
                            return(
                                <div key={ratings.id}>
                                    <Feedback data={ratings}/>
                                </div>
                            )
                        })
                    }
                </MyComponent>
            </Drawer>
        </>
    )
}
export default Hiddenwall
