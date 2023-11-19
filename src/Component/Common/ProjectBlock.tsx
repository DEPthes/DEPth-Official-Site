import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ProjectMember {
    [key: string]: string | string[];
}

interface ProjectBlockProps {
    id: string;
    name: string;
    thumbnail: string;
    logo: string;
    cohort: string;
    platform: string;
    slogan: string;
    description: string;
    githubLink: string[];
    serviceLink: string;
    member: ProjectMember;
}

const ProjectBlock = (props: ProjectBlockProps) => {
    const {
        id,
        thumbnail,
        name,

        slogan,
        cohort,
        platform,
    } = props;

    return (
        <StyledLink to={`/project/${id}`}>
            <Wrapper>
                <img src={thumbnail} alt={name} />
                <Header>
                    <h3>{name}</h3>
                    <BoxWrapper>
                        <Box>{cohort}</Box>
                        <Box> {platform}</Box>
                    </BoxWrapper>
                </Header>
                <Slogan>{slogan}</Slogan>
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
    height: 38.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4.5rem;
    padding: 2.56rem 1.51rem;
    border-radius: 1.25rem;
    border: 0.1rem solid #ffffff1f;

    cursor: pointer;
    transition: transform 0.5s ease-in-out;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 1.5rem rgba(144, 144, 144, 0.2);
    }

    img {
        width: 43.625rem;
        height: 27.125rem;
        object-fit: cover;
        margin-bottom: 1rem;
        border-radius: 1rem;
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    h3 {
        font-weight: 900;
        font-size: 3.3rem;
        font-weight: 500;
    }
    margin-bottom: 0.56rem;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 5.7875rem;
    height: 3.375rem;
    border-radius: 0.3125rem;
    border: 1px solid rgba(255, 255, 255, 0.041);
    background: rgba(217, 217, 217, 0.149);
    color: rgba(255, 255, 255, 0.712);
    font-size: 1.4375rem;
    font-weight: 500;
    line-height: 1.875rem;
    margin-left: 1rem;
`;

const Slogan = styled.div`
    width: 90%;
    color: rgba(255, 255, 255, 0.897);
    font-size: 1.45rem;
    font-weight: 500;
    margin-bottom: 1.6rem;
`;

const BoxWrapper = styled.div`
    display: flex;
`;