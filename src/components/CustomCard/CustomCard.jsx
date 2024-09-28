import React from 'react';
import heartIcon from '../../assets/heart.png';
import likeIcon from '../../assets/like.png';
import shareIcon from '../../assets/share.png';
import {Box, Typography, Container} from '@mui/material';
import {styled} from '@mui/system';
const CustomCard =({img, price, item, likes, heart, share})=>{

const DishBox = styled(Box)(({theme})=>({
    borderTopLeftRadius:"10px",
    borderTopRightRadius:"10px",
    maxWidth:350,
    backgroundColor:"#fff",
    margin:theme.spacing(0,2,0,2),
    [theme.breakpoints.down("md")]:{
        margin:theme.spacing(2,0,2,0),
    },
    '&:hover':{
        backgroundColor:"#f5f5f5",
        boxShadow:"0 0 5px rgba(0,0,0,0.2)",
        transform:"scale(1.05)",
        transition:"all 0.3s ease-in-out",
    },

}));

    const ImgContainerBox = styled(Box)(({theme})=>({
        width:"100%",
    }));

    const InfoBox = styled(Box)(({theme})=>({
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }));

    return(
        <DishBox>
            <ImgContainerBox>
            <img src={img} alt="housephoto" style={{maxWidth:"100%"}}/>
            </ImgContainerBox>

            <Box sx={{padding:"1rem"}}>
        <Typography variant="body2"
        sx={{fontWeight:"700"}}>
        ${price}
        </Typography>
            <Typography variant="body2"
            sx={{my:"2"}}>
            {item}
            </Typography>

            <Box sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between"
            }}>

            <InfoBox>
            <img src={likeIcon} alt="likeicon"/>
            <Typography variant="body2" sx={{mt:1}}>
                {likes}
            </Typography>
            </InfoBox>
            <InfoBox>
            <img src={heartIcon} alt="hearticon"/>
            <Typography variant="body2" sx={{mt:1}}>
                {heart}
            </Typography>
            </InfoBox>
            <InfoBox>
                <img src={shareIcon} alt="shareicon"/>
                <Typography variant="body2" sx={{mt:1}}>
                    {share}
                </Typography>
            </InfoBox>
            </Box>
            </Box>
           
        </DishBox>
    )
}


export default CustomCard;