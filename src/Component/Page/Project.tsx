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
    padding-top: 233px;
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
    width: 572px;
    height: 544px;
    object-fit: cover;
    margin-left: 223px;
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

const Desc = styled.div`
    margin-top: 100px;
    width: 1200px;
    height: 190px;
    background: rgba(44, 48, 54, 0.5);
    box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(8.5px);
    border-radius: 24px;

    display: flex;
    align-items: flex-start;
`;
const DescHeader = styled.div`
    width: 170px;
    height: 37.16px;
    margin-top: 41px;
    margin-left: 44px;
    margin-right: 103px;
    h1 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 38px;
        /* identical to box height */

        color: #f3f3f3;
    }
`;
const DescContent = styled.div`
    width: 830px;
    height: 109.78px;
    margin-top: 41px;
    h2 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 29px;

        color: #cfcfd0;
    }
`;

const TeamMember = styled.div`
    box-sizing: border-box;
    width: 1200px;
    height: 552px;
    margin-top: 56px;
    border: 1px solid #2c3036;
    filter: drop-shadow(0px 0px 23px rgba(0, 0, 0, 0.25));
    backdrop-filter: blur(8.5px);
    margin-bottom: 600px;
    border-radius: 24px;

    padding-left: 44px;
    padding-top: 42px;

    h1 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 500;
        font-size: 26px;

        color: #f3f3f3;
    }
`;
const TeamMemberWrapper = styled.div`
    margin-top: 42px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    div {
        width: 246px;
        height: 106px;
        background: rgba(44, 48, 54, 0.5);
        box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(8.5px);
        border-radius: 10px;
        margin-right: 22px;
        margin-bottom: 22px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2 {
            font-family: 'Noto Sans KR';
            font-style: normal;
            font-weight: 700;
            font-size: 19.0131px;
            color: #e6e6e6;
            margin-bottom: 10px;
        }

        h3 {
            font-family: 'Noto Sans KR';
            font-style: normal;
            font-weight: 400;
            font-size: 19.0131px;
            color: #e6e6e6;
        }
    }
`;
