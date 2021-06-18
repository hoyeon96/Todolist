import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import React, {useState, useRef} from 'react';

const Globalstyle = createGlobalStyle`
body{
  background : #e9ecef;

}
`;

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '복습하기',
      done: true
    },
    {
      id: 2,
      text: '주석달기',
      done: true
    },
    {
      id: 3,
      text: '코드 해석 및 분석하기',
      done: false
    },
    {
      id: 4,
      text: '기능 추가로 구현해보기',
      done: false
    }
  ]);

  const nextId = useRef(5);

  const addTodo = text => {
    setTodos([
      ...todos,
      {id: nextId.current, 
        Todo: text, 
        done: false},
    ]);
  };

  const onRemove = id => {
    console.log("리무브 실행");
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = id => {
    setTodos(
      todos.map(
        todo => todo.id === id?
        {...todo, done :!todo.done} : todo)); 
  };

  return (
    <>
    <Globalstyle />
    <TodoTemplate>
      <TodoHead />
      <TodoList 
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
      />
      <TodoCreate onAddTodo={addTodo}/>
    </TodoTemplate>
    </>
    )
}

export default App;
