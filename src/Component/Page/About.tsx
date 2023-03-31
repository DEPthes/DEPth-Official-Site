import React from 'react';
import styled from 'styled-components';
import CurriculumBox from '../Common/CurriculumBox';

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
                                '일간 기획, 디자인, 개발 파트가 팀을 이뤄 무박 2일간 MVP 프로덕트를 개발하는 단기 프로젝트입니다. 팀워크를 다지고'
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
                                ' 방학 기간 중 팀 빌딩을 통해 기획부터 운영까지 모든 프로세스를 경험합니다. 방학 후엔, 학교에서의 데모데이를 통해 서로의 결과물을 공유하고 DEPth 외부 사람들에게 서비스를 소개하는 시간을 가집니다.'
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

    width: 1150px;
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
    width: 1150px;

    div {
        display: flex;
        justify-content: center;
    }
`;
