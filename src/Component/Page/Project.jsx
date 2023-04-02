/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

const Project = () => {
    return (
        <Inner>
            <IntroWrapper>
                <IntroWriting>
                    <h1>DEPth Project</h1>
                    <h2>뎁스의 첫</h2>
                    <h3>프로젝트 </h3>
                    <h4>
                        뎁스가 시작한 첫 프로젝트 ‘옛술의 전당' <br />
                        프로젝트의 첫 시작부터 마무리까지 쉽지는 않았지만,{' '}
                        <br />
                        적극적인 소통과 노력으로 만들어낼 수 있었습니다.
                    </h4>
                </IntroWriting>
                <IntroImg src="./image/ProjectImg.png" alt="MemberImg" />
            </IntroWrapper>
            <ScrollWrapper>
                <ScrollIcon src="./image/scrollIcon.png" alt="ScrollIcon" />
            </ScrollWrapper>

            <SecondWrapper>
                <Header>
                    <div>
                        <img src="./image/yetsulLogo.png" alt="yetsulLogo" />
                    </div>
                    <div>
                        <h1>옛술의 전당</h1>
                        <h2>“청춘을 위한 한 잔, 옛술의 전당에서 건배!”</h2>
                    </div>
                </Header>
                <Content>
                    <ImgWrapper>
                        <img src="./image/yetsul.png" alt="yetsul" />
                        <ButtonWrapper>
                            <a
                                href="https://www.yetsul.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src="./image/link.png" alt="link" />
                            </a>
                            <a
                                href="https://github.com/DEPthes"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src="./image/github.png" alt="github" />
                            </a>
                            <a
                                href="https://instagram.com/yetsool_hall?igshid=YmMyMTA2M2Y="
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src="./image/insta.png" alt="insta" />
                            </a>
                        </ButtonWrapper>
                    </ImgWrapper>
                </Content>
            </SecondWrapper>
        </Inner>
    );
};

export default Project;

const Inner = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 143px;
`;
const IntroWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const IntroWriting = styled.div`
    width: 474px;
    height: 305px;
    font-family: 'Noto Sans KR';
    h1 {
        font-size: 20px;
        font-weight: 500;
    }

    h2 {
        font-weight: 900;
        font-size: 60px;
        display: flex;
    }

    h3 {
        font-weight: 350;
        font-size: 60px;
        margin-right: 18px;
    }

    h4 {
        margin-top: 50px;
        font-weight: 350;
        font-size: 20px;
    }
`;
const IntroImg = styled.img`
    width: 842px;
    height: 726px;
    object-fit: cover;
`;

const ScrollIcon = styled.img`
    width: 44px;
    height: 22px;
    margin: 0 auto;
`;

const ScrollWrapper = styled.div`
    margin-top: 163px;
    display: flex;
    justify-content: center;
`;

const SecondWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 280px;
`;
const Header = styled.div`
    display: flex;
    width: 1200px;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 54px;

    img {
        margin-right: 32px;
    }

    h1 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 900;
        font-size: 44px;
        line-height: 64px;
        margin-bottom: 8px;
    }

    h2 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 35px;
        /* identical to box height */

        color: #ffffff;
    }
`;
const Content = styled.div``;
const ImgWrapper = styled.div`
    position: relative;
`;
const ButtonWrapper = styled.div`
    img {
        width: 59.3px;
        height: 58.72px;
    }
    a:first-child {
        img {
            position: absolute;
            bottom: 52px;
            right: 204px;
        }
    }

    a:nth-child(2) {
        img {
            position: absolute;
            bottom: 52px;
            right: 124px;
        }
    }

    a:nth-child(3) {
    }
    img {
        position: absolute;
        bottom: 52px;
        right: 44px;
    }
`;
