import React from 'react';
import { Form, Input, Button, Card, Divider } from 'antd';
import styled from 'styled-components'

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
    padding-bottom: 10px
`

const NewQuestion = () => {
    return (
        <Card title="Create New Question" bordered={true}>
            <Form size="middle">
                <Div>
                    Would you rather ...
                </Div>
                <Form.Item>
                    <Input placeholder="Enter Option 1 text" />
                </Form.Item>
                <Divider plain>Or</Divider>
                <Form.Item>
                    <Input placeholder="Enter Option 2 text" />
                </Form.Item>
                <Form.Item>
                    <StyledButton type="primary">Submit</StyledButton>
                </Form.Item>
            </Form>
        </Card>
    );
}

export default NewQuestion;
