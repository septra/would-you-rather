import React from 'react';
import { Card, Avatar, Tabs, List, Divider } from 'antd';
import styled from 'styled-components'
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

const StyledCard = styled(Card)`
`

const StyledDivider = styled(Divider)`
    height: 10vh;
`

const StyledAvatar = (props) => {
    return (
        <div>
            <Avatar {...props}></Avatar>
            <StyledDivider type="vertical" />
        </div>
    )
}

const { TabPane } = Tabs;

const Poll = (props) => {
    const { questions, authedUserID, answered_questions, unanswered_questions } = useSelector(
        state => {
            const authedUserID = "johndoe"
            const all_question_ids = Object.keys(state.questions)
            const answered_questions = Object.keys(state.users[authedUserID].answers)
            const unanswered_questions = all_question_ids.filter(function(e) {
                return this.indexOf(e) < 0
            }, answered_questions)

            return {
                questions: state.questions,
                authedUserID,
                answered_questions,
                unanswered_questions
            }
        }
    )

    return (
        <div>
            <Tabs type="card" size="default" centered={true}>
                <TabPane tab={"Unanswered Questions"} key={1}>
                    <QuestionList 
                        title={"Unanswered Questions"} 
                        questions={unanswered_questions.map((id) => (
                            questions[id]
                        ))}
                    />
                </TabPane>
                <TabPane tab={"Answered Questions"} key={2}>
                    <QuestionList 
                        title={"Answered Questions"} 
                        questions={answered_questions.map((id) => (
                            questions[id]
                        ))}
                    />
                </TabPane>
            </Tabs>
        </div>
    );

}

function QuestionList(props) {
    return (
      <div style={{ padding: '20px 20px' }}>
        <StyledCard title={props.title} bordered={true} hoverable={true}>
            <List 
                itemLayout="vertical"
                dataSource={props.questions}
                renderItem={(question) => (
                    <Question question={question}/>
                )}
            />
        </StyledCard>
      </div>
    )
}

function Question(props) {
    return (
        <List.Item>
            <List.Item.Meta
                avatar={<StyledAvatar size={64} icon={<UserOutlined />} src={''} />}
                title={`${props.question.author} asks`}
                description={`Would you rather ${props.question.optionOne.text} or ${props.question.optionTwo.text}?`}
             />
        </List.Item>
    )
}

export default Poll