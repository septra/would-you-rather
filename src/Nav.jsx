import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd';
import styled from 'styled-components'
import 'antd/dist/antd.css'

const StyledMenu = styled(Menu)`
  text-align: center;

  /* &:hover {
    background-color: #17ff1722;
  } */
`

export default function Nav() {
    return (
        <StyledMenu mode="horizontal">
            <Menu.Item key="1">
                <NavLink to='/' exact>
                    Home
                </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
                <NavLink to='/add' exact>
                    New Question
                </NavLink>
            </Menu.Item>
            <Menu.Item key="3">
                <NavLink to='/leaderboard' exact>
                    Leaderboard
                </NavLink>
            </Menu.Item>
            <Menu.Item key="5">
                <NavLink to='/user' exact>
                    Hello, User
                </NavLink>
            </Menu.Item>
            <Menu.Item key="6">
                <NavLink to='/logout'>
                    Logout
                </NavLink>
            </Menu.Item>
        </StyledMenu>
    )
}
