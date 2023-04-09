import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import styled from 'styled-components';

const Contact = () => {
    return (
        <Inner>
            <IntroWrapper>
                <IntroImg>
                    <Ment>
                        <h1>궁금한 것이 있거나</h1>
                        <h1>문의사항이 있으신가요?</h1>
                        <h2>DEPth 및 프로젝트 관련</h2>
                        <h2>문의 모두 언제든지 환영합니다.</h2>
                    </Ment>

                    <ButtonGroup>
                        <CopyToClipboard
                            className="Toradm"
                            text="2022depth@gmail.com"
                            onCopy={() => alert('메일 주소가 복사되었습니다.')}
                        >
                            <img src="./image/CMail.png" alt="CMail" />
                        </CopyToClipboard>

                        <a
                            href="https://instagram.com/depth_mju.co.kr?igshid=YmMyMTA2M2Y="
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="./image/CInsta.png" alt="CInsta" />
                        </a>
                        <a
                            href="https://open.kakao.com/o/sqq6Cddf "
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="./image/CKakao.png" alt="CKakao" />
                        </a>
                    </ButtonGroup>
                </IntroImg>
            </IntroWrapper>
        </Inner>
    );
};

export default Contact;

const ButtonGroup = styled.div`
    z-index: 99;
    display: flex;
    justify-content: center;
    margin-top: 3.4rem;

    img {
        width: 8.273rem;
        height: 8.273rem;
        margin-left: 3.6rem;
    }
    @media (max-width: 700px) {
        margin-bottom: 100px;
    }
`;

const Ment = styled.div`
    h1 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 700;
        font-size: 4rem;
        line-height: 5.8rem;
        text-align: center;

        color: #ffffff;
    }

    h1:nth-child(2) {
        margin-bottom: 2rem;
    }

    h2 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 350;
        font-size: 2rem;
        line-height: 2.9rem;
        text-align: center;
        color: #ffffff;
    }
    @media (max-width: 700px) {
        margin-bottom: 30px;
        margin-top: 20rem;
    }
`;

const Inner = styled.div`
    background: #000000;
    backdrop-filter: blur(4.2rem);
`;
const IntroWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const IntroImg = styled.div`
    z-index: 99999;
    width: 93.5rem;
    min-height: 100vh;
    height: 77.5rem;
    @media (max-width: 700px) {
        width: 83.5rem;

        margin-top: 2rem;
    }
    background-image: url(./image/ContactImg.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
