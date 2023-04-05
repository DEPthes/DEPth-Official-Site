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

    width: 123.8rem;

    height: 44rem;
`;

const BoxWrapper = styled.div`
    width: 123.8rem;
    height: 26.3rem;

    margin-bottom: 11.3rem;
`;
const Header = styled.div`
    display: flex;
    margin-bottom: 3.4rem;
    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    img {
        margin-right: 1.5rem;
    }

    h1 {
        font-style: normal;
        font-weight: 900;
        font-size: 3rem;
        line-height: 4.3rem;
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
        width: 17.6rem;
        height: 18.8rem;
        margin-right: 3rem;
    }
`;
const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.6rem 2.6rem 1.6rem 2.5rem;
    gap: 1rem;
    width: 102.5rem;
    height: 16.8rem;
    background: #2c3036;
    border-radius: 3.5rem;

    h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 3.6rem;

        color: #d9d9d9;
    }
`;
