import React from 'react';
import styled from 'styled-components';

interface storyType {
    img: string;
    header: string;
    content: string;
    name: string;
    department: string;
    isLeft: boolean;
}

const StoryBlock = (p: storyType) => {
    return (
        <BlockWrapper>
            {p.isLeft ? (
                <>
                    <BlockMent>
                        <img src="./image/bigQuote.png" alt="bigQuote" />
                        <BlockMentHeader>
                            <h1>{p.header}</h1>
                        </BlockMentHeader>
                        <BlockMentContent>
                            <h2>{p.content}</h2>
                        </BlockMentContent>
                        <BlockMentMember>
                            <h3>{p.name}</h3>
                            <h4>{p.department}</h4>
                        </BlockMentMember>
                    </BlockMent>
                    <BlockImg src={p.img} alt="blockImg" />
                </>
            ) : (
                <>
                    <BlockImg src={p.img} alt="blockImg" />
                    <BlockMent>
                        <img src="./image/bigQuote.png" alt="bigQuote" />
                        <BlockMentHeader>
                            <h1>{p.header}</h1>
                        </BlockMentHeader>
                        <BlockMentContent>
                            <h2>{p.content}</h2>
                        </BlockMentContent>
                        <BlockMentMember>
                            <h3>{p.name}</h3>
                            <h4>{p.department}</h4>
                        </BlockMentMember>
                    </BlockMent>
                </>
            )}
        </BlockWrapper>
    );
};

export default StoryBlock;

const BlockWrapper = styled.div`
    width: 100%;
    height: 445px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-bottom: 275px;
`;
const BlockMent = styled.div`
    img {
        object-fit: cover;
        margin-bottom: 23px;
    }
`;
const BlockMentHeader = styled.div`
    h1 {
        font-weight: 600;
        font-size: 33px;
    }

    margin-bottom: 23px;
`;

const BlockMentContent = styled.div`
    width: 516px;

    margin-bottom: 49px;

    h2 {
        font-weight: 300;
        font-size: 18.4168px;
        color: #c6c6c6;
        line-height: 30px;
        /* or 162% */
    }
`;
const BlockMentMember = styled.div`
    display: flex;
    align-items: center;

    h3 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 500;
        font-size: 17.5398px;
        line-height: 25px;
        /* identical to box height */

        color: #ffffff;

        margin-right: 15px;
    }

    h4 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 500;
        font-size: 14.0318px;
        line-height: 20px;
        /* identical to box height */

        color: rgba(255, 255, 255, 0.55);
    }
`;

const BlockImg = styled.img`
    width: 606px;
    height: 442.88px;
`;
