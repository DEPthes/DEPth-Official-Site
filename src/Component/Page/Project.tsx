/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import { projectContents } from '../../assets/Contents/ProjectContents';
import { ProjectBlockProps } from '../../assets/Contents/ProjectInterface';
import SEOMetaTag from '../../SEOMetaTag';
import ProjectBlock from '../Common/ProjectBlock';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Project = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const [section, setSection] = useState<'1기' | '2기' | '3기' | '4기'>(
    '1기',
  );

  const handleBoxClick = (
    selectedSection: '1기' | '2기' | '3기' | '4기',
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
            {isSmallScreen ? <><h2>뎁스의 <span>프로젝트</span></h2></> : <>
              <h2>뎁스의 </h2>
              <h3>프로젝트 </h3></>}
            <h4>
              DEPth의 프로젝트를 소개합니다.
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
              section === '2기'
                ? {
                  background: 'rgba(217, 217, 217, 0.5)',
                  color: 'rgba(255, 255, 255, 1)',
                }
                : {}
            }
            onClick={() => handleBoxClick('2기')}
          >
            2기
          </Box>
          <Box
            style={
              section === '3기'
                ? {
                  background: 'rgba(217, 217, 217, 0.5)',
                  color: 'rgba(255, 255, 255, 1)',
                }
                : {}
            }
            onClick={() => handleBoxClick('3기')}
          >
            3기
          </Box>
          <Box
            style={
              section === '4기'
                ? {
                  background: 'rgba(217, 217, 217, 0.5)',
                  color: 'rgba(255, 255, 255, 1)',
                }
                : {}
            }
            onClick={() => handleBoxClick('4기')}
          >
            4기
          </Box>
        </BoxWrapper>
        <>
          {
            projectContents.find((project) => project.cohort === section)?.cohort === '1기'
              ? <ProjectType></ProjectType>
              : <ProjectType>MVP</ProjectType>
          }
          <SecondWrapper>
            {projectContents
              .filter(
                (project) =>
                  project.cohort === section && project.projectType === 'MVP'
              )
              .map((project) => (
                <ProjectBlock
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  thumbnail={project.thumbnail}
                  logo={project.logo}
                  detailImg={project.detailImg}
                  cohort={project.cohort}
                  projectType={project.projectType}
                  platform={project.platform}
                  slogan={project.slogan}
                  description={project.description}
                  githubLink={project.githubLink}
                  serviceLink={project.serviceLink}
                  member={project.member}
                />
              ))}
          </SecondWrapper>
          {
            projectContents.find((project) => project.cohort === section)?.cohort === '1기'
              ? <ProjectType></ProjectType>
              : <ProjectType>MAIN</ProjectType>
          }
          <SecondWrapper style={{ marginBottom: '40rem' }}>
            {projectContents
              .filter(
                (project) =>
                  project.cohort === section && project.projectType === 'MAIN'
              )
              .map((project) => (
                <ProjectBlock
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  thumbnail={project.thumbnail}
                  logo={project.logo}
                  detailImg={project.detailImg}
                  cohort={project.cohort}
                  projectType={project.projectType}
                  platform={project.platform}
                  slogan={project.slogan}
                  description={project.description}
                  githubLink={project.githubLink}
                  serviceLink={project.serviceLink}
                  member={project.member}
                />
              ))}
          </SecondWrapper>
        </>
      </Inner>
    </>
  );
};

export default Project;

const Inner = styled.div`
    width: 60%;
    height: 100%;
    margin: 0 auto;
    padding-top: 23.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width: 767px){
        width: 80%;
    }
`;

const IntroWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    @media (max-width: 767px) {
        width: 80%;
        flex-direction: column;
        align-items: center;
    }
`;
const IntroWriting = styled.div`
    width: 100%;
    height: 30.5rem;
    font-family: 'Noto Sans KR';
    @media(max-width: 767px){
        width: 130%;
    }
    h1 {
        font-size: 180%;
        font-weight: 50rem;
        @media(max-width: 767px){
            font-size: 280%;
        }
    }

    h2 {
        font-weight: 250;
        font-size: 500%;
        display: flex;
        @media(max-width: 767px){
            font-size: 600%;
            span{
                font-size: 100%;
                font-weight: 700;
                margin-left: 10px;
            }
        }
    }

    h3 {
        font-weight: 700;
        font-size: 500%;
        margin-right: 1.8rem;
        @media(max-width: 767px){
            font-size: 600%;
        }
    }

    h4 {
        margin-top: 4rem;
        font-weight: 300;
        font-size: 180%;
        @media(max-width: 767px){
            font-size: 280%;
        }
    }
`;
const IntroImg = styled.img`
    display: flex;
    width: 50%;
    object-fit: cover;
    @media (max-width: 767px) {
        margin-left: 0;
        margin-top: 5rem;
        width: 130%;
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
    flex-direction: row;
`;

const ProjectType = styled.div`
    font-size: 5rem;
    font-weight: bold;
    margin-top: 13rem;
`;

const SecondWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    width: 110rem;
    @media (max-width: 767px) {
        width: 100%;
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.8rem 2.8rem;
    border-radius: 0.3125rem;
    border: 1px solid rgba(255, 255, 255, 0.041);
    background: rgba(217, 217, 217, 0.149);
    color: rgba(255, 255, 255, 0.712);
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.875rem;
    margin: 0 2rem;
    margin-top: 15rem;

    transition: background-color 0.3s ease;

    &:hover {
        background: rgba(217, 217, 217, 0.5);
        color: rgba(255, 255, 255, 1);
        cursor: pointer;
    }

    @media (max-width: 767px) {
        font-size: 2.5rem;
    }
`;
