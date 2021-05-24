import React from 'react';
import { Card, Avatar, Tabs, List } from 'antd';
import styled from 'styled-components'

const StyledCard = styled(Card)`
`
const { TabPane } = Tabs;

const Poll = () => {
    const answeredQs = [
        {id:1, text:"Would you rather answer 1??"},
        {id:2, text:"Would you rather answer 2??"},
        {id:3, text:"Would you rather answer 3??"}
    ]

    const unansweredQs = [
        {id:1, text:"Would you rather unanswer 1??"},
        {id:2, text:"Would you rather unanswer 2??"},
        {id:3, text:"Would you rather unanswer 3??"}
    ]

    const questions = {
        'Unanswered': unansweredQs,
        'Answered': answeredQs,
    }

    return (
        <Tabs type="card" size="default" centered={true}>
            {Object.keys(questions).map(k => (
                <TabPane tab={k} key={k}>
                    <QuestionList title={k} questions={questions[k]} />
                </TabPane>
            ))}
        </Tabs>
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
                    <Question id={question.id} text={question.text} />
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
                avatar={<Avatar src={''} />}
                title={'USER asks'} 
                description={props.text} 
             />
        </List.Item>
    )
}


export default Poll;
