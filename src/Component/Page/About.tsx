import React, { useState } from 'react';
import styled from 'styled-components';
import CurriculumBox from '../Common/CurriculumBox';
import PartBox from '../Common/PartBox';
import { useMediaQuery } from 'react-responsive';

const About = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
    const SecondMentSentenceWithNewLine = '을 통해 성장하는\n';
    const SecondMentSentenceWithOutNewLine = '을 통해 성장하는';
    const [activeCurriculumButton, setActiveCurriculumButton] =
        useState('Study');
    const curriculumHandleClick = (buttonId: string) => {
        setActiveCurriculumButton(buttonId);
    };
    const [activePartButton, setActivePartButton] = useState('pm');
    const partHandleClick = (buttonId: string) => {
        setActivePartButton(buttonId);
    };
    const handleButtonClick = () => {
        window.location.href =
            'https://docs.google.com/forms/d/e/1FAIpQLSc5lq5Sg9EIJEcNoPnp40QK9HzFpXnKHGa_tP6xVk438yvQ7g/viewform?usp=header';
    };

    const curriculumBoxes1 = [
        {
            id: 'Study',
            header: 'Study',
            content:
                '각 파트 별로 전문적인 지식을 쌓을 수 있는 스터디가 운영됩니다. 파트장과 파트원이 선별한 커리큘럼대로 운영되며, 파트 내에서의 스터디, 파트 간 협업 경험을 위한 활동, 외부 세미나 등으로 진행됩니다.',
        },
        {
            id: 'Idathon',
            header: 'Idathon',
            content:
                '기획, 디자인, 개발이 팀을 이뤄 8시간 동안 새로운 아이디어를 탄생시키는 단기 프로젝트입니다. 협업의 기초를 배우고 이어지는 프로젝트에 활용할 아이디어를 도출하는 단계입니다.',
        },
        {
            id: 'Hackathon',
            header: 'Hackathon',
            content:
                '일간 기획, 디자인, 개발 파트가 팀을 이뤄 무박 2일간 MVP 프로덕트를 개발하는 단기 프로젝트입니다.',
        },
    ];
    const curriculumBoxes2 = [
        {
            id: 'NetWorking',
            header: 'NetWorking',
            content:
                '장기적인 네트워킹 행사를 통해 다양한 사람들을 만나고, 팀원들과의 친목을 다질 수 있는 자리입니다.',
        },
        {
            id: 'Project',
            header: 'Project',
            content:
                '방학 기간 중 팀 빌딩을 통해 기획부터 운영까지 모든 프로세스를 경험합니다. 방학 후엔, 학교에서의 데모데이를 통해 서로의 결과물을 공유하고 DEPth 외부 사람들에게 서비스를 소개하는 시간을 가집니다.',
        },
        {
            id: 'MJU Solution',
            header: 'MJU Solution',
            content:
                '명지대 학생들의 편의를 증진 시키기 위한 서비스를 고안하고 개발하는 활동입니다. 특정 학생 활동 기간의 요구 사항을 통해서 분석부터 설계, 개발 그리고 실제 운영까지 경험할 수 있습니다.',
        },
    ];
    const partData = [
        {
            id: 'pm',
            header: '서비스의 시작과 끝, 기획!',
            header2: '',
            header3: '',
            headerImg: './image/partPMIcon.png',
            userImg: './image/partPM.png',
            content:
                '<strong>‘기획’은 서비스의 존재 이유를 만들어갑니다.</strong><br/> 내외부 환경 분석과 시장분석을 통해 “사용자들에게 필요한 서비스”를 찾아가며 문제를 분석하고 해결방안을 모색하여 기획 의도를 정의합니다. 이후 기능정의서 및 화면 설계서 등 서비스의 구성을 정립하여 개발자와 디자이너에게 전달하며 끊임없는 소통을 통해 서비스를 완성해 나갑니다.',
            isDev: false,
            DuserImg: '',
            Dcontent: '',
            AuserImg: '',
            Acontent: '',
        },
        {
            id: 'dev',
            header: '서비스 구현? 개발에게 맡겨!',
            header2: '보이지 않는 백엔드의 손!',
            header3: '소통하는 안드로이드 앱!',
            headerImg: './image/partDev.png',
            userImg: './image/partFE.png',
            isDev: true,
            Dcontent:
                '<strong>백엔드팀은 소프트웨어에서 사용자가 보지 못하는 영역들을 관리하고 API를 개발하는 역할을 맡습니다.</strong><br/> 프론트엔드팀이 사용자 편의를 위해 사용자 인터페이스를 다룬다면, 백엔드팀은 실질적으로 사용자들이 원하는 정보를 제공할 수 있도록 데이터를 관리하거나 서버를 운영하는 일을 합니다.',
            DuserImg: './image/partBE.png',
            content:
                '<strong>프론트엔드팀은 사용자와 서비스를 연결해 주는 과정의 모든 것을 구현하는 역할을 합니다.</strong><br/> 백엔드팀, 디자인팀과 협업하며 더 효율적인 데이터 처리 방법과 높은 퀄리티의 화면을 구현하기 위해 노력합니다. 프론트엔드팀의 가치는 서비스의 가치와 직결되므로 웹서비스의 전체적인 수준을 높이기 위해 매일같이 고민하고 있습니다.',
            AuserImg: './image/partAD.png',
            Acontent:
                '<strong>안드로이드팀은 사용자 중심의 모바일 애플리케이션을 제공하는 것을 목표로 활동합니다.</strong><br/> 안드로이드 운영체제 기반의 애플리케이션 개발과 관리가 주요 업무이고, 사용자와 가장 가까운 곳에서 운영되기 때문에 사용자에게 최적화된 서비스를 제공하기 위해 지속적으로 노력하며 다양한 가치를 창출하고자 합니다.',
        },
        {
            id: 'design',
            header: '사용자의 눈이 되어줄게!, 디자인에게 맡겨!',
            header2: '',
            header3: '',
            headerImg: './image/partDeIcon.png',
            userImg: './image/partDE.png',
            DuserImg: '',
            Dcontent: '',
            isDev: false,
            content:
                '<strong>디자인팀은 사용자의 니즈를 파악하고 사용자의 경험을 위한 UX/UI를 설계하고 디자인합니다.</strong><br/> 사용자에 대한 통찰력을 기르고 사용자들이 원하는 것이 무언인지 끌어내며 개발팀, 기획팀과의 소통을 통해 해결책을 찾아냅니다. ',
            AuserImg: '',
            Acontent: '',
        },
    ];

    return (
        <Inner>
            <IntroWrapper>
                {isSmallScreen?<IntroImg src='./image/MobileMainImg.png' alt='mainImg'/>:<IntroImg src="./image/MainImg.png" alt="mainImg" />}
            </IntroWrapper>

            <SecondWrapper>
                <SecondMent>
                    <em>새로움</em>을 시도하고, <br />
                    <em>배움</em>을 기록하며, <br />
                    <em>끊임없는 소통</em>
                    {isSmallScreen ? (
                        <> {SecondMentSentenceWithNewLine}</>
                    ) : (
                        <> {SecondMentSentenceWithOutNewLine}</>
                    )}
                    <em> 뎁스</em>입니다.
                </SecondMent>
                <MobileCategoryContainer>
                    <MobileCategoryUpperRow>
                        <MobileCategoryButton
                            widthValue="15rem"
                            onClick={() => curriculumHandleClick('Study')}
                            id="Study"
                            activeCurriculumButton={activeCurriculumButton}
                        >
                            Study
                        </MobileCategoryButton>
                        <MobileCategoryButton
                            widthValue="17rem"
                            onClick={() => curriculumHandleClick('Idathon')}
                            id="Idathon"
                            activeCurriculumButton={activeCurriculumButton}
                        >
                            Idathon
                        </MobileCategoryButton>
                        <MobileCategoryButton
                            widthValue="20rem"
                            onClick={() => curriculumHandleClick('Hackathon')}
                            id="Hackathon"
                            activeCurriculumButton={activeCurriculumButton}
                        >
                            Hackathon
                        </MobileCategoryButton>
                    </MobileCategoryUpperRow>
                    <MobileCategoryLowerRow>
                        <MobileCategoryButton
                            widthValue="20rem"
                            onClick={() =>
                                curriculumHandleClick('NetWorking')
                            }
                            id="NetWorking"
                            activeCurriculumButton={activeCurriculumButton}
                        >
                            NetWorking
                        </MobileCategoryButton>
                        <MobileCategoryButton
                            widthValue="16rem"
                            onClick={() => curriculumHandleClick('Project')}
                            id="Project"
                            activeCurriculumButton={activeCurriculumButton}
                        >
                            Project
                        </MobileCategoryButton>
                        <MobileCategoryButton
                            widthValue="22rem"
                            onClick={() => curriculumHandleClick('MJU Solution')}
                            id="MJU Solution"
                            activeCurriculumButton={activeCurriculumButton}
                        >
                            MJU Solution
                        </MobileCategoryButton>
                    </MobileCategoryLowerRow>
                </MobileCategoryContainer>
                <BoxWrapper>
                    {isSmallScreen
                        ? curriculumBoxes1.map(
                              (box) =>
                                  activeCurriculumButton === box.id && (
                                      <CurriculumBox
                                          key={box.id}
                                          header={box.header}
                                          content={box.content}
                                      />
                                  ),
                          )
                        : curriculumBoxes1.map((box) => (
                              <CurriculumBox
                                  key={box.id}
                                  header={box.header}
                                  content={box.content}
                              />
                          ))}
                </BoxWrapper>
                <BoxWrapper>
                    {isSmallScreen
                        ? curriculumBoxes2.map(
                              (box) =>
                                  activeCurriculumButton === box.id && (
                                      <CurriculumBox
                                          key={box.id}
                                          header={box.header}
                                          content={box.content}
                                      />
                                  ),
                          )
                        : curriculumBoxes2.map((box) => (
                              <CurriculumBox
                                  key={box.id}
                                  header={box.header}
                                  content={box.content}
                              />
                          ))}
                </BoxWrapper>
            </SecondWrapper>
            <ThirdWrapper>
                <ThirdHeader>
                    <div>
                        <h1>
                            <em>기획, 개발, 디자인팀</em>
                            으로 구성된 <em>DEPth.</em>
                        </h1>
                        <p>뎁스는 기획,개발,디자인팀으로 구성되어있습니다.</p>
                    </div>
                    <MobilePartButtonContainer>
                        <MobilePartButtonText
                            onClick={() => partHandleClick('pm')}
                            id="pm"
                            activePartButton={activePartButton}
                        >
                            기획
                        </MobilePartButtonText>
                        <MobilePartButtonText
                            onClick={() => partHandleClick('dev')}
                            id="dev"
                            activePartButton={activePartButton}
                        >
                            개발
                        </MobilePartButtonText>
                        <MobilePartButtonText
                            onClick={() => partHandleClick('design')}
                            id="design"
                            activePartButton={activePartButton}
                        >
                            디자인
                        </MobilePartButtonText>
                    </MobilePartButtonContainer>
                </ThirdHeader>
                <PartWrapper>
                    {isSmallScreen
                        ? partData.map(
                              (box) =>
                                  activePartButton === box.id && (
                                      <PartBox
                                          key={box.id}
                                          header={box.header}
                                          headerImg={box.headerImg}
                                          userImg={box.userImg}
                                          content={box.content}
                                          isDev={box.isDev}
                                          DuserImg={box.DuserImg}
                                          Dcontent={box.Dcontent}
                                          AuserImg={box.AuserImg}
                                          Acontent={box.Acontent}
                                          header2={box.header2}
                                          header3={box.header3}
                                      />
                                  ),
                          )
                        : partData.map((box) => (
                              <PartBox
                                  key={box.id}
                                  header={box.header}
                                  headerImg={box.headerImg}
                                  userImg={box.userImg}
                                  content={box.content}
                                  isDev={box.isDev}
                                  DuserImg={box.DuserImg}
                                  header2={box.header2}
                                  header3={box.header3}
                                  Dcontent={box.Dcontent}
                                  AuserImg={box.AuserImg}
                                  Acontent={box.Acontent}
                              />
                          ))}
                </PartWrapper>
            </ThirdWrapper>
            <LastWrapper>
                <div>
                    <h1>앞으로도</h1>
                    <h1>뎁스의 행보를 응원해주세요.</h1>
                </div>
                {!isSmallScreen?<div className="blur"></div>:<></>}
                {isSmallScreen?<ColorBox />:<></>}
                <FormButton onClick={handleButtonClick}>
                    4기 지원하기
                </FormButton>
            </LastWrapper>
        </Inner>
    );
};

export default About;

const ColorBox = styled.div`
    background: #0031e4;
    filter: blur(161.663px);
    width: 390px;
    height: 208px;
    margin-top: 150px;
    z-index: -1;
`;

const Inner = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 24.3rem;
    background: #0b0b0b;
    backdrop-filter: blur(4.2rem);
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        object-fit: contain;
    }
    @media (max-width: 767px) {
        overflow-x: hidden;
        padding-top: 31.3rem;
    }
`;
const IntroWrapper = styled.div`
    display: flex;
    z-index: -100;
    width: 100%;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 767px) {
        height: 100vh;
        align-items: center;
        justify-content: center;
    }
`;

const IntroImg = styled.img`
    z-index: -99;
    // width: 53.6rem;
    // height: 53.6rem;
    width: 100rem;
    // height: 100rem;
    
    @media(max-width: 767px){
        width: 80em;
    }
`;

const SecondWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 31.3rem;
    // padding-left: 2.5rem;
    @media (max-width: 767px) {
        margin-top: 18.5rem;
        width: 100%;
        // padding: 0 5.8rem;
    }
`;

const SecondMent = styled.div`
    margin-bottom: 10rem;
    width: 90%;
    white-space: pre-line;

    em {
        font-style: normal;
        font-weight: 700;
        font-size: 4.5rem;
        line-height: 5.8rem;
    }
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 250;
    font-size: 4.5rem;
    line-height: 5.8rem;
    @media (max-width: 767px) {
        margin-bottom: 0;
    }
`;

const BoxWrapper = styled.div`
    display: flex;
    width: 90%;

    div {
        display: flex;
        justify-content: center;
    }
    @media (max-width: 767px) {
        /* display: none; */
    }
`;

const ThirdWrapper = styled.div`
    margin-top: 44.2rem;
    @media (max-width: 767px) {
        width: 100%;
        padding: 0 5.8rem;

        margin-top: 40.2rem;
    }
`;
const ThirdHeader = styled.div`
    & > div:nth-of-type(1) {
        width: 100%;
        > h1 {
            width: 100%;
            font-style: normal;
            font-size: 3.5rem;
            line-height: 120.8%;
            color: #ffffff;

            > em {
                font-weight: 700;
            }
        }

        > p {
            margin-top: 2.7rem;
            margin-bottom: 10rem;
            font-style: normal;
            font-weight: 200;
            font-size: 2rem;
            line-height: 139.8%;

            color: #e2e2e2;
        }
    }

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 767px) {
        align-items: center;
    }
`;

const PartWrapper = styled.div`
    li {
        margin-top: 36rem;
        list-style: none;
    }
`;

const LastWrapper = styled.div`
    margin-top: 30em;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    margin-bottom: 35.3rem;
    @media (max-width: 767px) {
        margin-top: 30rem;
        margin-bottom: 30rem;
        height: 50rem;
    }

    h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 4.2rem;
        line-height: 148.8%;
        /* or 62px */

        color: #ffffff;
        @media(max-width: 767px){
        }
    }

    div {
        margin-bottom: 3.4375em;
        position: relative;
        @media(max-width: 767px){
            position: absolute;
        }
    }

    .blur{
        width: 20.2rem;
        height: 5.659rem;
        filter: drop-shadow(0px 0px 8px rgba(53, 76, 218, 0.6));
    }

    a {
        text-decoration: none;
    }

`;

const FormButton = styled.button`
    width: 20.2rem;
    height: 5.659rem;
    border: none;
    text-decoration-line: none;
    cursor: pointer;
    color: white;
    font-family: 'Noto Sans KR';
    font-size: 2rem;

    background: #354cda;
    border-radius: 0.609483rem;
    border: none;
    @media(max-width: 767px){
        position: absolute;
        margin-top: 25rem;
    }
`;

const MobileCategoryContainer = styled.div`
    display: none;
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-top: 7.5rem;
    }
`;

const MobileCategoryUpperRow = styled.div`
    display: flex;
    justify-content: space-between;
    height: 6.167rem;
    // width: 90%;
    margin-bottom: 3rem;
    // & > div:nth-of-type(1) {
    //     margin: 0 2.6rem;
    // }
`;

const MobileCategoryLowerRow = styled.div`
    display: flex;
    justify-content: space-between;
    height: 6.167rem;
    // width: 90%;
    // & > div:nth-of-type(2) {
    //     margin: 0 2.6rem;
    // }
`;
interface MobileCategoryButton {
    id: string;
    widthValue: string;
    activeCurriculumButton: string;
}
const MobileCategoryButton = styled.div<MobileCategoryButton>`
    background: rgba(0, 0, 0, 0.56);
    border: ${(props) =>
        props.activeCurriculumButton === props.id
            ? ''
            : '0.1px solid rgba(44, 48, 54, 0.5)'};
    border-radius: 50px;
    width: ${(props) => props.widthValue};
    background-color: ${(props) =>
        props.activeCurriculumButton === props.id
            ? 'rgba(44, 48, 54, 0.5)'
            : 'rgba(0, 0, 0, 0.56)'};
    color: ${(props) =>
        props.activeCurriculumButton === props.id ? 'white' : '#ffffff26'};
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 500;
    font-family: 'Noto Sans KR';
    cursor: pointer;
    transition: all 0.5s ease-out;
`;

const MobilePartButtonContainer = styled.div`
    background: #16181b;
    border-radius: 50px;
    width: 47.4rem;
    height: 8.6rem;
    display: none;
    margin-top: 5.7rem;
    justify-content: center;
    align-items: center;
    & > p:nth-of-type(2) {
        margin: 0 6.6rem;
    }
    @media (max-width: 767px) {
        display: flex;
    }
    cursor: pointer;
`;
interface MobilePartButtonText {
    id: string;
    activePartButton: string;
}
const MobilePartButtonText = styled.p<MobilePartButtonText>`
    color: rgba(255, 255, 255, 0.15);
    color: ${(props) =>
        props.activePartButton === props.id
            ? 'white'
            : 'rgba(255, 255, 255, 0.15)'};

    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    transition: all 0.5s ease-in;
`;
