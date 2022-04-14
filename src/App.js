import React from 'react';
import './App.css';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Navbar } from 'react-bootstrap'


import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Signup from './components/signup';
import ForgetPassword from './components/forget_password';
import ResetPassword from './components/reset_password'

function App() {

    return (

        <BrowserRouter >
        <Routes >
        <Route path = "/" element = {
            <Login />
        }/>

        <Route path = "/sign-up" element = {
            <Signup />
        } />

        <Route path = "/forget-password/" element = {
            <ForgetPassword />
        } />
        
        <Route path = "/reset-password/:id" element = {
            <ResetPassword />
        } />

        </Routes>
        </BrowserRouter>

    )
};

export default App;