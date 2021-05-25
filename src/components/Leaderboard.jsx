import React from 'react';
import { Card, Avatar, Typography, List, Divider, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { UserOutlined } from '@ant-design/icons';

const StyledDivider = styled(Divider)`
    height: 100%;
`
const Pill = styled.div`
    color: black;
    background-color: #43c44355;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    text-align: center;
    line-height:50px;
    font-weight:1000;
    justify-content: center;
    margin: auto;
`

const { Meta } = Card
const { Title } = Typography

const UserInfo = (props) => {
    const answeredCount = Object.keys(props.user.answers).length
    const askedCount = props.user.questions.length
    return (
        <Card bordered={true} hoverable={true}>
            <Row gutter={16}>
                <Col span={4}>
                    <Meta
                        avatar={<Avatar size={80} icon={<UserOutlined />} src={props.user.avatarURL} />}
                    />
                </Col>
                <Col span={1}>
                    <StyledDivider type="vertical" />
                </Col>
                <Col span={12}>
                    <Row>
                        <Title level={3}>
                            {props.user.name}
                        </Title>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <span>Answered Questions</span>
                        </Col>
                        <Col span={8} offset={8}>
                            <span>{answeredCount}</span>
                        </Col>
                    </Row>
                    <Divider />
                    <Row justify="center">
                        <Col span={8}>
                            <span >Created Questions</span>
                        </Col>
                        <Col span={8} offset={8}>
                            <span>{askedCount}</span>
                        </Col>
                    </Row>
                </Col>
                <Col span={1}>
                    <StyledDivider type="vertical" />
                </Col>
                <Col span={6}>
                    <Card type="inner" bordered title="Score">
                        <Pill>
                            {answeredCount + askedCount}
                        </Pill> 
                    </Card>
                </Col>
            </Row>
        </Card>
    )
}

const Leaderboard = () => {
    const { users } = useSelector(state => ({
        users: Object.values(state.users)
    }))

    return (
        <div>
            <List
            dataSource={users}
            renderItem={(user) => (
                <List.Item>
                    <UserInfo user={user} />
                </List.Item>
            )}
            />
        </div>
    );
}

export default Leaderboard;

