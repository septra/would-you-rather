import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Typography, Avatar, Divider, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components'
import questions from '../reducers/questions';

const { Meta } = Card
const { Title } = Typography

const StyledDivider = styled(Divider)`
    height: 100%;
`

const Question = (props) => {
    const { question, user } = useSelector(state => {
        const { qid } = useParams()
        const question = state.questions[qid]
        const user = state.users[question.author]

        const answered = question.optionOne.votes.includes(authedUser) || 
                         question.optionTwo.votes.includes(authedUser)

        return {
            question,
            user
        }
    })

    return (
        <Card bordered={true} hoverable={true}>
            <Row>
                <Col span={4}>
                    <Meta
                        avatar={
                            <Avatar 
                                size={{ xs: 40, sm: 40, md: 80, lg: 100, xl: 100, xxl: 100 }}
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
                <Col span={12}>
                    <Row>
                        <Title level={3}>
                            {user.name}
                        </Title>
                    </Row>
                    <Row>
                        <Col >
                            <span>{question.optionOne.text}</span>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col >
                            <span>{question.optionTwo.text}</span>
                        </Col>
                    </Row>
                </Col>
                <Col span={1}>
                    <StyledDivider type="vertical" />
                </Col>
                {/* <Col span={6}>
                </Col> */}
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
