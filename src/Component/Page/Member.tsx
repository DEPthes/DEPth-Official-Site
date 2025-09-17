import React from 'react';
import styled from 'styled-components';
import SEOMetaTag from '../../SEOMetaTag';
import StoryBlock from '../Common/StoryBlock';
import { memberContents } from '../../assets/Contents/MemberContents';

const Member = () => {
  const filtered = memberContents.filter(story => story.cohort === '4기');

  return (
    <>
      {' '}
      <SEOMetaTag
        title={'DEPth Member'}
        description={
          'DEPth 가 말해주는 경험담, 12명의 사람들이 매주 모여 소통하며 함께 성장했습니다.'
        }
        keywords={
          'DEPth, 명지대학교 IT 동아리, 명지대학교 프로젝트 동아리, 뎁스, 명지, 명지대, 명지대 뎁스'
        }
        imgsrc={'../../../public/DEPthLogo.png'}
        url={'http://depth-mju.co.kr/Member'}
      />
      <Inner>
        <IntroWrapper>
          <IntroWriting>
            <h1>DEPth Member</h1>
            <h2>함께 성장하고 </h2>
            <h2>나아가는 </h2>
            <h2>
              <h3>뎁스의</h3> 팀워크
            </h2>
            <h4>
              뎁스는 지속적인 소통을 통해 극강의 팀워크를 만들어냈습니다. <br />
              장기적인 파트별 스터디와 <br />
              회원 간 교류를 위한 네트워킹 데이,
              <br />
              프로젝트를 시작하면 팀 단위로 매주 회의를 통해 만나며
              <br />
              함께 소통하고 성장해나가고 있습니다.
            </h4>
          </IntroWriting>
          <IntroImg src="./image/MemberImg.png" alt="MemberImg" />
        </IntroWrapper>
        <ScrollWrapper>
          <ScrollIcon src="./image/scrollIcon.png" alt="ScrollIcon" />
        </ScrollWrapper>
        <StoryWrapper>
          <Header>
            <h1>뎁스 4기가 말해주는 경험담</h1>
          </Header>
          <BoxWrapper>
            {filtered.map((story, idx) => (
              <StoryBlock
                key={idx}
                img={story.img}
                header={story.header}
                content={story.content}
                name={story.name}
                department={story.department}
                isLeft={story.isLeft}
              />
            ))}
          </BoxWrapper>
        </StoryWrapper>
      </Inner>
    </>
  );
};

export default Member;

const Inner = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 28.3rem;
    @media (max-width: 767px) {
        padding-top: 23.3rem;
    }
`;
const IntroWrapper = styled.div`
    display: flex;
    width: 73%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    @media (max-width: 767px) {
        flex-direction: column;
        width: 80%;
    }
`;
const IntroWriting = styled.div`
    width: 40%;
    font-family: 'Noto Sans KR';
    @media(max-width:767px){
        width: 100%;
    }
    h1 {
        font-size: 180%;
        font-weight: 300;
        @media(max-width: 767px){
            font-size: 280%;
        }
    }

    h2 {
        font-weight: 700;
        font-size: 500%;
        display: flex;
        @media(max-width: 767px){
            font-size: 600%;
        }
    }

    h3 {
        font-weight: 250;
        font-size: 100%;
        margin-right: 1.8rem;
        @media(max-width: 767px){
            font-size: 100%;
        }
    }

    h4 {
        margin-top: 2rem;
        font-weight: 300;
        font-size: 180%;
        @media(max-width: 767px){
            font-size: 280%;
        }
    }
`;
const IntroImg = styled.img`
    width: 50%;
    object-fit: cover;
    @media (max-width: 767px) {
        margin-top: 5rem;
        width: 100%;
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

const StoryWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 24.9rem;
    padding-bottom: 40rem;
    display: flex;
    flex-direction: column;
    @media (max-width: 767px) {
        width: 100%;
        align-items: flex-start;
    }
`;

const Header = styled.div`
    width: 80%;
    margin: 0 auto;
    h1 {
        font-weight: 700;
        font-size: 400%;
        line-height: 5.8rem;
    }
    margin-bottom: 15rem;
`;

const BoxWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`;
