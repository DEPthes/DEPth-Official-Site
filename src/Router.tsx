import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Component/Page/About';
import Header from './Component/Common/Header';
import Member from './Component/Page/Member';
import Project from './Component/Page/Project';
import Contact from './Component/Page/Contact';
import Footer from './Component/Common/Footer';
import ScrollToTop from './Component/Common/ScrolltoTop';
import SEOMetaTag from './SEOMetaTag';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <ScrollToTop />
                <SEOMetaTag
                    title={'DEPth'}
                    description={
                        'Do Evlove Potential in-DEPth, DEPth는 명지대학교 IT 연합 프로젝트형 동아리입니다. 관심 분야에 대한 공부부터 기획, 개발, 디자인 분야의 다양한 사람들과 프로젝트 및 네트워킹 경험을 쌓을 수 있습니다. '
                    }
                    keywords={
                        'DEPth, 명지대학교 IT 동아리, 명지대학교 프로젝트 동아리, 뎁스, 명지, 명지대, 명지대 뎁스'
                    }
                    imgsrc={'../../../public/DEPthLogo.png'}
                    url={'https://depth-mju.co.kr/'}
                />
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
