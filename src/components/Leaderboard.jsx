import React from 'react';
import { Card, Avatar, Typography, List, Divider, Row, Col } from 'antd';
import styled from 'styled-components'
import { UserOutlined } from '@ant-design/icons';

const users = [
    {name: 'Sarah Edo', aq:7, uq:3},
    {name: 'Tyled Mcginnis', aq:3, uq:2},
    {name: 'John Doe', aq:3, uq:2}
]

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
    return (
        <Card bordered={true} hoverable={true}>
            <Row gutter={16}>
                <Col span={4}>
                    <Meta
                        avatar={<Avatar size={80} icon={<UserOutlined />} src={''} />}
                    />
                </Col>
                <Col span={1}>
                    <StyledDivider type="vertical" />
                </Col>
                <Col span={12}>
                    <Row>
                        <Title level={3}>
                            {props.name}
                        </Title>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <span>Answered Questions</span>
                        </Col>
                        <Col span={8} offset={8}>
                            <span>{props.aq}</span>
                        </Col>
                    </Row>
                    <Divider />
                    <Row justify="center">
                        <Col span={8}>
                            <span style={{"text-align":"right"}}>Unanswered Questions</span>
                        </Col>
                        <Col span={8} offset={8}>
                            <span>{props.uq}</span>
                        </Col>
                    </Row>
                </Col>
                <Col span={1}>
                    <StyledDivider type="vertical" />
                </Col>
                <Col span={6}>
                    <Card type="inner" bordered title="Score">
                        <Pill>
                            {props.aq + props.uq}
                        </Pill> 
                    </Card>
                </Col>
            </Row>
        </Card>
    )
}

const Leaderboard = () => {
    return (
        <div>
            <List
                itemLayout="vertical"
                dataSource={users}
                renderItem={(user) => (
                    <List.Item>
                        <UserInfo {...user} />
                    </List.Item>
                )}
            />
        </div>
    );
}

export default Leaderboard;

