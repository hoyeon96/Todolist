import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';

const TodoHeadBlock = styled.div`
    display: flex;
    padding-top : 48px;
    padding-left : 32px;
    padding-right : 32px;
    padding-bottom : 24px;
    border-bottom : 1px solid #e9ecef;
    text-align : center;
    align-items: center;
    h1 {
        margin : 0;
        font-size : 36px;
        color : #343a40;
    }
    .day {
        margin-top : 4px;
        color : #868e96;
        font-size : 21px;
    }
    .tasks-left {
        color : #20c997;
        font-size : 18px;
        margin-top : 40px;
        font-weight : bold;
    }
`;

const ButtonBlock = styled.div`
    width: 32px;
    height: 32px;
    padding: 24px;
    font-size: 32px;
    color: #20c997;
    cursor: pointer;
`;

function TodoHead(){
    const todos = useTodoState();
    console.log(todos);
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
    const count = todos.filter(todo => !todo.done).length;
    return(
        <TodoHeadBlock>
            <ButtonBlock>
                <AiOutlineDoubleLeft />
            </ButtonBlock>
            <div>
                <h1> {dateString} </h1>
                <div className="day"> {dayName} </div>
                <div className="tasks-left"> 할 일 {count}개 남음 </div>
            </div>
            <ButtonBlock>
                <AiOutlineDoubleRight />
            </ButtonBlock>
        </TodoHeadBlock>
    )
}

export default TodoHead;