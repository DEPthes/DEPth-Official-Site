import React from 'react';
import styled from 'styled-components';
import CurriculumBox from '../Common/CurriculumBox';
import PartBox from '../Common/PartBox';

const About = () => {
    return (
        <Inner>
            <IntroWrapper>
                <IntroImg src="./image/MainImg.png" alt="mainImg" />

                <IntroMentImg src="./image/MainMentImg.png" alt="mainImg" />
            </IntroWrapper>
            <ScrollWrapper>
                <ScrollIcon src="./image/scrollIcon.png" alt="ScrollIcon" />
            </ScrollWrapper>

            <SecondWrapper>
                <SecondMent>
                    <div>
                        <h1>새로움</h1>
                        <h2>을 시도하고,</h2>
                    </div>
                    <div>
                        <h1>배움</h1>
                        <h2>을 기록하며,</h2>
                    </div>
                    <div>
                        <h1>끊임없는 소통</h1>
                        <h2>을 통해 성장하는</h2>
                        <h1>DEPth</h1>
                        <h2>입니다.</h2>
                    </div>
                </SecondMent>

                <BoxWrapper>
                    <div>
                        <CurriculumBox
                            header={'Study'}
                            content={
                                '각 파트 별로 전문적인 지식을 쌓을 수 있는 스터디가 운영됩니다. 파트장과 파트원이 선별한 커리큘럼대로 운영되며, 파트 내에서의 스터디, 파트 간 협업 경험을 위한 활동, 외부 세미나 등으로 진행됩니다.'
                            }
                        />
                        <CurriculumBox
                            header={'Ideathon'}
                            content={
                                '기획, 디자인, 개발이 팀을 이뤄 8시간 동안 새로운 아이디어를 탄생시키는 단기 프로젝트입니다. 협업의 기초를 배우고 이어지는 프로젝트에 활용할 아이디어를 도출하는 단계입니다.'
                            }
                        />
                        <CurriculumBox
                            header={'Hackathon '}
                            content={
                                '일간 기획, 디자인, 개발 파트가 팀을 이뤄 무박 2일간 MVP 프로덕트를 개발하는 단기 프로젝트입니다.'
                            }
                        />
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div>
                        <CurriculumBox
                            header={'NetWorking'}
                            content={
                                '장기적인 네트워킹 행사를 통해 다양한 사람들을 만나고, 팀원들과의 친목을 다질 수 있는 자리입니다.'
                            }
                        />
                        <CurriculumBox
                            header={'Project'}
                            content={
                                '기획부터 운영까지 모든 프로세스를 경험할 수 있는 장기 프로젝트입니다. 완료 후 학교에서의 데모데이를 통해 결과물을 공유하고 DEPth 외부 사람들에게 서비스를 소개하는 시간을 가집니다.'
                            }
                        />
                        <CurriculumBox
                            header={'MJU Solution'}
                            content={
                                '명지대 학생들의 편의를 증진 시키기 위한 서비스를  고안하고 개발하는 활동입니다. 특정 학생 활동 기관의 요구 사항을 통해서 분석부터 설계, 개발 그리고 실제 운영까지 경험할 수 있습니다.'
                            }
                        />
                    </div>
                </BoxWrapper>
            </SecondWrapper>
            <ThirdWrapper>
                <ThirdHeader>
                    <div>
                        <div>
                            <h2>기획, 개발, 디자인팀</h2>
                            <h1>으로 구성된</h1> <h2>DEPth.</h2>
                        </div>
                    </div>

                    <div>
                        <h3>뎁스는 기획,개발,디자인팀으로 구성되어있습니다.</h3>
                    </div>
                </ThirdHeader>
                <PartWrapper>
                    <PartBox
                        header={'서비스의 시작과 끝, 기획!'}
                        headerImg={'./image/partPMIcon.png'}
                        userImg={'./image/partPM.png'}
                        content={
                            '‘기획’은 서비스의 존재이유를 만들어갑니다. 내외부 환경 분석과 시장분석을 통해 “사용자들에게 필요한 서비스”를  찾아가며 문제를 분석하고 해결방안을 모색하여 기획 의도를 정의합니다.  이후 기능정의서 및 화면 설계서 등 서비스의 구성을 정립하여 개발자와 디자이너에게 전달하여 끊임없는 소통을 통해 서비스를 완성해나갑니다.'
                        }
                        isDev={false}
                        DuserImg={''}
                        Dcontent={''}
                    />
                    <PartBox
                        header={'서비스 구현? 개발에게 맡겨!'}
                        headerImg={'./image/partDev.png'}
                        userImg={'./image/partFE.png'}
                        Dcontent={
                            '백엔드는 소프트웨어에서 사용자가 보지 못하는 영역들을 관리하고 API를 개발하는 역할을 맡습니다. 프론트엔드가 사용자가 웹 서비스를 편하게 이용할 수 있도록 사용자 인터페이스를 다룬다면, 백엔드 팀은 실질적으로 사용자들이 원하는 정보를 제공할 수 있도록 데이터를 관리하거나 서버를 운영하는 일을 합니다.'
                        }
                        isDev={true}
                        DuserImg={'./image/partBE.png'}
                        content={
                            '프론트엔드 팀은 사용자와 서비스를 연결해 주는 과정의 모든 것을 구현하는 역할을 합니다. 백엔드 팀, 디자인 팀과 협업하며 더 효율적인 데이터 처리 방법과 높은 퀄리티의 화면을 구현하기 위해 노력합니다. 프론트엔드의 가치는 서비스의 가치와 직결되므로 웹서비스의 전체적인 수준을 높이기 위해 매일같이 고민하고 있습니다.'
                        }
                    />
                    <li>
                        <PartBox
                            header={'사용자의 눈이 되어줄게,  디자인에게 맡겨!'}
                            headerImg={'./image/partDeIcon.png'}
                            userImg={'./image/partPM.png'}
                            content={
                                '디자인팀은 사용자의 니즈를 파악하고 사용자의 경험을 위한 UX/UI를 설계하고 디자인합니다. 사용자에 대한 통찰력을 기르고 사용자들이 원하는 것이 무언인지 끌어내며 개발팀, 기획팀과의 소통을 통해 해결책을 찾아냅니다. '
                            }
                            isDev={false}
                            DuserImg={''}
                            Dcontent={''}
                        />
                    </li>
                </PartWrapper>
            </ThirdWrapper>
            <LastWrapper>
                <div>
                    <h1>앞으로도</h1>
                    <h1>뎁스의 행보를 응원해주세요.</h1>
                </div>
                <div className="blur">
                    <button>
                        <h2>2기 지원하기</h2>
                    </button>
                </div>
            </LastWrapper>
        </Inner>
    );
};

export default About;

const Inner = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 313px;
    background: #0b0b0b;
    backdrop-filter: blur(42px);

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        object-fit: cover;
    }
`;
const IntroWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const IntroImg = styled.img`
    z-index: -99;
    width: 536px;
    height: 536px;
`;

const IntroMentImg = styled.img`
    position: absolute;
    width: 494px;
    height: 154px;
`;

const ScrollIcon = styled.img`
    width: 44px;
    height: 22px;
    margin: 0 auto;
`;

const ScrollWrapper = styled.div`
    margin-top: 163px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SecondWrapper = styled.div`
    display: flex;
    align-items: center;

    justify-content: center;
    flex-direction: column;

    margin-top: 313px;
`;

const SecondMent = styled.div`
    margin-bottom: 35px;

    width: 100%;
    div {
        display: flex;
        align-items: center;
    }

    h1 {
        font-style: normal;
        font-weight: 900;
        font-size: 40px;
        line-height: 58px;
    }

    h2 {
        font-style: normal;
        font-weight: 350;
        font-size: 40px;
        line-height: 58px;
    }
`;

const BoxWrapper = styled.div`
    display: flex;

    div {
        display: flex;
        justify-content: center;
    }
`;

const ThirdWrapper = styled.div`
    margin-top: 442px;
`;
const ThirdHeader = styled.div`
    width: 100%;

    div {
        div {
            display: flex;
        }
    }

    h1,
    h2 {
        font-style: normal;
        font-size: 40px;
        line-height: 148.8%;
        color: #ffffff;
    }

    h1 {
        margin-right: 15px;
        font-weight: 350;
    }

    h2 {
        font-weight: 900;
    }

    h3 {
        margin-top: 10px;
        margin-bottom: 93px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 139.8%;

        color: #e2e2e2;
    }
`;

const PartWrapper = styled.div`
    li {
        margin-top: 360px;
        list-style: none;
    }
`;

const LastWrapper = styled.div`
    margin-top: 562px;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    margin-bottom: 403px;

    h1 {
        font-style: normal;
        font-weight: 900;
        font-size: 42px;
        line-height: 148.8%;
        /* or 62px */

        color: #ffffff;
    }

    div {
        margin-bottom: 55px;
    }

    .blur {
        width: 202px;
        height: 56.59px;
        filter: drop-shadow(0px 0px 8px rgba(53, 76, 218, 0.6));
    }

    button {
        width: 202px;
        height: 56.59px;
        border: none;

        cursor: pointer;

        background: #354cda;
        border-radius: 6.09483px;
        /* make the background image appear only once */

        h2 {
            font-family: 'Noto Sans KR';
            font-style: normal;
            font-weight: 350;
            font-size: 20.8966px;
            line-height: 148.8%;
            /* identical to box height, or 31px */

            color: rgba(255, 255, 255, 0.95);
        }
    }
`;
