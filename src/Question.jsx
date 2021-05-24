import React from 'react';
import { useParams } from 'react-router-dom';

const Question = (props) => {
    const { id} = useParams()
    return (
        <div>
            {console.log(id)}
            Question: {id}
        </div>
    );
}

export default Question;
