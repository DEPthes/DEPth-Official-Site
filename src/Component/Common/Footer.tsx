import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Wrapper>
            <h1>DEPth 명지대학교 프로젝트형 IT 동아리</h1>
            <h2>COPYRIGHT©2023. All rights reserved</h2>
            <a
                href="COPYRIGHT©2023. All rights reserved"
                target="_blank"
                rel="noreferrer"
            >
                <img src="./image/insta.png" alt="Finsta" />
            </a>
            <a
                href="COPYRIGHT©2023. All rights reserved"
                target="_blank"
                rel="noreferrer"
            >
                <img src="./image/CKakao.png" alt="Finsta" />
            </a>
        </Wrapper>
    );
};

export default Footer;

const Wrapper = styled.div`
    bottom: 0;
    margin-left: 100px;
    height: 150px;
    width: 1200px;
    border-top: 0.1px solid #979da696;
    padding-top: 20px;
    margin: 0 auto;

    h1,
    h2 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 350;
        font-size: 14.5px;

        display: flex;
        align-items: center;
        text-align: center;

        color: #f4f8ff95;

        margin-bottom: 10px;
    }
`;
