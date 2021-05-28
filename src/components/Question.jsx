import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Form, Button, Radio, Space, Typography, Avatar, Divider, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { UserOutlined, CheckOutlined } from '@ant-design/icons';
import styled from 'styled-components'

const { Meta } = Card
const { Title } = Typography

const StyledDivider = styled(Divider)`
    height: 100%;
`

const Question = (props) => {
    const { answered, question, user } = useSelector(state => {
        const { qid } = useParams()

        const authedUser = state.authedUser
        const question = state.questions[qid]
        const user = state.users[question.author]

        const answered = question.optionOne.votes.includes(authedUser) || 
                         question.optionTwo.votes.includes(authedUser)

        return {
            answered,
            question,
            user
        }
    })

    console.log(answered)

    const submitAnswer = ( option ) => {
        console.log(option)
    }
    
    return (
        <Card bordered={true} hoverable={true}>
            <Row>
                <Col span={7}>
                    <Meta
                        avatar={
                            <Avatar
                                size={{ xs: 40, sm: 100, md: 150, lg: 200, xl: 200, xxl: 200 }}
                                icon={<UserOutlined />}
                                src={user.avatarURL}
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
                <Col span={16}>
                    <Row>
                        <Title level={3}>
                            {user.name}
                        </Title>
                    </Row>
                    {
                        answered 
                        ? <AnsweredQuestion />
                        : <UnansweredQuestion question={question} submitAnswer={submitAnswer} />
                    }
                </Col>
            </Row>
        </Card>
    )
}

const AnsweredQuestion = (props) => {
    return (
        <div>
            Answered
        </div>
    )
}

const UnansweredQuestion = (props) => {
    const [selected, selectOption] = useState(null)

    const { question } = props;

    return (
        <Radio.Group 
            style={{width:'100%'}} 
            value={selected}
            onChange={(e) => selectOption(e.target.value)}
        >
            <Space direction="vertical" style={{width: '100%'}}>
                <Row >
                    <Radio.Button value="a" style={{width:'100%'}}>
                        {question.optionOne.text} {selected === 'a' ? <CheckOutlined /> : null}
                    </Radio.Button>
                </Row>
                <Row>
                    <Radio.Button value="b" style={{width: '100%'}}>
                        {question.optionTwo.text} {selected === 'b' ? <CheckOutlined /> : null}
                    </Radio.Button>
                </Row>
                <Row>
                    <Button 
                        style={{margin: 'auto', width: '50%'}}
                        type="primary"
                        disabled={selected === null}
                        onClick={() => props.submitAnswer(selected)}
                    >
                        Submit
                    </Button>
                </Row>
            </Space>
        </Radio.Group>
    );
}

export default Question;
