import React from 'react';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../../src/Pages/Home/Home';
import Dishes from '../../src/Pages/Dishes/Dishes';
import Booking from '../../src/Pages/Booking/Booking';
import About from '../Pages/About/About';
import NotFound from '../Pages/NotFound/NotFound';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
function LayoutRoutes(){
    return(
        <Router>
        <Header/>

            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/dishes" element={<Dishes/>}/>
                <Route path="/booking" element={<Booking/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}




export default LayoutRoutes;