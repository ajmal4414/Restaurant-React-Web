import React from 'react';
import {styled} from '@mui/system';
import {Box, Typography} from '@mui/material';
import BuyIcon from '../../assets/buy_icon.png';
import sellIcon from '../../assets/sell_icon.png';
import rentIcon from '../../assets/sell_icon.png';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CustomButton from '../../components/CustomButton/CustomButton';

const Booking = ()=>{

    const guide_content=[{
        id:1,
        title:"Order Guides",
        text:"How to order",
        img:BuyIcon
        
    },
    {
        id:2,
        title:"Booking Guides",
        text:"How to Book",
        img:sellIcon
    },
    {
        id:3,
        title:"Payment Guides",
        text:"Payment Methods",
        img:rentIcon
    }
]

    const CustomBox = styled(Box)(({theme})=>({
        width:"30%",
        [theme.breakpoints.down("md")]:{
            width:"85%",
        },
    }));

    const GuidesBox= styled(Box)(({theme})=>({
        display:"flex",
        justifyContent:"space-around",
        width:"70%",
        marginTop:theme.spacing(5),
        marginBottom:theme.spacing(5),

        [theme.breakpoints.down("md")]:{
            width:"100%",
        },
        [theme.breakpoints.down("sm")]:{
            marginBottom:"0",
            flexDirection:"column",
        },
    }));

    const GuideBox= styled(Box)(({theme})=>({
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginTop:theme.spacing(5),
        [theme.breakpoints.down("sm")]:{
            margin:theme.spacing(2,0,2,0),
        },
    }));
    
    return(
       <Box sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        padding:"40px"
       }}>

        <div style={{
            width:"5%",
            height:"5px",
            backgroundColor:"#000339",
            margin:"0 auto"         }}>

        </div>

        <Typography variant="h3" sx={{
            fontSize:"35px",
            fontWeight:"bold",
            color:"#000339",
            my:3
        }}>
            How to Book?
        </Typography>

        <CustomBox>
            <Typography variant="body2"
            sx={{
                fontSize:"16px",
                fontWeight:"500",
                color:"#5A6473",
                textAlign:"center"
            }}
            >
                Everything you need to know when you book for advance slot
            </Typography>
        </CustomBox>

        <GuidesBox>
        {
            guide_content.map((item,id)=>(
                <GuideBox key={id}>
                <img src={item.img} alt="guideimg"/>
        

                <Typography variant="body2"
                sx={{
                    fontWeight:"500",
                    fontSize:"20px",
                    color:"#383C45",
                    my:1,
                }}>
                    {item.title}
                </Typography>
                <Box sx={{
                    cursor:"pointer",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                }}>
                <Typography variant="body2"
                sx={{
                    fontWeight:"bold",
                    fontSize:"14px",
                    color:"#0689FF"
                }}>
                    {item.text}
                </Typography>
                <ArrowRightAltIcon style={{color:"#0689FF"}}/>
                </Box>
                </GuideBox>
            ))
        }
        </GuidesBox>
       <CustomButton
            backgroundColor="#0F1B4C"
            color="#fff"
            buttonText="See Full Guides"
            guideBtn={true}
       />
           
       </Box>
       
    )
}



export default Booking