/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { projectContents } from '../../../src/assets/Contents/ProjectContents';
import { ProjectBlockProps } from '../../../src/assets/Contents/ProjectInterface';

const ProjectDetail = () => {
    // useParams 훅을 사용하여 URL에서 프로젝트 ID 가져오기
    const { id } = useParams();
    const projectDetail = projectContents.find(
        (project) => project.id === id,
    ) as ProjectBlockProps;

    if (!projectDetail) {
        return <div>프로젝트를 찾을 수 없습니다.</div>;
    }

    return (
        <Inner>
            <SecondWrapper>
                <Header>
                    <div>
                        <img
                            src={projectDetail.logo}
                            alt={projectDetail.name}
                        />
                    </div>
                    <div>
                        <h1>{projectDetail.name}</h1>
                        <h2>{projectDetail.slogan}</h2>
                        {projectDetail.id === 'yetsul' ? (
                            <h4 className="service-end">
                                현재 서비스가 종료되었습니다.
                            </h4>
                        ) : (
                            <></>
                        )}
                    </div>
                </Header>
                <Content>
                    <ImgWrapper>
                        <img
                            src={projectDetail.thumbnail}
                            alt={projectDetail.name}
                        />
                        <ButtonWrapper>
                            {projectDetail.serviceLink != '' ? (
                                <a
                                    href={projectDetail.serviceLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src="../image/link.png" alt="link" />
                                </a>
                            ) : (
                                <></>
                            )}

                            {projectDetail.githubLink.map(
                                (githubLink, index) => (
                                    <a
                                        key={index}
                                        href={githubLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src="../image/github.png"
                                            alt="github"
                                        />
                                    </a>
                                ),
                            )}
                        </ButtonWrapper>
                    </ImgWrapper>
                </Content>
                <Desc>
                    <DescHeader>
                        <h1>프로젝트 설명</h1>
                    </DescHeader>
                    <DescContent>
                        <h2>{projectDetail.description}</h2>
                    </DescContent>
                </Desc>
                <TeamMember>
                    <div>
                        <h1>프로젝트 팀원</h1>
                    </div>
                    <TeamMemberWrapper>
                        {Object.entries(projectDetail.member).map(
                            ([role, names], index) => (
                                <>
                                    {Array.isArray(names) ? (
                                        names.map((name, i) => (
                                            <div key={index}>
                                                <h2>{role}</h2>
                                                <h3 key={i}>{name}</h3>
                                            </div>
                                        ))
                                    ) : (
                                        <div key={index}>
                                            <h2>{role}</h2>
                                            <h3>{names}</h3>
                                        </div>
                                    )}
                                </>
                            ),
                        )}
                    </TeamMemberWrapper>
                </TeamMember>
            </SecondWrapper>
        </Inner>
    );
};

export default ProjectDetail;

const Inner = styled.div`
    padding-left: 6rem;
    padding-right: 6rem;
    box-sizing: border-box;
    padding-top: 4.3rem;
    display: flex;

    align-items: center;
    justify-content: center;
    @media (max-width: 700px) {
        padding-top: 0;
    }
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
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    img {
        width: 16.8125rem;
        height: 16.72263rem;
        margin-right: 3.2rem;
        @media (max-width: 700px) {
            margin-bottom: 3rem;
            width: 11rem;
            height: 11rem;
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

    h4 {
        margin-top: 1rem;
        font-size: 1.5rem;
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

    position: absolute;
    bottom: 3.2rem;

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a {
        margin-right: 2.5rem;
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

const Desc = styled.div`
    margin-top: 5rem;
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

    height: fix;
    margin-top: 5.6rem;
    border: 1px solid #2c3036;
    filter: drop-shadow(0rem 0rem 2.3rem rgba(0, 0, 0, 0.25));
    backdrop-filter: blur(0.85rem);
    margin-bottom: 60rem;
    border-radius: 2.4rem;
    padding-left: 4.4rem;
    padding-top: 4.2rem;
    padding-bottom: 4.2rem;
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
            width: 25rem;
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
