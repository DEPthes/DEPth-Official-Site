import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderWrapper>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={(status) =>
                            status.isActive ? 'isActive' : 'link'
                        }
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
                    >
                        CONTACT
                    </NavLink>
                </li>
            </ul>
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.div`
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
            > a {
                text-decoration: none;
                color: #ffffff;
            }
        }
    }

    .isActive {
        color: #ffffff;
    }

    .link {
        color: rgba(255, 255, 255, 0.67);
    }
`;
