import React from 'react';
import { Card, Avatar, Typography, List, Divider, Row, Col, AutoComplete } from 'antd';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { UserOutlined } from '@ant-design/icons';

const StyledDivider = styled(Divider)`
    height: 100%;
`

const { Meta } = Card
const { Title } = Typography

const Pill = styled.p`
    height: 50px;
    width: 50px;
    color: #11791a;
    border-radius: 50%;
    display: flex;
    text-align: center;
    font-size: 40px;
    font-weight: 300;
    justify-content: center;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`

const UserInfo = (props) => {
    const answeredCount = Object.keys(props.user.answers).length
    const askedCount = props.user.questions.length
    return (
        <Card bordered={true} hoverable={true}>
            <Row>
                <Col span={4}>
                    <Meta
                        avatar={
                            <Avatar 
                                size={{ xs: 40, sm: 40, md: 80, lg: 100, xl: 100, xxl: 100 }}
                                icon={<UserOutlined />} 
                                src={props.user.avatarURL} 
                            />
                        }
                        style={{
                            margin: 0,
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            'msTransform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                        }}
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
                    <Card 
                        type="inner" 
                        bordered 
                        title="Score"
                        headStyle={{'textAlign':'center'}}
                        style={{
                            height: '100%',
                        }}
                    >
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
            grid={{ gutter: 2, column: 1 }}
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

