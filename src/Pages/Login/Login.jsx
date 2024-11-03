import React from 'react';
import {Box} from '@mui/material';
import {styled} from '@mui/system';
import {Typography} from '@mui/material';
import CustomButton from '../../components/CustomButton/CustomButton';
const Login = ()=>{



const LoginForm = styled("input")(({theme})=>({
    fontSize:"15px",
    width:"100%",
    textAlign:"center",
    borderColor:"transparent",
    marginTop:theme.spacing(3),
    marginBottom:theme.spacing(1),
    padding: theme.spacing(2)
}))

    return(
        <Box sx={{display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                  padding:"40px"  }}>

        <Box >

        <Typography sx={{
            textAlign:"center",
            fontSize:"35px",
            fontWeight:"bold",
            color:"#000339",
            my:3
        }}>
            Login
        </Typography>
        
            <form>
            
            <LoginForm type="text" placeholder="Enter a Username"/> <br/>
            <LoginForm type="password" placeholder="Enter a Password"/>
            
            </form> 
  
            <CustomButton 
    
            color= "#fff"
            backgroundColor="#000339"
            buttonText="Login"  
            margin = "0 auto"

             />
             
        </Box>




        </Box>
    )
}



export default Login