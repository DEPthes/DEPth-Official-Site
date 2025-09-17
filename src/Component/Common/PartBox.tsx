import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

interface PartType {
  header: string;
  headerImg: string;
  userImg: string;
  content: string;
  isDev: boolean;
  DuserImg: string;
  Dcontent: string;
  AuserImg: string;
  Acontent: string;
  header2: string;
  header3: string;
}

const PartBox = (p: PartType) => {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });
  return (
    <BoxWrapper isDev={p.isDev}>
      {isMobile ? (
        <>
          <MHeader>
            <ImgWrapper>
              <img src={p.userImg} alt="pmImg" />
            </ImgWrapper>
            <Header>
              <div>
                <img src={p.headerImg} alt="headerImg" />
                <h1>{p.header}</h1>
              </div>
            </Header>
          </MHeader>
          {p.isDev ? (
            <>
              <ContentWrapper>
                <TextWrapper>
                  <h2 dangerouslySetInnerHTML={{ __html: p.content }} />
                </TextWrapper>
              </ContentWrapper>
              <MHeader>
                <ImgWrapper>
                  <img src={p.DuserImg} alt="pmImg" />
                </ImgWrapper>
                <Header>
                  <div>
                    <img
                      src={p.headerImg}
                      alt="headerImg"
                    />
                    <h1>{p.header2}</h1>
                  </div>
                </Header>
              </MHeader>
              <ContentWrapper>
                <TextWrapper>
                  <h2 dangerouslySetInnerHTML={{ __html: p.Dcontent }} />
                </TextWrapper>
              </ContentWrapper>
              <MHeader>
                <ImgWrapper>
                  <img src={p.AuserImg} alt="pmImg" />
                </ImgWrapper>
                <Header>
                  <div>
                    <img
                      src={p.headerImg}
                      alt="headerImg"
                    />
                    <h1>{p.header3}</h1>
                  </div>
                </Header>
              </MHeader>
              <ContentWrapper>
                <TextWrapper>
                  <h2 dangerouslySetInnerHTML={{ __html: p.Acontent }} />
                </TextWrapper>
              </ContentWrapper>
            </>
          ) : (
            <ContentWrapper>
              <TextWrapper>
                <h2 dangerouslySetInnerHTML={{ __html: p.content }} />
              </TextWrapper>
            </ContentWrapper>
          )}
        </>
      ) : (
        <>
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
                  <h2 dangerouslySetInnerHTML={{ __html: p.content }} />
                </TextWrapper>
              </ContentWrapper>
              <ContentWrapper>
                <ImgWrapper>
                  <img src={p.DuserImg} alt="pmImg" />
                </ImgWrapper>
                <TextWrapper>
                  <h2 dangerouslySetInnerHTML={{ __html: p.Dcontent }} />
                </TextWrapper>
              </ContentWrapper>
              <ContentWrapper>
                <ImgWrapper>
                  <img src={p.AuserImg} alt="pmImg" />
                </ImgWrapper>
                <TextWrapper>
                  <h2 dangerouslySetInnerHTML={{ __html: p.Acontent }} />
                </TextWrapper>
              </ContentWrapper>
            </DevBox>
          ) : (
            <ContentWrapper>
              <ImgWrapper>
                <img src={p.userImg} alt="pmImg" />
              </ImgWrapper>
              <TextWrapper>
                <h2 dangerouslySetInnerHTML={{ __html: p.content }} />
              </TextWrapper>
            </ContentWrapper>
          )}
        </>
      )}
    </BoxWrapper>
  );
};

export default PartBox;

const MHeader = styled.div`
    display: flex;
    margin-top: 7.062rem;
    margin-right: auto;
    img {
        width: 2.1rem;
        height: 2.1rem;
    }
    @media(max-width: 767px){
        width: 95%;
        margin: 7.062rem auto 0 auto;
    }
`;

const DevBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 767px) {
        width: fit-content;
        height: auto;
    }
`;

const BoxWrapper = styled.div<{ isDev: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 15%;
`;
const Header = styled.div`
    display: flex;
    margin-bottom: 3.4rem;
    margin-right: auto;
    @media(max-width: 767px){
        margin: 0 auto 0 1rem;
    }
    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    img {
        margin-right: 1.5rem;
        width: 5rem;
        height: 5rem;
        @media (max-width: 767px) {
            width: 21px;
            height: 21px;
        }
    }

    h1 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 700;
        font-size: 3rem;
        line-height: 4.3rem;
        @media(max-width: 767px){
            font-size: 2rem;
        }
    }
`;
const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
    box-sizing: border-box;

    @media (max-width: 767px) {
        margin-top: 5rem;
        margin-bottom: 0;
    }
`;
const ImgWrapper = styled.div`
    img {
        width: 17.6rem;
        height: 18.8rem;
        margin-right: 3rem;
        @media(max-width: 767px){
            width: 15rem;
            margin: 0 1rem 0 auto;
        }
    }
`;
const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.6rem 2.6rem 1.6rem 2.5rem;
    gap: 1rem;

    width: 100%;
    background: #2c3036;
    border-radius: 3.5rem;
    
    @media (max-width: 767px) {
        width: 100%;
        height: 35.8rem;
    }
    h2 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        line-height: 3.8rem;
        @media (max-width: 767px) {
            font-size: 2.5rem;
            line-height: 3.8rem;
        }
        color: #d9d9d9;
    }

    h2 strong {
        font-weight: bold;
        @media(max-width: 767px){
            display: inline-block;
            margin-bottom: 10px;
        }
    }
`;
