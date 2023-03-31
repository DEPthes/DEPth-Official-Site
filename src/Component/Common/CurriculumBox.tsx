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
    width: 367px;
    height: 196px;

    background: #2c3036;
    box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(6.5px);
    border-radius: 24px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-right: 25px;

    padding: 34px 40px 27px 32px;
    box-sizing: border-box;

    margin-bottom: 27px;

    :hover {
        background: #354cda;
        box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(7px);
    }

    h1 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 43px;

        margin-bottom: 12px;
    }

    h2 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
    }
`;
