import React from 'react';
import {styled} from '@mui/system';
import {Box, Container, Typography} from '@mui/material';
import logoImg from '../../assets/logo1.png';
import logosImg from '../../assets/logos.png';
import starImg from '../../assets/Star.png';

const Partner= ()=>{

const CustomContainer = styled(Container)(({theme})=>({
    display:"flex",
    justifyContent:"space-between",
    [theme.breakpoints.down("md")]:{
        flexDirection:"column",
        alignItems:"center",
        textAlign:"center",
        marginBottom: theme.spacing(4),
    },
}));

const CustomBox = styled(Box)(({theme})=>({
    [theme.breakpoints.down("md")]:{
        marginBottom: theme.spacing(4),
    },
}));
    return(
        <Box sx={{mt:10}}>
            <CustomContainer>
            <CustomBox>
                <img src={logoImg} alt="logoImg" style={{maxWidth:"100%", height:"21px"}}/>

                <Typography variant="body2" sx={{
                    color:"#7D8589",
                    fontSize:"16px",
                    fontWeight:"bold",
                    mt:2
                }}>
                    More than 45,000 trust Techflix
                </Typography>
            </CustomBox>

            <Box>
                <img src={starImg} alt="starImg" style={{maxWidth:"100%"}}/>
                <Typography variant="body2"
                sx={{
                    color:"#7D8589",
                    fontSize:"16px",
                    fontWeight:"bold",
                    mt:2
                    
                }}>
                5-star Rating (2k+ Reviews)
                </Typography>
            </Box>
                
            </CustomContainer>

            <Container 
            sx={{display:"flex",flexDirection:"column"}}
            >
                <img src={logosImg} alt="logos"/>

            </Container>
        </Box>
    )
}


export default Partner