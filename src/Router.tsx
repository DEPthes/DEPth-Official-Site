import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Component/Page/About';
import Header from './Component/Common/Header';
import Member from './Component/Page/Member';
import Project from './Component/Page/Project';
import Contact from './Component/Page/Contact';
import StoryBlock from './Component/Common/StoryBlock';
import PartBox from './Component/Common/PartBox';

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

                    <Route
                        path="/StoryBlock"
                        element={
                            <StoryBlock
                                img={''}
                                header1={''}
                                content={''}
                                name={''}
                                department={''}
                                header2={''}
                                isLeft={false}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
