import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProjectBlockProps } from '../../assets/Contents/ProjectInterface';

const ProjectBlock = (props: ProjectBlockProps) => {
    const { id, thumbnail, name, slogan, cohort, projectType, platform } = props;

    return (
        <StyledLink to={`/project/${id}`}>
            <Wrapper>
                <img src={thumbnail} alt={name} />
                <TextWrapper>
                    <Header>
                        <h3>{name}</h3>
                    </Header>
                    <Slogan>{slogan}</Slogan>
                    <BoxWrapper>
                        <Box>{projectType}</Box>
                        <WhiteBox> {platform}</WhiteBox>
                    </BoxWrapper>
                </TextWrapper>
            </Wrapper>
        </StyledLink>
    );
};

export default ProjectBlock;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Wrapper = styled.div`
    width: 50.25rem;
    font-family: 'Noto Sans KR';
    // height: 38.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    padding: 3rem 2rem;
    border-radius: 20px;
    border: 0.1rem solid #ffffff1f;

    cursor: pointer;
    transition: transform 0.5s ease-in-out;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 1.5rem rgba(144, 144, 144, 0.2);
    }

    @media (max-width: 767px) {
        width: 60.25rem;
        // height: 48.75rem;
    }

    img {
        width: 100%;
        height: 27.125rem;
        object-fit: cover;
        margin-bottom: 2rem;
        border-radius: 10px;
        @media (max-width: 767px) {
            width: 53.625rem;
            height: 37.125rem;
        }
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Header = styled.div`
    display: flex;
    font-family: 'Noto Sans KR';
    font-weight: 700;
    align-items: center;
    justify-content: space-between;
    h3 {
        font-family: 'Noto Sans KR';
        font-weight: 900;
        font-size: 3.3rem;
        @media (max-width: 767px) {
            font-size: 3.7rem;
        }
    }
    margin-bottom: 0.5em;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 6.7875rem;
    height: 3.375rem;
    border-radius: 0.3125rem;
    border: 1px solid rgba(255, 255, 255, 0.041);
    background: rgba(217, 217, 217, 0.149);
    color: rgba(255, 255, 255, 0.712);
    font-size: 1.4375rem;
    font-weight: bold;
    line-height: 1.875rem;
    margin-right: 1rem;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
    @media (max-width: 767px) {
        width: 8.7875rem;
        height: 4.375rem;
        font-size: 1.90375rem;
    }
`;

const WhiteBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 6.7875rem;
    height: 3.375rem;
    border-radius: 0.3125rem;
    border: 1px solid #363636;
    background-color: black;
    color: rgba(255, 255, 255, 0.712);
    font-size: 1.4375rem;
    font-weight: 500;
    line-height: 1.875rem;
    margin-right: 1rem;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
    @media (max-width: 767px) {
        width: 8.7875rem;
        height: 4.375rem;
        font-size: 1.90375rem;
    }
`;

const Slogan = styled.div`
    color: rgba(255, 255, 255, 0.767);
    font-size: 1.9rem;
    margin-bottom: 2rem;
    font-weight: 500;
    @media (max-width: 767px) {
        font-size: 2.005rem;
    }
`;

const BoxWrapper = styled.div`
    display: flex;
    margin: 0 auto 0 0;
`;
