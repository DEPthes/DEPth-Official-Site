import React from 'react';
import styled from 'styled-components';

const Member = () => {
    return (
        <Inner>
            <IntroWrapper>
                <IntroWriting>
                    <h1>DEPth Member</h1>
                    <h2>함께 성장하고 </h2>
                    <h2>나아가는 </h2>
                    <h2>
                        <h3>뎁스의 </h3> 팀워크
                    </h2>
                    <h4>
                        뎁스는 지속적인 소통을 통해 극강의 팀워크를
                        만들어냈습니다. <br />
                        12명의 사람들이 매주 모여 정기회의를 통해 소통하며{' '}
                        <br />
                        함께 성장해나가고 있습니다.
                    </h4>
                </IntroWriting>
                <IntroImg src="./image/MemberImg.png" alt="MemberImg" />
            </IntroWrapper>
            <ScrollWrapper>
                <ScrollIcon src="./image/scrollIcon.png" alt="ScrollIcon" />
            </ScrollWrapper>
            <StoryWrapper>
                <Header>
                    <h1>뎁스 1기가 말해주는 경험담</h1>
                </Header>
                <div>박스</div>
            </StoryWrapper>
        </Inner>
    );
};

export default Member;

const Inner = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 313px;
`;
const IntroWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const IntroWriting = styled.div`
    width: 595px;
    height: 386px;
    font-family: 'Noto Sans KR';
    h1 {
        font-size: 20px;

        font-weight: 500;
    }

    h2 {
        font-weight: 900;
        font-size: 60px;

        display: flex;
    }

    h3 {
        font-weight: 350;
        font-size: 60px;

        margin-right: 18px;
    }

    h4 {
        margin-top: 9px;
        font-weight: 350;
        font-size: 20px;
    }
`;
const IntroImg = styled.img`
    width: 712px;
    height: 491px;
    object-fit: cover;
`;

const ScrollIcon = styled.img`
    width: 44px;
    height: 22px;
    margin: 0 auto;
`;

const ScrollWrapper = styled.div`
    margin-top: 163px;
    display: flex;
    justify-content: center;
`;

const StoryWrapper = styled.div`
    width: 1212px;
    height: 100vh;

    margin: 0 auto;

    margin-top: 249px;
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    h1 {
        font-weight: 900;
        font-size: 40px;
        line-height: 58px;
    }
    margin-bottom: 80px;
`;
