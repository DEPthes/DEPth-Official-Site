import React from 'react';
import styled from 'styled-components';

interface PartType {
    header: string;
    headerImg: string;
    userImg: string;
    content: string;
    isDev: boolean;
    DuserImg: string;
    Dcontent: string;
}

const PartBox = (p: PartType) => {
    return (
        <BoxWrapper>
            <Header>
                <div>
                    <img src={p.headerImg} alt="headerImg" />
                    <h1>{p.header}</h1>
                </div>
            </Header>
            {p.isDev ? (
                <DevBox>
                    <ContentWrapper>
                        <ImgWrapper>
                            <img src={p.userImg} alt="pmImg" />
                        </ImgWrapper>
                        <TextWrapper>
                            <h2>{p.content}</h2>
                        </TextWrapper>
                    </ContentWrapper>{' '}
                    <ContentWrapper>
                        <ImgWrapper>
                            <img src={p.DuserImg} alt="pmImg" />
                        </ImgWrapper>
                        <TextWrapper>
                            <h2>{p.Dcontent}</h2>
                        </TextWrapper>
                    </ContentWrapper>
                </DevBox>
            ) : (
                <ContentWrapper>
                    <ImgWrapper>
                        <img src={p.userImg} alt="pmImg" />
                    </ImgWrapper>
                    <TextWrapper>
                        <h2>{p.content}</h2>
                    </TextWrapper>
                </ContentWrapper>
            )}
        </BoxWrapper>
    );
};

export default PartBox;

const DevBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 1238px;

    height: 440px;
`;

const BoxWrapper = styled.div`
    width: 1238px;
    height: 263px;

    margin-bottom: 113px;
`;
const Header = styled.div`
    display: flex;
    margin-bottom: 34px;
    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    img {
        margin-right: 15px;
    }

    h1 {
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 43px;
    }
`;
const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
`;
const ImgWrapper = styled.div`
    img {
        width: 176px;
        height: 188px;
        margin-right: 30px;
    }
`;
const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 26px 16px 25px;
    gap: 10px;
    width: 1025px;
    height: 168px;
    background: #2c3036;
    border-radius: 35px;

    h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 36px;

        color: #d9d9d9;
    }
`;
