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
    height: 44.5rem;

    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-bottom: 27.5rem;
`;
const BlockMent = styled.div`
    img {
        object-fit: cover;
        margin-bottom: 2.3rem;
    }
`;
const BlockMentHeader = styled.div`
    h1 {
        font-weight: 600;
        font-size: 3.3rem;
    }

    margin-bottom: 2.3rem;
`;

const BlockMentContent = styled.div`
    width: 51.6rem;

    margin-bottom: 4.9rem;

    h2 {
        font-weight: 300;
        font-size: 1.84168rem;
        color: #c6c6c6;
        line-height: 3rem;
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
        font-size: 1.75398rem;
        line-height: 2.5rem;
        /* identical to box height */

        color: #ffffff;

        margin-right: 1.5rem;
    }

    h4 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 500;
        font-size: 1.40318rem;
        line-height: 2rem;
        /* identical to box height */

        color: rgba(255, 255, 255, 0.55);
    }
`;

const BlockImg = styled.img`
    width: 60.6rem;
    height: 44.288rem;
`;
