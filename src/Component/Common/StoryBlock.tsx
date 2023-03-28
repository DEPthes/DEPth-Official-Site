import React from 'react';
import styled from 'styled-components';

const StoryBlock = () => {
    return (
        <BlockWrapper>
            <BlockMent>
                <div>이미지</div>
                <BlockMentHeader>
                    <h1>제목</h1>
                </BlockMentHeader>
                <h2>dd</h2>
                <BlockMentMember>
                    <h3>김현빈</h3>
                    <h4>FrontEnd Developer</h4>
                </BlockMentMember>
            </BlockMent>
            <BlockImg src="./image/MemberImg.png" alt="blockImg" />
        </BlockWrapper>
    );
};

export default StoryBlock;

const BlockWrapper = styled.div``;
const BlockMent = styled.div``;
const BlockMentHeader = styled.div``;
const BlockMentMember = styled.div``;

const BlockImg = styled.img``;
