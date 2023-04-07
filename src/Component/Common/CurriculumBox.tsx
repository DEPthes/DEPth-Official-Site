import React from 'react';
import styled from 'styled-components';

interface curriculum {
    header: string;
    content: string;
}

const CurriculumBox = (c: curriculum) => {
    return (
        <Box>
            <h1>{c.header}</h1>
            <h2>{c.content}</h2>
        </Box>
    );
};

export default CurriculumBox;

const Box = styled.div`
    width: 45.7rem;
    height: 27.6rem;

    background: #2c3036;
    box-shadow: 0rem 0rem 2.3rem rgba(40, 39, 39, 0.25);
    backdrop-filter: blur(0.65rem);
    border-radius: 2.4rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    margin-right: 2.5rem;
    margin-bottom: 2.7rem;

    padding: 1.4rem 4rem 6.7rem 3.2rem;
    box-sizing: border-box;

    @media (max-width: 700px) {
        margin: 0 auto;
        margin-top: 6.2rem;
        padding-top: 0.4rem;
        background-color: #354cda;
        width: 100%;
        height: 35.6rem;
    }
    transition: all 0.5s ease-in-out;
    :hover {
        background: #354cda;
        box-shadow: 0rem 0rem 2.3rem rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(0.7rem);
    }

    h1 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 900;
        font-size: 3rem;
        line-height: 4.3rem;
        height: 4.3rem;

        margin-bottom: 1.2rem;
    }

    h2 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        line-height: 2.8rem;
        height: 8rem;

        @media (max-width: 700px) {
            font-size: 2.5rem;
            line-height: 3.8rem;
        }
    }
`;
