import React from 'react';
import styled from 'styled-components';
import SEOMetaTag from '../../SEOMetaTag';
import StoryBlock from '../Common/StoryBlock';

const Member = () => {
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
                            <h3>DEPth</h3>의 팀워크
                        </h2>
                        <h4>
                            DEPth 1기는 지속적인 소통을 통해 극강의 팀워크를
                            만들어냈고, <br />
                            DEPth 2기는 체계를 만들어 원활한 팀워크를 만들기
                            위해 <br />
                            꾸준한 노력을 했습니다.
                            <br />
                            이러한 과정으로 DEPth는 함께 성장했습니다.
                        </h4>
                    </IntroWriting>
                    <IntroImg src="./image/MemberImg.png" alt="MemberImg" />
                </IntroWrapper>
                <ScrollWrapper>
                    <ScrollIcon src="./image/scrollIcon.png" alt="ScrollIcon" />
                </ScrollWrapper>
                <StoryWrapper>
                    <Header>
                        <h1>DEPth 1기가 말해주는 경험담</h1>
                    </Header>
                    <BoxWrapper>
                        <StoryBlock
                            img={'./image/story/story3.png'}
                            header={'기획자로서의 첫 발걸음 '}
                            content={
                                '기획자로서의 첫 발걸음을 내딛을 수 있는 소중한 경험이었습니다. 내가 기획자를 할 수 있을까? 기획이라는 직무는 어떤걸까? 하는 막연한 생각들이 뎁스 활동을 통해 구체화 되었고, 제 진로에 대한 확신을 가지게 된 계기가 되었습니다. 진로에 대한 애정을 가지고 열심히 나아가는 사람들과 함께 프로젝트를 진행한다는 것은 정말 큰 행운이에요 ! 뎁스 1기 고생 많았고, 앞으로의 뎁스도 응원합니다'
                            }
                            name={'이여원'}
                            department={'Product Manager'}
                            isLeft={true}
                        />
                        <StoryBlock
                            img={'./image/story/story2.png'}
                            header={'협업 경험의 중요성을 깨닫다'}
                            content={
                                'pm, 디자이너, 프론트, 백엔드 각 파트를 나눠 진행한 제대로된 첫 협업 프로젝트였습니다. 처음엔 개발 혼자 하는거랑 다를게 있겠냐고 생각했지만, 여기저기서 왜 협업 경험을 중요하게 여기는지 몸소 체험할 수 있었습니다. 개발 역량에 대해서도 또 인간적으로도 많이 성장할 수 있는 계기가 된 뎁스 였습니다. 많이 배우고 좋은 사람도 많이 만날 수 있게 해준 뎁스와 모든 팀원들에게 1년 동안 모두 수고 많았고 고맙다고 말하고 싶네요. 뎁스에서의 경험과 배운 것들을 바탕으로 더욱 성장하고 발전할 수 있는 계기가 되었으면 좋겠습니다. 그럼 다시 만나는 그날까지 안녕~~ thank you'
                            }
                            name={'김해찬'}
                            department={'Backend Developer'}
                            isLeft={false}
                        />
                        <StoryBlock
                            img={'./image/story/storyKa.png'}
                            header={'개발 스터디를 통해 성장한 나 '}
                            content={
                                'DEPth 1기에 프론트엔드 개발자로 참여하면서 즐거운 추억과 값진 경험을 얻을 수 있었습니다! 다양한 직군의 팀원들과의 협업을 통해 협업 및 커뮤니케이션 능력을 향상시킬 수 있었고, 개발 스터디를 하면서 많은 것을 배우고 함께 성장할 수 있는 좋은 기회를 얻을 수 있었습니다. 소중한 경험을 할 수 있게 만들어주셔서 감사합니다!'
                            }
                            name={'이가은'}
                            department={'FrontEnd Developer'}
                            isLeft={true}
                        />
                        <StoryBlock
                            img={'./image/story/story4.png'}
                            header={'미래를 위한 원동력이 된 1년'}
                            content={
                                'DEPth 1기 기획부원 문규원으로 참여한 1년은 제게 앞으로 미래를 위해 열심히 살 수 있던 원동력이 되었던 한 해였습니다. 전공관련 취업에 대해 막연한 생각만 들었던 때에 배운 전공지식을 활용하여 분석하고 직접 서비스를 기획함으로써 유의미한 학교 생활을 보냈다는 생각이듭니다. 특히, 나와 다른 분야의 사람들과 협업을 통해 하나의 결과물을 만들어내는 과정에서 많은 경험을 통해 한단계 성장한 저를 만날 수 있었습니다. 앞으로의 DEPth와 함께 더더욱 꾸준한 성장을 이뤄나가고싶습니다 ! 뎁쓰 모두 고생했어요 : )'
                            }
                            name={'문규원'}
                            department={'Product Manager'}
                            isLeft={false}
                        />
                        <StoryBlock
                            img={'./image/story/story5.png'}
                            header={'열정으로 불태웠던 뎁스  '}
                            content={
                                '저는 1기 기획부로 참여했습니다. 기획뿐만 아니라 경영에 대한 배경지식이 없었음에도 불구하고 무언가를 해 보자라는 마음 하나만으로 신청하였습니다. 활동을 하면서 개인의 역량도 물론 중요하지만 팀으로 협업하는 것이기 때문에 협동력 또한 중요하다는 것을 느낄 수 있었습니다. 프로젝트를 통해 협동력을 배웠습니다. 그리고, 뎁스 내에서 이루어지는 스터디를 통해 개인의 역량을 키울 수 있는 기회가 있습니다. 이처럼 열정 하나만 있다면 성장하는 자신의 모습을 볼 수 있을 겁니다!'
                            }
                            name={'김보은'}
                            department={'Product Manager'}
                            isLeft={true}
                        />
                        <StoryBlock
                            img={'./image/story/story6.png'}
                            header={'프로젝트 성공의 키, 협업'}
                            content={
                                '협업은 프로젝트의 성공에 매우 중요한 역할을 한다고 깨달았습니다. 또한, 뎁스에서 기획자로 일하며 기획 프로세스를 함께 경험하고 고민하며, 기획의 역할이 얼마나 중요한지 깨달았으며 디자인과 개발에 대한 지식도 함께 알아가는 등 좋은 경험을 많이 할 수 있었습니다. 무엇보다 뎁스 부원들 모두가 한 마음으로 열심히 참여했기에 프로젝트의 성공을 이끌어낼 수 있었다고 생각합니다.'
                            }
                            name={'박상민'}
                            department={'Product Manager'}
                            isLeft={false}
                        />
                        <StoryBlock
                            img={'./image/story/story7.png'}
                            header={'놀라지 않을 수 없었다'}
                            content={
                                "뎁스1기에 가입했을때만 하더라도 웹 프로그래밍의 알파벳인 HTML조차 익숙하지 않았다. 하지만 뛰어난 실력의 팀 리더 상원이를 비룻해 다양한 경험을 가진 개발자분들과 함께한 스터디를 통해 빠르게 성장할 수 있었다. 물론 그 과정에서 피나는 노력이 있었지만, HTML 작성도 힘겨워 했던 내가 어느새 리액트로 '옛술의 전당' 마이페이지를 만들고 있다는 사실에 놀라지 않을 수 없었다"
                            }
                            name={'김희윤'}
                            department={'FrontEnd Developer'}
                            isLeft={true}
                        />
                        <StoryBlock
                            img={'./image/story/story8.png'}
                            header={'경험의 중요성을 알게 된 1년'}
                            content={
                                'DEPth 2기 기획파트원으로 참여해 스터디, MVP project와 main project까지 진행하며 많은 것을 배웠습니다. 스터디에서 배운 것으로 프로젝트드를 기획할 수 있었고 좋은 팀원들을 만나 즐겁게 2기 활동을 마무리 할 수 있었습니다. 프로젝트를 기획하고 배포, 그리고 유지보수까지 하는 경험을 DEPth에서 하며 개인 역량을 늘리는 것은 물론이고 디자인과 개발에 대해서도 조금씩 알아가며 성장할 수 있었고 사람으로서 배운 것도 많았던 것 같습니다. DEPth 2기에 지원한 일이 2023년에 한 일 중 가장 잘한 일이라고 생각할정도로 저에게는 매우 소중하고 중요한 1년이었습니다! DEPth 짱'
                            }
                            name={'조민경'}
                            department={'Product Manager'}
                            isLeft={false}
                        />
                        <StoryBlock
                            img={'./image/story/story9.png'}
                            header={'더 넓게 확장된 시야'}
                            content={
                                '뎁스 2기 디자인 파트로 참여하며 뼈가 되고 살이 되는 많은 것들을 배운 것 같습니다. 배운 것들을 바로 mvp프로젝트와 메인 프로젝트에서 다뤄보면서 실력을 그치지 않고 키워갈 수 있었습니다. 프로젝트를 통해서 디자인 뿐 아니라 개발팀, 기획팀과 함께 하면서 협업의 중요성에 대해서도 더욱 깨닫게 되었습니다. 뎁스를 통해 서비스를 바라보는 시야가 넓어질 수 있었던 것 같습니다. nice~chu~'
                            }
                            name={'김민주'}
                            department={'Designer'}
                            isLeft={true}
                        />
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
    @media (max-width: 700px) {
        padding-top: 23.3rem;
    }
`;
const IntroWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;
const IntroWriting = styled.div`
    width: 59.5rem;
    height: 38.6rem;
    font-family: 'Noto Sans KR';
    h1 {
        font-size: 2rem;

        font-weight: 500;
    }

    h2 {
        font-weight: 700;
        font-size: 6rem;

        display: flex;
    }

    h3 {
        font-weight: 250;
        font-size: 6rem;

        margin-right: 1.8rem;
    }

    h4 {
        margin-top: 5rem;
        font-weight: 200;
        font-size: 2rem;
    }
`;
const IntroImg = styled.img`
    width: 71.2rem;
    height: 49.1rem;
    object-fit: cover;
    @media (max-width: 700px) {
        margin-top: 5rem;
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
    width: 121.2rem;
    margin: 0 auto;
    margin-top: 24.9rem;
    padding-bottom: 40rem;
    display: flex;
    flex-direction: column;
    @media (max-width: 700px) {
        width: 60rem;
        align-items: flex-start;
    }
`;

const Header = styled.div`
    h1 {
        font-weight: 700;
        font-size: 4rem;
        line-height: 5.8rem;
    }
    margin-bottom: 15rem;
`;

const BoxWrapper = styled.div``;
