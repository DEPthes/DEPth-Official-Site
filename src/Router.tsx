import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Component/Page/About';
import Header from './Component/Common/Header';
import Member from './Component/Page/Member';
import Project from './Component/Page/Project';
import Contact from './Component/Page/Contact';
import Footer from './Component/Common/Footer';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/Project" element={<Project />} />
                    <Route path="/Member" element={<Member />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default Router;
