/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { projectContents } from '../../assets/Contents/ProjectContents';
import { ProjectBlockProps } from '../../assets/Contents/ProjectInterface';
import SEOMetaTag from '../../SEOMetaTag';
import ProjectBlock from '../Common/ProjectBlock';

const Project = () => {
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
                        <h2>뎁스의 </h2>
                        <h3>프로젝트 </h3>
                        <h4>
                            뎁스 1기의 프로젝트부터 <br />
                            새롭게 합류한 2기의 단기 프로젝트를 소개합니다.
                        </h4>
                    </IntroWriting>
                    <IntroImg src="./image/ProjectImg.png" alt="MemberImg" />
                </IntroWrapper>
                <ScrollWrapper>
                    <ScrollIcon src="./image/scrollIcon.png" alt="ScrollIcon" />
                </ScrollWrapper>
                <SecondWrapper>
                    {projectContents.map((project: ProjectBlockProps) => (
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

const SecondWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 21.3rem;

    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    width: 110rem;
    @media (max-width: 700px) {
        width: 100%;
    }

    margin-bottom: 35.9rem;
`;
