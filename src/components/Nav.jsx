import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, Avatar } from 'antd';
import styled from 'styled-components'
import 'antd/dist/antd.css'
import { logoutUser } from '../actions/authedUser';
import { UserOutlined } from '@ant-design/icons';

const StyledMenu = styled(Menu)`
  text-align: center;

`

// TODO: Set Active menu item based on url that is directly accessed.

export default function Nav() {
    const { authedUser, users } = useSelector(state => ({
        authedUser: state.authedUser,
        users: state.users
    }))
    const dispatch = useDispatch()
    const history = useHistory()
    const handleLogout = () => {
        dispatch(logoutUser())
        history.push('/login')
    }

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
            { authedUser &&
                <Menu.SubMenu
                    title={`Hi, ${authedUser && users[authedUser].name}`}
                    style={{ position: 'absolute', right: 0 }}
                    disabled={authedUser === null}
                    icon={
                        <span>
                            <Avatar 
                                icon={<UserOutlined />} 
                                src={`${users[authedUser].avatarURL}`} 
                                size={'large'}
                            />
                        </span>
                    }
                >
                    <Menu.Item onClick={() => handleLogout()}>
                        Logout
                    </Menu.Item>
                </Menu.SubMenu>
            }
        </StyledMenu>
    )
}