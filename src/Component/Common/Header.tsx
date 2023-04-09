import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
    const [isShow, setIsShow] = useState(false);

    const showHandler = () => {
        setIsShow(!isShow);
    };

    const isBigScreen = useMediaQuery({ query: '(min-width: 700px)' });

    return (
        <HeaderWrapper>
            {isShow || isBigScreen ? (
                <ShownHeader>
                    <HeaderTop>
                        <p>
                            <svg
                                width="120"
                                height="70"
                                viewBox="0 0 659 265"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g filter="url(#filter0_d_206_191)">
                                    <path
                                        d="M94.38 171.289H158.217C181.341 171.289 195.24 155.791 195.24 129.961C195.24 104.131 181.341 88.51 158.217 88.51H94.38V171.289ZM155.265 101.302C171.378 101.302 181.464 112.372 181.464 129.961C181.464 147.55 171.378 158.497 155.265 158.497H108.525V101.302H155.265ZM208.732 171.289H304.672V158.497H222.877V126.763H303.442V113.971H222.877V101.302H304.672V88.51H208.732V171.289ZM318.158 172.519H332.303V126.763H400.691C412.13 126.763 419.018 119.506 419.018 107.575C419.018 95.644 412.13 88.51 400.691 88.51H318.158V172.519ZM397.001 101.302C402.29 101.302 405.242 103.147 405.242 107.575C405.242 112.003 402.413 113.971 397.001 113.971H332.303V101.302H397.001ZM426.355 126.763H437.056V149.272C437.056 162.556 442.96 171.289 460.057 171.289H478.015V158.497H461.41C453.784 158.497 451.201 154.684 451.201 148.78V126.763H476.785V113.971H451.201V88.51H437.056V113.971H426.355V126.763ZM518.301 126.763H548.313C555.939 126.763 558.522 130.576 558.522 136.48V171.289H572.667V135.988C572.667 122.704 566.763 113.971 549.666 113.971H517.44C512.643 113.971 508.584 115.693 505.632 118.399V88.51H491.487V171.289H505.632V136.48C505.632 130.576 510.675 126.763 518.301 126.763Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_d_206_191"
                                        x="0.379883"
                                        y="0.51001"
                                        width="658.287"
                                        height="264.009"
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                    >
                                        <feFlood
                                            floodOpacity="0"
                                            result="BackgroundImageFix"
                                        />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feOffset dx="-4" dy="2" />
                                        <feGaussianBlur stdDeviation="45" />
                                        <feComposite
                                            in2="hardAlpha"
                                            operator="out"
                                        />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.57 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_206_191"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow_206_191"
                                            result="shape"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </p>
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => {
                                showHandler();
                            }}
                        >
                            <path
                                d="M9.5498 22.339L21.8499 10.0389"
                                stroke="white"
                                strokeWidth="1.28262"
                                strokeLinecap="round"
                            />
                            <path
                                d="M9.5498 10.0388L21.8499 22.3389"
                                stroke="white"
                                strokeWidth="1.28262"
                                strokeLinecap="round"
                            />
                        </svg>
                    </HeaderTop>

                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={(status) =>
                                    status.isActive ? 'isActive' : 'link'
                                }
                                onClick={showHandler}
                            >
                                ABOUT
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Project"
                                className={(status) =>
                                    status.isActive ? 'isActive' : 'link'
                                }
                                onClick={showHandler}
                            >
                                PROJECT
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Member"
                                className={(status) =>
                                    status.isActive ? 'isActive' : 'link'
                                }
                                onClick={showHandler}
                            >
                                MEMBER
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Contact"
                                className={(status) =>
                                    status.isActive ? 'isActive' : 'link'
                                }
                                onClick={showHandler}
                            >
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>
                </ShownHeader>
            ) : (
                <NonShownHeader>
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={showHandler}
                    >
                        <path
                            d="M12.6172 18.9852H35.2472"
                            stroke="white"
                            strokeWidth="1.50178"
                            strokeLinecap="round"
                        />
                        <path
                            d="M12.6172 33.0016H35.2472"
                            stroke="white"
                            strokeWidth="1.50178"
                            strokeLinecap="round"
                        />
                        <path
                            d="M12.6172 25.9933H35.2472"
                            stroke="white"
                            strokeWidth="1.50178"
                            strokeLinecap="round"
                        />
                    </svg>
                </NonShownHeader>
            )}
        </HeaderWrapper>
    );
};

export default Header;

const headerAnimation = keyframes`
    	0% {
		transform: translateX(100%);
	}
	100% {
		transform: translateX(0%);
	}
`;

const HeaderWrapper = styled.div``;

const ShownHeader = styled.div`
    width: 100%;
    padding-top: 3.5rem;
    font-size: 2.4rem;
    z-index: 999;
    position: fixed;
    font-family: 'GmarketSansMedium';
    height: 15.3rem;
    background: linear-gradient(
        180deg,
        #000000 13.02%,
        rgba(0, 0, 0, 0) 99.99%,
        rgba(255, 255, 255, 0) 100%
    );
    animation: ${headerAnimation} 0.8s ease-in-out;

    ul {
        display: flex;
        justify-content: center;
        list-style: none;
        > li {
            cursor: pointer;
            margin-left: 2.6rem;
            @media (max-width: 700px) {
                margin-left: 4.3rem;
            }
            > a {
                text-decoration: none;
                color: #ffffff;
            }
        }
        @media (max-width: 700px) {
            flex-direction: column;
        }
    }

    .isActive {
        color: #ffffff;
    }

    .link {
        color: rgba(255, 255, 255, 0.67);
    }
    svg {
        display: none;
        @media (max-width: 700px) {
            display: block;
        }
    }
    @media (max-width: 700px) {
        position: fixed;
        right: 0;
        width: 50%;

        height: 100%;
        margin-top: 0;
        transform: translateX(180);
        background: rgba(50, 50, 50, 0.49);
        backdrop-filter: blur(75.4271px);
        font-size: 3.33rem;
        font-size: 3.267rem;
        li {
            margin-bottom: 3.8rem;
        }
    }
`;

const HeaderTop = styled.div`
    display: none;
    @media (max-width: 700px) {
        display: flex;

        align-items: center;
        justify-content: space-between;
        margin-top: 10rem;
        svg {
            margin-right: 2.6rem;
        }

        margin-bottom: 7.1617rem;
    }
`;

const NonShownHeader = styled.div`
    display: flex;
    padding-top: 8.333rem;
    justify-content: flex-end;
    height: auto;
    position: fixed;
    width: 100%;
    z-index: 99999;
    svg {
        margin-right: 2rem;
    }
`;
