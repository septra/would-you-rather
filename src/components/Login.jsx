import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select, Card, Avatar, Button, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Option } = Select;

const Login = () => {

    const users = useSelector(state => state.users)
    const [selectedUser, changeSelectedUser] = useState({})

    return (
        <div>
            <Card
                style={{textAlign: 'center'}}
            >
                <Space direction="vertical">
                    <Avatar
                        size={{ xs: 40, sm: 40, md: 80, lg: 200, xl: 200, xxl: 200 }}
                        icon={<UserOutlined />}
                        src={selectedUser.avatarURL}
                    />
                    <Select
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={(e) => changeSelectedUser(users[e])}
                        style={{ width: '100%' }}
                    // onFocus={onFocus}
                    // onBlur={onBlur}
                    // onSearch={onSearch}
                    // filterOption={(input, option) =>
                    //     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    // }
                    >
                        {Object.values(users).map(user => (
                            <Option value={user.id}>{user.name}</Option>
                        ))}
                    </Select>
                    <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                        Login
                    </Button>
                </Space>
            </Card>
        </div>
    );
}

export default Login;
