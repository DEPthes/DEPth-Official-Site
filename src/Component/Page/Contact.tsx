import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
        <Inner>
            <IntroWrapper>
                <IntroImgWrapper>
                    <IntroImg src="./image/ContactImg.png" alt="mainImg" />

                    <Ment>
                        <h1>궁금한 것이 있거나</h1>
                        <h1>문의사항이 있으신가요?</h1>
                        <h2>DEPth 및 프로젝트 관련</h2>
                        <h2>문의 모두 언제든지 환영합니다.</h2>
                    </Ment>

                    <ButtonGroup>
                        <button>
                            <img src="./image/CMail.png" alt="CMail" />
                        </button>
                        <a
                            href="https://www.instagram.com/yetsool_hall/ "
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="./image/CInsta.png" alt="CInsta" />
                        </a>
                        <button>
                            <img src="./image/CKakao.png" alt="CKakao" />
                        </button>
                    </ButtonGroup>
                </IntroImgWrapper>
            </IntroWrapper>
        </Inner>
    );
};

export default Contact;

const ButtonGroup = styled.div`
    position: absolute;
    top: 590px;
    left: 320px;

    a {
        margin-left: 60px;
        margin-right: 60px;
    }
`;

const IntroImgWrapper = styled.div`
    position: relative;
`;

const Ment = styled.div`
    position: absolute;
    left: 280px;
    top: 330px;

    h1 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 58px;
        text-align: center;

        color: #ffffff;
    }

    h1:nth-child(2) {
        margin-bottom: 20px;
    }

    h2 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 350;
        font-size: 20px;
        line-height: 29px;
        text-align: center;

        color: #ffffff;
    }
`;

const Inner = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 200px;
    background: #000000;
    backdrop-filter: blur(42px);
`;
const IntroWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const IntroImg = styled.img`
    z-index: -99;
    width: 935px;
    height: 875px;
`;
