import React from 'react';
import { Card, Col, Row } from 'antd';
import styled from 'styled-components'


const StyledCard = styled(Card)`
    border: 1px solid black;
`


const Poll = () => {
    return (
      <div style={{ padding: '20px 50px' }}>
        <Row gutter={8}>
            <Col span={12}>
                <StyledCard title="Unanswered" bordered={false}>
                    StyledCard content
                </StyledCard>
            </Col>
            <Col span={12}>
                <StyledCard title="Answered" bordered={false}>
                    StyledCard content
                </StyledCard>
            </Col>
        </Row>
      </div>
    );
}

export default Poll;
