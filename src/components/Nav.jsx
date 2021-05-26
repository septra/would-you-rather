import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Menu } from 'antd';
import styled from 'styled-components'
import 'antd/dist/antd.css'

const StyledMenu = styled(Menu)`
  text-align: center;

  /* &:hover {
    background-color: #17ff1722;
  } */
`

// TODO: Set Active menu item based on url that is directly accessed.

export default function Nav() {
    const authedUser = useSelector(state => state.authedUser)
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
            {authedUser &&
            <Menu.Item key="4">
                <NavLink to='/logout'>
                    Logout 
                </NavLink>
            </Menu.Item>}
        </StyledMenu>
    )
}