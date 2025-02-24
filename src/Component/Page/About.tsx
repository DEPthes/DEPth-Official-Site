import React, { useState } from 'react';
import styled from 'styled-components';
import CurriculumBox from '../Common/CurriculumBox';
import PartBox from '../Common/PartBox';
import { useMediaQuery } from 'react-responsive';

const About = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 700px)' });
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
            'https://docs.google.com/forms/d/e/1FAIpQLSfSS6FAsNBunb7AIGRyppNm9oXrGuv6FBEFpFFMrEPc0dZgUQ/viewform?usp=header';
    };

    const curriculumBoxes1 = [
        {
            id: 'Study',
            header: 'Study',
            content:
                '협업 프로젝트에 도입하기 전, 파트별 지식을 쌓을 수 있는 스터디 활동이 진행됩니다. 파트장과 파트원이 선별한 10주 분량의 커리큘럼으로 진행됩니다.',
        },
        {
            id: '아이디어톤',
            header: '아이디어톤',
            content:
                '협업 프로젝트의 시작을 알리는 행사입니다. 프로젝트를 진행할 팀원들과 함께 주제에 맞는 아이디어를 도출하고, 전체 회원들과 공유하는 시간입니다.',
        },
        {
            id: 'MVP Project',
            header: 'MVP Project',
            content:
                '협업 경험을 위한 4주간의 단기 프로젝트입니다. 최소 실현 가능한 제품이라는 MVP의 성격을 토대로 협업 경험, Study 복습과 실현, 회고와 피드백을 추구하며 진행됩니다.',
        },
    ];
    const curriculumBoxes2 = [
        {
            id: 'Main Project',
            header: 'Main Project',
            content:
                'DEPth의 메인 활동, 16주간의 장기 협업 프로젝트입니다. 기획, 디자인, 개발 파트가 팀을 이뤄 서비스 기획부터 런칭, 이후 실제 고객 유입과 이를 통한 서비스 개선까지 경험해 볼 수 있습니다.',
        },
        {
            id: 'Demo Day',
            header: 'Demo Day',
            content:
                '프로젝트 종료 시점, 전체 회원이 모여 팀별로 서비스를 소개하고 체험하며 피드백을 주고받는 행사입니다',
        },
        {
            id: 'Networking',
            header: 'Networking',
            content:
                '다양한 주제의 네트워킹 행사를 통해 여러 분야의 사람들을 만나고, 회원 간의 네트워킹망을 형성할 수 있습니다.',
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
                '‘기획’은 서비스의 존재 이유를 만들어갑니다. 내외부 환경 분석과 시장분석을 통해 “사용자들에게 필요한 서비스”를 찾아가며 문제를 분석하고 해결방안을 모색하여 기획 의도를 정의합니다. 이후 기능정의서 및 화면 설계서 등 서비스의 구성을 정립하여 개발자와 디자이너에게 전달하며 끊임없는 소통을 통해 서비스를 완성해 나갑니다.',
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
                '백엔드팀은 소프트웨어에서 사용자가 보지 못하는 영역들을 관리하고 API를 개발하는 역할을 맡습니다. 프론트엔드팀이 사용자 편의를 위해 사용자 인터페이스를 다룬다면, 백엔드팀은 실질적으로 사용자들이 원하는 정보를 제공할 수 있도록 데이터를 관리하거나 서버를 운영하는 일을 합니다.',
            DuserImg: './image/partBE.png',
            content:
                '프론트엔드팀은 사용자와 서비스를 연결해 주는 과정의 모든 것을 구현하는 역할을 합니다. 백엔드팀, 디자인팀과 협업하며 더 효율적인 데이터 처리 방법과 높은 퀄리티의 화면을 구현하기 위해 노력합니다. 프론트엔드팀의 가치는 서비스의 가치와 직결되므로 웹서비스의 전체적인 수준을 높이기 위해 매일같이 고민하고 있습니다.',
            AuserImg: './image/partAD.png',
            Acontent:
                '안드로이드팀은 사용자 중심의 모바일 애플리케이션을 제공하는 것을 목표로 활동합니다. 안드로이드 운영체제 기반의 애플리케이션 개발과 관리가 주요 업무이고, 사용자와 가장 가까운 곳에서 운영되기 때문에 사용자에게 최적화된 서비스를 제공하기 위해 지속적으로 노력하며 다양한 가치를 창출하고자 합니다.',
        },
        {
            id: 'design',
            header: '사용자의 눈이 되어줄게!',
            header2: '',
            header3: '',
            headerImg: './image/partDeIcon.png',
            userImg: './image/partDE.png',
            DuserImg: '',
            Dcontent: '',
            isDev: false,
            content:
                '디자인팀은 사용자의 니즈를 파악하고 사용자의 경험을 위한 UX/UI를 설계하고 디자인합니다. 사용자에 대한 통찰력을 기르고 사용자들이 원하는 것이 무언인지 끌어내며 개발팀, 기획팀과의 소통을 통해 해결책을 찾아냅니다. ',
            AuserImg: '',
            Acontent: '',
        },
    ];

    return (
        <Inner>
            <IntroWrapper>
                <IntroImg src="./image/MainImg.png" alt="mainImg" />
            </IntroWrapper>

            <ScrollWrapper>
                <ScrollIcon src="./image/scrollIcon.png" alt="ScrollIcon" />
            </ScrollWrapper>

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
                    <em> DEPth</em>입니다.
                </SecondMent>
                <MobileCategoryContainer>
                    <MobileCategoryUpperRow>
                        <MobileCategoryButton
                            widthValue="15.2rem"
                            onClick={() => curriculumHandleClick('Study')}
                            id="Study"
                            activeCurriculumButton={activeCurriculumButton}
                        >
                            Study
                        </MobileCategoryButton>
                        <MobileCategoryButton
                            widthValue="19.8rem"
                            onClick={() => curriculumHandleClick('아이디어톤')}
                            id="아이디어톤"
                            activeCurriculumButton={activeCurriculumButton}
                        >
                            아이디어톤
                        </MobileCategoryButton>
                        <MobileCategoryButton
                            widthValue="22rem"
                            onClick={() => curriculumHandleClick('MVP Project')}
                            id="MVP Project"
                            activeCurriculumButton={activeCurriculumButton}
                        >
                            MVP Project
                        </MobileCategoryButton>
                    </MobileCategoryUpperRow>
                    <MobileCategoryLowerRow>
                        <MobileCategoryButton
                            widthValue="17.4rem"
                            onClick={() =>
                                curriculumHandleClick('Main Project')
                            }
                            id="Main Project"
                            activeCurriculumButton={activeCurriculumButton}
                        >
                            Main Project
                        </MobileCategoryButton>
                        <MobileCategoryButton
                            widthValue="22.6rem"
                            onClick={() => curriculumHandleClick('Demo Day')}
                            id="Demo Day"
                            activeCurriculumButton={activeCurriculumButton}
                        >
                            Demo Day
                        </MobileCategoryButton>
                        <MobileCategoryButton
                            widthValue="22.6rem"
                            onClick={() => curriculumHandleClick('Networking')}
                            id="Networking"
                            activeCurriculumButton={activeCurriculumButton}
                        >
                            Networking
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
                    <h1>DEPth의 행보를 응원해주세요.</h1>
                </div>
                <div className="blur"></div>
                <ColorBox />
                <FormButton onClick={handleButtonClick}>
                    4기 운영진 지원하기
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

const FormButton = styled.button`
    width: 200px !important;
    height: 10.5rem;
    background: red;
    border-radius: 50px;
    margin-top: -150px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer !important;

    @media (max-width: 950px) {
        width: 150px !important;
        font-size: 12px;
    }
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
    @media (max-width: 700px) {
        overflow-x: hidden;
        padding-top: 31.3rem;
    }
`;
const IntroWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const IntroImg = styled.img`
    z-index: -99;
    width: 53.6rem;
    height: 53.6rem;
`;

const ScrollIcon = styled.img`
    width: 4.4rem;
    height: 2.2rem;
    margin: 0 auto;
`;

const ScrollWrapper = styled.div`
    margin-top: 15.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 700px) {
        margin-top: 30.8rem;
    }
`;

const SecondWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 31.3rem;
    @media (max-width: 700px) {
        margin-top: 18.5rem;
        width: 100%;
        padding: 0 5.8rem;
    }
`;

const SecondMent = styled.div`
    margin-bottom: 3.5rem;
    width: 100%;
    white-space: pre-line;

    em {
        font-style: normal;
        font-weight: 700;
        font-size: 4rem;
        line-height: 5.8rem;
    }
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 250;
    font-size: 4rem;
    line-height: 5.8rem;
    @media (max-width: 700px) {
        margin-bottom: 0;
    }
`;

const BoxWrapper = styled.div`
    display: flex;

    div {
        display: flex;
        justify-content: center;
    }
    @media (max-width: 700px) {
        /* display: none; */
    }
`;

const ThirdWrapper = styled.div`
    margin-top: 44.2rem;
    @media (max-width: 700px) {
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
            margin-bottom: 5.3rem;
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
    @media (max-width: 700px) {
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
    margin-top: 56.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    margin-bottom: 35.3rem;
    @media (max-width: 700px) {
        margin-bottom: 0;
    }

    h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 4.2rem;
        line-height: 148.8%;
        /* or 62px */

        color: #ffffff;
    }

    div {
        margin-bottom: 3.4375em;
    }

    .blur {
        width: 20.2rem;
        height: 5.659rem;
        filter: drop-shadow(0px 0px 8px rgba(53, 76, 218, 0.6));
    }
    a {
        text-decoration: none;
    }

    button {
        width: 20.2rem;
        height: 5.659rem;
        border: none;
        text-decoration-line: none;
        cursor: pointer;

        background: #354cda;
        border-radius: 0.609483rem;
        border: none;
        /* make the background image appear only once */
        h2 {
            font-family: 'Noto Sans KR';
            font-style: normal;
            font-weight: 350;
            font-size: 2.08966rem;
            line-height: 148.8%;

            /* identical to box height, or 31px */

            color: rgba(255, 255, 255, 0.95);
        }
    }
`;

const MobileCategoryContainer = styled.div`
    display: none;
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 57.333rem;

        margin-top: 7.5rem;
    }
`;

const MobileCategoryUpperRow = styled.div`
    display: flex;
    justify-content: space-between;
    height: 6.167rem;
    width: 90%;
    margin-bottom: 1.333rem;
    & > div:nth-of-type(2) {
        margin: 0 2.6rem;
    }
`;

const MobileCategoryLowerRow = styled.div`
    display: flex;
    justify-content: space-between;
    height: 6.167rem;
    width: 100%;
    & > div:nth-of-type(2) {
        margin: 0 2.6rem;
    }
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
            ? '0.1px solid rgba(53, 54, 95, 0.56)'
            : ''};
    border-radius: 50px;
    width: ${(props) => props.widthValue};
    background-color: ${(props) =>
        props.activeCurriculumButton === props.id
            ? 'rgba(44, 48, 54, 0.5)'
            : 'rgba(0, 0, 0, 0.56)'};
    color: ${(props) =>
        props.activeCurriculumButton === props.id ? 'white' : '#ffffff26'};
    height: 6.167rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
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
    @media (max-width: 700px) {
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
