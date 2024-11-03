import React from 'react';
import {Box, Typography, Container} from '@mui/material';
import {styled} from '@mui/system';
import houseCard from '../../assets/ambience.jpg';

const Ambience=()=>{

const CustomBox= styled(Box)(({theme})=>({
    display:"flex",
    gap: theme.spacing(10),
    alignItems:"center",
    [theme.breakpoints.down("md")]:{
        flexDirection:"column",
        textAlign:"center",
    },
}));

const ImgContainerBox = styled(Box)(({theme})=>({
    width:"100%",
    [theme.breakpoints.down("md")]:{
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        
    },    
}));

const Divider= styled("div")(({theme})=>({
    width:"13%",
    height:"5px",
    backgroundColor:"#000339",
    [theme.breakpoints.down("md")]:{
        marginLeft:"auto",
        marginRight:"auto",
    },
}));

const TextFlexBox = styled(Box)(({theme})=>({
    marginTop: theme.spacing(7),
    display:"flex",
    justifyContent:"space-between",
    padding:(0,5,0,5),
    [theme.breakpoints.down("sm")]:{
        flexDirection:"column",
        gap:theme.spacing(5),
    },
}));

const LargeTextTypography= styled(Typography)(({theme})=>({
    fontSize:"64px",
    color:"#000",
    fontWeight:"700",
    [theme.breakpoints.down("md")]:{
        fontSize:"32px",
    },
}));

const SmallTextTypography = styled(Typography)(({theme})=>({
    fontSize:"18px",
    color:"#7B8087",
    fontWeight:"500",
    [theme.breakpoints.down("md")]:{
        fontSize:"14px",
    },
}));



    return(
        <Box sx={{py:10}}>
        <Container>
            <CustomBox>
        <ImgContainerBox>
            <img src={houseCard} alt="ambienceImg" style={{maxWidth:"100%"}}/>
        </ImgContainerBox>

        <Box>
           <Divider/>
           <Typography
           sx={{fontSize:"35px",
                color:"#000339",
                fontWeight:"700",
                my:3
                }}>
            You,ve found a ambience you love.
           </Typography>

           <Typography sx={{
            fontSize:"16px",
            color:"#5A6473",
            lineHeight:"27px"
           }}>
            Discover the epitome of culinary excellence at Savoria, where every visit is an enchanting rendezvous
            with the art of dining.
           </Typography>
        </Box>

            </CustomBox>

            <TextFlexBox>
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center"
                }}>
                <LargeTextTypography>
                    250+
                </LargeTextTypography>
                <SmallTextTypography>
                    Dishes
                </SmallTextTypography>
                </Box>

                <Box sx={{display:"flex",
                        flexDirection:"column",
                        alignItems:"center"}}>

                    <LargeTextTypography>300+</LargeTextTypography>
                    <SmallTextTypography>Trusted Clients</SmallTextTypography>
                        </Box>
                  <Box sx={{display:"flex",
                            flexDirection:"column",
                            alignItems:"center"}}>
                    <LargeTextTypography>350+</LargeTextTypography>
                    <SmallTextTypography>Delivery Per Day</SmallTextTypography>
                  </Box>      
            </TextFlexBox>
        </Container>
        </Box>
    )

}


export default Ambience


