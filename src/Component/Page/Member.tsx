import React from 'react';
import styled from 'styled-components';
import StoryBlock from '../Common/StoryBlock';

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
                <BoxWrapper>
                    <StoryBlock
                        img={'./image/story1.png'}
                        header1={'옛술의 전당은 '}
                        header2={'내 인생 최고의 프로젝다.'}
                        content={
                            '개발팀 인원 모두 개발에 있어서 1년 전과의 자신과 실력 차이가 얼마나 많이 나는지 체감할 수 있을 거에요. 프로젝트 경험이 처음이고, 언어를 사용해보는 것이 처음이신 분들도 많았는데 모두 생각보다 빠른 속도로 잘 따라와 줘서 정말 고마웠고, 저도 영감을 많이 받았습니다. 개발팀 너무 수고했어요!!!'
                        }
                        name={'강상원'}
                        department={'FrontEnd Developer'}
                        isLeft={true}
                    />
                    <StoryBlock
                        img={'./image/story1.png'}
                        header1={'옛술의 전당은 '}
                        header2={'내 인생 최고의 프로젝다.'}
                        content={
                            '개발팀 인원 모두 개발에 있어서 1년 전과의 자신과 실력 차이가 얼마나 많이 나는지 체감할 수 있을 거에요. 프로젝트 경험이 처음이고, 언어를 사용해보는 것이 처음이신 분들도 많았는데 모두 생각보다 빠른 속도로 잘 따라와 줘서 정말 고마웠고, 저도 영감을 많이 받았습니다. 개발팀 너무 수고했어요!!!'
                        }
                        name={'강상원'}
                        department={'FrontEnd Developer'}
                        isLeft={false}
                    />
                    <StoryBlock
                        img={'./image/story1.png'}
                        header1={'옛술의 전당은 '}
                        header2={'내 인생 최고의 프로젝다.'}
                        content={
                            '개발팀 인원 모두 개발에 있어서 1년 전과의 자신과 실력 차이가 얼마나 많이 나는지 체감할 수 있을 거에요. 프로젝트 경험이 처음이고, 언어를 사용해보는 것이 처음이신 분들도 많았는데 모두 생각보다 빠른 속도로 잘 따라와 줘서 정말 고마웠고, 저도 영감을 많이 받았습니다. 개발팀 너무 수고했어요!!!'
                        }
                        name={'강상원'}
                        department={'FrontEnd Developer'}
                        isLeft={true}
                    />
                    <StoryBlock
                        img={'./image/story1.png'}
                        header1={'옛술의 전당은 '}
                        header2={'내 인생 최고의 프로젝다.'}
                        content={
                            '개발팀 인원 모두 개발에 있어서 1년 전과의 자신과 실력 차이가 얼마나 많이 나는지 체감할 수 있을 거에요. 프로젝트 경험이 처음이고, 언어를 사용해보는 것이 처음이신 분들도 많았는데 모두 생각보다 빠른 속도로 잘 따라와 줘서 정말 고마웠고, 저도 영감을 많이 받았습니다. 개발팀 너무 수고했어요!!!'
                        }
                        name={'강상원'}
                        department={'FrontEnd Developer'}
                        isLeft={false}
                    />
                </BoxWrapper>
            </StoryWrapper>
        </Inner>
    );
};

export default Member;

const Inner = styled.div`
    width: 100%;
    height: 100%;
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

const BoxWrapper = styled.div``;
