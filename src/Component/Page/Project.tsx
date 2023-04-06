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
                <Desc>
                    <DescHeader>
                        <h1>프로젝트 설명</h1>
                    </DescHeader>
                    <DescContent>
                        <h2>
                            옛술의 전당은 ‘우리의 자랑스러운 전통주를 알리기
                            위해’ 시작되었습니다. 자신에게 어울리는 전통주를
                            찾고 전통주의 매력을 한층 더 느끼며, 전통주를 즐길
                            수 있게 하는 것을 목표로 제작하였고, 우리의 옛술이
                            더 이상 ‘전통주’ 자체가 아닌 모두가 함께 즐길 수
                            있는 술로 거듭나도록 다양한 서비스를 제공하고
                            있습니다.
                        </h2>
                    </DescContent>
                </Desc>
                <TeamMember>
                    <div>
                        <h1>프로젝트 팀원</h1>
                    </div>
                    <TeamMemberWrapper>
                        <div>
                            <h2>TEAM LEADER</h2>
                            <h3>이보현</h3>
                        </div>
                        <div>
                            <h2>PM LEADER</h2>
                            <h3>이여원</h3>
                        </div>
                        <div>
                            <h2>WEB LEADER</h2>
                            <h3>강상원</h3>
                        </div>
                        <div>
                            <h2>SERVER LEADER</h2>
                            <h3>김해찬</h3>
                        </div>
                        <div>
                            <h2>DESIGN</h2>
                            <h3>최성경</h3>
                        </div>
                        <div>
                            <h2>PM</h2>
                            <h3>문규원</h3>
                        </div>
                        <div>
                            <h2>PM</h2>
                            <h3>박상민</h3>
                        </div>
                        <div>
                            <h2>PM</h2>
                            <h3>김보은</h3>
                        </div>
                        <div>
                            <h2>WEB</h2>
                            <h3>김희윤</h3>
                        </div>
                        <div>
                            <h2>WEB</h2>
                            <h3>이가은</h3>
                        </div>
                        <div>
                            <h2>WEB</h2>
                            <h3>이보현</h3>
                        </div>
                        <div>
                            <h2>SERVER</h2>
                            <h3>김현빈</h3>
                        </div>
                    </TeamMemberWrapper>
                </TeamMember>
            </SecondWrapper>
        </Inner>
    );
};

export default Project;

const Inner = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 23.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const IntroWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 700px) {
        width: 80%;
        flex-direction: column;
        align-items: center;
    }
`;
const IntroWriting = styled.div`
    width: 100%;
    height: 30.5rem;
    font-family: 'Noto Sans KR';
    h1 {
        font-size: 2rem;
        font-weight: 50rem;
    }

    h2 {
        font-weight: 700;
        font-size: 6rem;
        display: flex;
    }

    h3 {
        font-weight: 250;
        font-size: 6rem;
        margin-right: 1.8rem;
    }

    h4 {
        margin-top: 5rem;
        font-weight: 200;
        font-size: 2rem;
    }
`;
const IntroImg = styled.img`
    width: 57.2rem;
    height: 54.4rem;
    object-fit: cover;
    margin-left: 22.3rem;
    @media (max-width: 700px) {
        margin-left: 0;
        margin-top: 10rem;
    }
`;

const ScrollIcon = styled.img`
    width: 4.4rem;
    height: 2.2rem;
    margin: 0 auto;
`;

const ScrollWrapper = styled.div`
    margin-top: 16.3rem;
    display: flex;
    justify-content: center;
`;

const SecondWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 28rem;
    width: 120rem;
    @media (max-width: 700px) {
        width: 70rem;
    }
`;
const Header = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 5.4rem;

    img {
        margin-right: 3.2rem;
        @media (max-width: 700px) {
            display: none;
        }
    }

    h1 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 700;
        font-size: 4.4rem;
        line-height: 6.4rem;
        margin-bottom: 0.8rem;
    }

    h2 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 250;
        font-size: 2.4rem;
        line-height: 3.5rem;
        /* identical to box height */

        color: #ffffff;
    }
`;
const Content = styled.div``;
const ImgWrapper = styled.div`
    position: relative;
    > img {
        width: 100%;
    }
`;
const ButtonWrapper = styled.div`
    img {
        width: 5.93rem;
        height: 5.872rem;
    }
    a:first-child {
        img {
            position: absolute;
            bottom: 5.2rem;
            right: 20.4rem;
        }
    }

    a:nth-child(2) {
        img {
            position: absolute;
            bottom: 5.2rem;
            right: 12.4rem;
        }
    }

    a:nth-child(3) {
    }
    img {
        position: absolute;
        bottom: 5.2rem;
        right: 4.4rem;
    }
`;

const Desc = styled.div`
    margin-top: 10rem;
    width: 100%;
    height: 19rem;
    background: rgba(44, 48, 54, 0.5);
    box-shadow: 0rem 0rem 2.3rem rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(0.85rem);
    border-radius: 2.4rem;
    display: flex;
    align-items: flex-start;
    @media (max-width: 700px) {
        flex-direction: column;
        height: 28.752rem;
        padding: 0 2.667rem;
    }
`;
const DescHeader = styled.div`
    width: 17rem;
    height: 3.716rem;
    margin-top: 4.1rem;
    margin-left: 4.4rem;
    margin-right: 10.3rem;
    h1 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 500;
        font-size: 2.6rem;
        line-height: 3.8rem;
        /* identical to box height */

        color: #f3f3f3;
    }
    @media (max-width: 700px) {
        margin-left: 0;
    }
`;
const DescContent = styled.div`
    width: 83rem;
    height: 10.978rem;
    margin-top: 4.1rem;
    h2 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 300;
        font-size: 2rem;
        line-height: 3rem;

        color: #cfcfd0;
    }
    @media (max-width: 700px) {
        width: auto;
        height: auto;
        font-size: 2rem;
    }
`;

const TeamMember = styled.div`
    box-sizing: border-box;
    width: 100%;
    @media (max-width: 700px) {
        height: auto;
        padding-right: 4.4rem;
    }
    height: 55.2rem;
    margin-top: 5.6rem;
    border: 1px solid #2c3036;
    filter: drop-shadow(0rem 0rem 2.3rem rgba(0, 0, 0, 0.25));
    backdrop-filter: blur(0.85rem);
    margin-bottom: 60rem;
    border-radius: 2.4rem;
    padding-left: 4.4rem;
    padding-top: 4.2rem;
    h1 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 500;
        font-size: 2.6rem;
        color: #f3f3f3;
    }
`;
const TeamMemberWrapper = styled.div`
    margin-top: 4.2rem;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 700px) {
        justify-content: space-between;
        width: 100%;
    }

    div {
        width: 24.6rem;
        height: 10.6rem;
        background: rgba(44, 48, 54, 0.5);
        box-shadow: 0rem 0rem 2.3rem rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(0.85rem);
        border-radius: 1rem;
        margin-right: 2.2rem;
        margin-bottom: 2.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media (max-width: 700px) {
            &:nth-child(even) {
                margin-right: 0;
            }
            width: 28rem;
        }

        h2 {
            font-family: 'Noto Sans KR';
            font-style: normal;
            font-weight: 500;
            font-size: 1.90131rem;
            color: #e6e6e6;
            margin-bottom: 1rem;
        }

        h3 {
            font-family: 'Noto Sans KR';
            font-style: normal;
            font-weight: 300;
            font-size: 1.90131rem;
            color: #e6e6e6;
        }
    }
`;
