import React, { useState } from 'react';
import { Form, Input, Button, Card, Divider } from 'antd';
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { addQuestion } from '../actions/questions';
import { Redirect, useHistory } from 'react-router';

const StyledButton = styled(Button)`
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    display: block;
    border-radius: 5px;
`

const Div = styled.div`
    font-weight: 700;
    line-height: 50px;
    padding-bottom: 10px;
`

const NewQuestion = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [optionOne, setOptionOne] = useState('')
    const [optionTwo, setOptionTwo] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addQuestion())
        history.push('/')
    }
    return (
        <Card title="Create New Question" bordered={true}>
            <Form size="middle">
                <Div>
                    Would you rather ...
                </Div>
                <Form.Item>
                    <Input 
                        id="optionOne" 
                        value={optionOne}
                        placeholder="Enter Option 1 text" 
                        onChange={e => setOptionOne(e.target.value)}
                    />
                </Form.Item>
                <Divider plain>Or</Divider>
                <Form.Item>
                    <Input 
                        id="optionTwo" 
                        value={optionTwo}
                        placeholder="Enter Option 2 text" 
                        onChange={e => setOptionTwo(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <StyledButton 
                        type="primary"
                        onClick={handleSubmit}
                    >
                        Submit
                    </StyledButton>
                </Form.Item>
            </Form>
        </Card>
    );
}

export default NewQuestion;
