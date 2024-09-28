import React from 'react';
import {Box,Typography} from '@mui/material';
import {styled} from '@mui/system';
import CustomButton from '../CustomButton/CustomButton';
import logoImg from '../../../src/assets/logo1.png';
import MenuIcon from '@mui/icons-material/Menu';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import {Link} from 'react-router-dom';
import {Drawer,
        List,
        ListItem,
        ListItemButton,
        ListItemIcon,
        ListItemText,
} from '@mui/material';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
function Header(){


const [mobileMenu, setMobileMenu]= useState({left:false})

const toggleDrawer=(anchor,open)=>(event)=>{
    if (event.target ==="keydown" && (event.target === "Tab" || event.target==="Shift")){
        return;
}

setMobileMenu({...mobileMenu,[anchor]:open})
}

const navigate= useNavigate();

const list=(anchor)=>(
<Box sx={{
    width: anchor === "top" || anchor === "bottom" ?" auto ": 250
}}
role="presentation"
onClick={toggleDrawer(anchor, false)}
onKeyDown={toggleDrawer(anchor, false)}
>

<List>

{
    nav_title.map((item,index)=>( 
        <ListItem key={item.index} disablePadding onClick={()=>navigate(item.path)}>

    <ListItemButton>
        <ListItemIcon>
        {
            index === 0 && <HomeIcon/>
        }

        {
            index === 1 && <FeaturedPlayListIcon/>
        }

        {
            index === 2 && <MiscellaneousServicesIcon/>
        }

        {
            index === 3 && <ContactsIcon/>
        }
        </ListItemIcon>
        <ListItemText primary={item.display}/>
    </ListItemButton>
    </ListItem>
))
}
   
    </List>
</Box>
)

    const nav_title=[{
        path:'/', display:"Home"
    },
    {
        path:'/dishes', display:"Dishes",
    },

    {
        path:"/booking", display:"Services"
    },

    {
        path:'/about' , display:"About Us"
    }
]

const nav_login = [
    {
        path:"/login" , display:"Sign in"
    }
]

const nav_signup = [
    {
        path:"/signup" , display:"Register"
    }
]

const NavBarLinksBox= styled (Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]:{
        display:'none'
    },
}));

const NavBarLink= styled(Typography)(()=>({
    fontSize:"15px",
    color:"#4f5361",
    fontWeight:"bold",
    cursor:"pointer",
    '&:hover':{
        color:'#fff'
    },

}));

const NavBarLogo = styled("img")(({theme})=>({
    width:"100%",
    height:"24px",
    cursor:'pointer',
    [theme.breakpoints.down("md")]:{
        display:"none",
    },
}));

const CustomMenuIcon = styled(MenuIcon)(({theme})=>({
    cursor:"pointer",
    display:"none",
    marginRight:theme.spacing(2),
    [theme.breakpoints.down("md")]: {
        display:'block',
    },
}));

const SignupButton = styled(Button)(({theme})=>({
    backgroundColor:"#0F1B4C",
    color:"#fff",
    fontWeight:"700",
    margin:"0 auto",
    fontSize:'14px',
    borderRadius:"7px",
    cursor:"pointer",
    padding:'0.5rem 1.25rem',
    textTransform:"none",
    display:"block",
    border:'2px solid transparent',
    '&:hover':{
        backgroundColor: "#fff",
        color:"#0F1B4C",
        borderColor:"#0F1B4C",
    },
    [theme.breakpoints.down("md")]:{
        margin: theme.spacing(0, "auto"),
        width: theme.spacing(0, "auto"),
    },
}));
    return(
     
        <Box 
        sx={{
            display:"flex",
            alignItems:'center',
            justifyContent:'space-between',
            padding:'40px',
            maxWidth:'auto',
            marginLeft:'0px',
            marginBottom:'-24px',
            backgroundColor:'#FED801',
            
        }}
        >

            <Box 
            sx={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                gap:"2.5rem"

            }}
            >
             <Box
             sx={{
                display:"flex",
                alignItems:'center'
             }}>
        
              <CustomMenuIcon onClick={toggleDrawer("left",true)}/>
              <Drawer
              anchor="left"
              open={mobileMenu["left"]}
              onClose={toggleDrawer("left",false)}
              >
                {list("left")}
              </Drawer>
            <NavBarLogo src={logoImg} alt="logoimg"/>
            </Box>
            <NavBarLinksBox
            >
           
                 
            
            {
                nav_title.map((item,index)=>(
                    <NavBarLink variant="body2" onClick={()=>navigate(item.path)}>
                    {item.display}
                    </NavBarLink>
                ))
            }
               
            </NavBarLinksBox>
            </Box>
            <Box 
            sx={{
                display:'flex',
                alignItems:'center', 
                justifyContent:'center',
                gap:'1rem'
            }}
            >
            {
                nav_login.map((item)=>(
                    <NavBarLink  variant="body2" onClick={()=>navigate(item.path)}>  
           {item.display}
           </NavBarLink>
                ))
            }
          
         {
            nav_signup.map((item)=>(
     
                <SignupButton key={item.index}
                 
                onClick={()=>navigate(item.path)}
                 
        >{item.display}</SignupButton>
      
    ))
}
            </Box>
        </Box>

    )
}


export default Header;