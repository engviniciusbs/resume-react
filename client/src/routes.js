import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactScreen from './screens/contact';
import HomeScreen from './screens/home';
import 'rbx/index.css';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='/contact' element={<ContactScreen/>}/>
            {/* <Route path="*" element={<NotFoundScreen/>}/> */}
        </Routes>
    </BrowserRouter>
);

export default Rotas;