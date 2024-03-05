/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import { projectContents } from '../../assets/Contents/ProjectContents';
import { ProjectBlockProps } from '../../assets/Contents/ProjectInterface';
import SEOMetaTag from '../../SEOMetaTag';
import ProjectBlock from '../Common/ProjectBlock';
import React, { useState } from 'react';

const Project = () => {
    const [section, setSection] = useState<'1기' | '2기 mvp' | '2기 main'>(
        '1기',
    );

    const handleBoxClick = (
        selectedSection: '1기' | '2기 mvp' | '2기 main',
    ) => {
        setSection(selectedSection);
    };

    return (
        <>
            <SEOMetaTag
                title={'DEPth Project'}
                description={
                    'DEPth의 첫 프로젝트 옛술의 전당, 적극적인 소통과 노력으로 만들어낼 수 있었습니다. '
                }
                keywords={
                    'DEPth, 명지대학교 IT 동아리, 명지대학교 프로젝트 동아리, 뎁스, 명지, 명지대, 명지대 뎁스'
                }
                imgsrc={'../../../public/DEPthLogo.png'}
                url={'http://depth-mju.co.kr/Project'}
            />{' '}
            <Inner>
                <IntroWrapper>
                    <IntroWriting>
                        <h1>DEPth Project</h1>
                        <h2>DEPth의 </h2>
                        <h3>프로젝트 </h3>
                        <h4>
                            DEPth 1기의 프로젝트부터 <br />
                            2기의 MVP Project와 Main Project를 소개합니다.
                        </h4>
                    </IntroWriting>
                    <IntroImg src="./image/ProjectImg.png" alt="MemberImg" />
                </IntroWrapper>
                <ScrollWrapper>
                    <ScrollIcon src="./image/scrollIcon.png" alt="ScrollIcon" />
                </ScrollWrapper>
                <BoxWrapper>
                    <Box
                        style={
                            section === '1기'
                                ? {
                                      background: 'rgba(217, 217, 217, 0.5)',
                                      color: 'rgba(255, 255, 255, 1)',
                                  }
                                : {}
                        }
                        onClick={() => handleBoxClick('1기')}
                    >
                        1기
                    </Box>
                    <Box
                        style={
                            section === '2기 mvp'
                                ? {
                                      background: 'rgba(217, 217, 217, 0.5)',
                                      color: 'rgba(255, 255, 255, 1)',
                                  }
                                : {}
                        }
                        onClick={() => handleBoxClick('2기 mvp')}
                    >
                        2기 MVP
                    </Box>
                    <Box
                        style={
                            section === '2기 main'
                                ? {
                                      background: 'rgba(217, 217, 217, 0.5)',
                                      color: 'rgba(255, 255, 255, 1)',
                                  }
                                : {}
                        }
                        onClick={() => handleBoxClick('2기 main')}
                    >
                        2기 Main
                    </Box>
                </BoxWrapper>
                <SecondWrapper>
                    {projectContents
                        .filter((project) => project.cohort === section)
                        .map((project: ProjectBlockProps) => (
                            <ProjectBlock
                                key={project.id}
                                id={project.id}
                                name={project.name}
                                thumbnail={project.thumbnail}
                                logo={project.logo}
                                cohort={project.cohort}
                                platform={project.platform}
                                slogan={project.slogan}
                                description={project.description}
                                githubLink={project.githubLink}
                                serviceLink={project.serviceLink}
                                member={project.member}
                            />
                        ))}
                </SecondWrapper>
            </Inner>
        </>
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

const BoxWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10.3rem;
    flex-direction: row;
`;

const SecondWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 5.3rem;

    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    width: 110rem;
    @media (max-width: 700px) {
        width: 100%;
    }

    margin-bottom: 35.9rem;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 7.7875rem;
    height: 4.375rem;
    border-radius: 0.3125rem;
    border: 1px solid rgba(255, 255, 255, 0.041);
    background: rgba(217, 217, 217, 0.149);
    color: rgba(255, 255, 255, 0.712);
    font-size: 1.4375rem;
    font-weight: 500;
    line-height: 1.875rem;
    margin-left: 2rem;
    margin-right: auto;
    margin-top: 15rem;

    transition: background-color 0.3s ease;

    &:hover {
        background: rgba(217, 217, 217, 0.5);
        color: rgba(255, 255, 255, 1);
        cursor: pointer;
    }

    @media (max-width: 700px) {
        width: 6.7875rem;
        height: 4.375rem;
        font-size: 1.90375rem;
    }
`;
