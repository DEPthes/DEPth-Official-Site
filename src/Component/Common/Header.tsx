import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
    const [isShow, setIsShow] = useState(true);
    const showHandler = () => {
        setIsShow(!isShow);
    };
    const isBigScreen = useMediaQuery({ query: '(min-width: 700px)' });
    return (
        <HeaderWrapper>
            {isShow || isBigScreen ? (
                <ShownHeader>
                    <HeaderTop>
                        <p>로고</p>
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={showHandler}
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

const HeaderWrapper = styled.div``;

const ShownHeader = styled.div`
    width: 100%;
    margin-top: 3.5rem;
    font-size: 2.4rem;
    z-index: 999;
    position: fixed;

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
        width: 70%;

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
        p {
            margin-left: 4.3rem;
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
