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
    width: 36.7rem;
    height: 19.6rem;

    background: #2c3036;
    box-shadow: 0rem 0rem 2.3rem rgba(40, 39, 39, 0.25);
    backdrop-filter: blur(0.65rem);
    border-radius: 2.4rem;

    display: flex;
    flex-direction: column;

    margin-right: 2.5rem;

    padding: 3.4rem 4rem 4.7rem 3.2rem;
    box-sizing: border-box;

    margin-bottom: 2.7rem;

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
        font-size: 1.4rem;
        line-height: 2.3rem;
        height: 8rem;
    }
`;
