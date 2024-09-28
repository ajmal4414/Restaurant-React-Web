import React from 'react';
import {styled} from '@mui/system';
import {Box, Typography, Container} from '@mui/material';
import {Data} from '../../StaticData/Data';
import CustomCard from '../../components/CustomCard/CustomCard';
const Dishes= ()=>{

    const PropertyTextBox = styled(Box)(({theme})=>({
        [theme.breakpoints.down("md")]:{
            textAlign:"center",
        },
    }));

    const DishesBox= styled(Box)(({theme})=>({
        display:"flex",
        justifyContent:"space-between",
        marginTop:theme.spacing(5),
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            alignItems:"center",
        },

    }));
    
    return(
        <Box sx={{
            mt:5,
            backgroundColor:"#F5FAFE",
            py:10
        }}>

        <Container>
            <PropertyTextBox>
        <Typography sx={{
            color:"#000339",
            fontSize:"35px",
            fontWeight:"bold",
            ml:"13px"
        }}>
            Featured Dishes
        </Typography>
        <Typography sx={{
            color:"#5a6473",
            fontSize:"16px",
            mt:1,
            ml:"13px"
        }}>
            Explore Variety of South Indian Dishes!!
        </Typography>
            </PropertyTextBox>
            
               

                    <DishesBox>

                    {
                        Data.map((foodItem)=>(
                            <CustomCard
                            key={foodItem.id}
                            img={foodItem.img}
                            price={foodItem.price}
                            item={foodItem.item}
                            likes={foodItem.likes}
                            heart={foodItem.heart}
                            share={foodItem.share}
                             />
                        ))
                    }
                  
        
            </DishesBox>
            
            
         
        </Container>
        </Box>
    )
}



export default Dishes;