import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from './TodoContext';

const TodoListBlock = styled.div`
    flex : 1;
    padding : 20px 32px;
    padding-bottom : 48px;
    overflow-y: auto; /* y축길이보다 내용이 길어질 경우 자동으로 스크롤바 생성 */
    // background: gray; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;
// function countUndoneTodos(Todos) {
//     console.log("활성 사용자수 세는 방법");
//     return Todos.filter(Todo => !Todo.done).length;
//   }
// const count = useMemo(() => countUndoneTodos(Todos), [Todos]);

function TodoList() {
    const todos = useTodoState();

    return (
        <TodoListBlock>
            {todos.map(todo => (
                <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                done={todo.done}
                />
            ))}
        </TodoListBlock>
    )
        
}

export default TodoList;