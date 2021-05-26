import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select, Card, Avatar, Button, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

const { Option } = Select;

const Login = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const [selectedUser, changeSelectedUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)

    const handleLogin = (id) => {
        dispatch(setAuthedUser(id))
        setLoggedIn(true)
    }

    return loggedIn
        ? (<Redirect to='/' />)
        : (
        <div>
            <Card
                style={{ textAlign: 'center' }}
            >
                <Space direction="vertical">
                    <Avatar
                        size={{ xs: 40, sm: 40, md: 80, lg: 200, xl: 200, xxl: 200 }}
                        icon={<UserOutlined />}
                        src={selectedUser.avatarURL}
                    />
                    <Select
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={(e) => changeSelectedUser(users[e])}
                        style={{ width: '100%' }}
                    >
                        {Object.values(users).map(user => (
                            <Option key={user.id} value={user.id}>{user.name}</Option>
                        ))}
                    </Select>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: '100%' }}
                        disabled={selectedUser.id === undefined}
                        onClick={() => handleLogin(selectedUser.id)}
                    >
                        Login
                    </Button>
                </Space>
            </Card>
        </div>
    );
}

export default Login;
