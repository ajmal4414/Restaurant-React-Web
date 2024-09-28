import React from 'react';
import {Box, Typography} from '@mui/material';
import {styled} from '@mui/system';
import CustomButton from '../../components/CustomButton/CustomButton';
const Signup = () =>{

const SignupForm = styled("input")(({theme})=>({
    padding:"15px",
    width:"100%",
    margin:"0 auto",
    mt:3,
    borderColor:"transparent"
}))


    return(
        <Box
        sx={{
            display:"flex",
            alignItems:"center",
            backgroundColor:"#fff",
            justifyContent:"center",
            my:1,
            py:6,
           
        }}>
    <Box>
        <Typography sx={{fontSize:"34px",
                          alignItems:"center",
                          justifyContent:"center",
                          textTransform:"capitalize",
                          textAlign:"center",
                          fontWeight:"bold",
                          color:"#000339",
                          mb:2  }}>
            signup
        </Typography>

        <form>
            <SignupForm type="text" placeholder="Enter a Username"/><br/>
            <SignupForm type="email" placeholder="Enter a email"/><br/>
            <SignupForm type="password" placeholder="Enter a password"/><br/>
            <SignupForm type="password" placeholder="confirm password"/><br/>
                
                <br/>
            <CustomButton
                backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="Sign Up"
              margin = "0 auto"

              
            />
            
        </form>
    </Box>
        </Box>
    )
    
}


export default Signup