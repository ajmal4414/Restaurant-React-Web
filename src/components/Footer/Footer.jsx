import React from 'react';
import {styled} from '@mui/system';
import {Box, Container} from '@mui/material';
import {Typography} from '@mui/material';


import fbIcon from '../../assets/facebook.png';
import twitterIcon from '../../assets/twitter.png';
import instagramIcon from '../../assets/instagram.png';


const CustomContainer= styled(Container)(({theme})=>({
    display:'flex',
    justifyContent:"space-around",
    gap:theme.spacing(5),
    [theme.breakpoints.down("sm")]:{
        flexDirection:"column",
        textAlign:"center",
    },
}));

const FooterLink = styled("span")(({theme})=>({
    fontSize:"16px",
    color:"#000066",
    fontWeight:"300",
    cursor:"pointer",
    '&:hover':{
        color:"#66B2FF",
    },
}));

const IconBox=styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"1rem",
    [theme.breakpoints.down("sm")]:{
        justifyContent:"center",
    },
}));

const Footer =()=>{
 
const footer_featured_link = [
    {
        path:'/', display:"Guides"
    },

    {
        path:'/', display:"Services"
    },

    {
        path:'/', display:"Contact Us"
    }
    
]

const footer_overview_link=[{
    path:'/', display:"Location"
},
{
    path:'/', display:"patnerships"
},
{
    path:'/' , display:"Terms of use & Privacy Policies"
}

]
    return(
        <Box sx={{py: 10, backgroundColor:"#FFF682"}}>

        <CustomContainer>
            <Box>
            <Typography
            sx={{fontSize:"20px",
                color:"#1C1C1D",
                fontWeight:"700",
                mb:2,
            }}
            >
                Featured
             
            </Typography>
            
            {

                    footer_featured_link.map((item, index)=>(
                        <FooterLink key={index}>
                            {item.display} <br/>
                        </FooterLink>
                    ))
                }
                
            </Box>
            <Box>
                <Typography
                sx={{
                    fontSize:"20px",
                    color:"#1C1C1D",
                    fontWeight:"700",
                    mb:2,
                }}>
                    Overview
                </Typography>
                {
                    footer_overview_link.map((item,index)=>(
                      
                <FooterLink key={index}>
                        {item.display}<br/>
                </FooterLink>
                    ))
                }

            </Box>
            <Box>
                <Typography sx={{
                    fontSize:"20px",
                    color:"#1C1C1D",
                    fontWeight:"700",
                    mb:2
                }}>
                    Get in touch
                </Typography>

                <Typography sx={{
                    fontSize:"16px",
                    color:"#7A7A7E",
                    fontWeight:"500",
                    mb: 2
                }}>
                    Keep in touch with our social media pages.
                </Typography>

                <IconBox>
                    <img src={fbIcon} alt="fbImg" style={{cursor:"pointer"}}/>
                    <img src={twitterIcon} alt="twitterImg" style={{cursor:"pointer"}}/>
                    <img src={instagramIcon} alt="instagramImg" style={{cursor:"pointer"}}/>
                </IconBox>

            </Box>
        </CustomContainer>

        </Box>
    )

}


export default Footer