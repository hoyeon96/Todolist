import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
// import React, {useState, useRef} from 'react';
import { TodoProvider } from './components/TodoContext';

const Globalstyle = createGlobalStyle`
body{
  background : #e9ecef;

}
`;

function App() {
  
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     textValue: '복습하기',
  //     done: true
  //   },
  //   {
  //     id: 2,
  //     textValue: '주석달기',
  //     done: true
  //   },
  //   {
  //     id: 3,
  //     textValue: '코드 해석 및 분석하기',
  //     done: false
  //   },
  //   {
  //     id: 4,
  //     textValue: '기능 추가로 구현해보기',
  //     done: false
  //   }
  // ]);

  // const onRemove = id => {
  //   console.log("리무브 실행");
  //   setTodos(todos.filter(todo => todo.id !== id));
  // };

  // const onToggle = id => {
  //   console.log("체크 상태 변경 실행");
  //   setTodos(
  //     todos.map(
  //       todo => todo.id === id?
  //       {...todo, done :!todo.done} : todo)); 
  // };

  // // Todo 추가 생성
  // const [NewTodoItem,setNewTodoItem] = useState({
  //   text:''
  // });

  // const {text} = NewTodoItem;
  // const onChange = e => {
  //   const {name, value} = e.target;
  //   setNewTodoItem({
  //     ...NewTodoItem,
  //     [name]:value
  //   });
  // };

  // const nextId = useRef(5);
  // const onCreate = e => {
  //   e.preventDefault(); // 새로고침 방지 ??? 이거하니까 해결
    
  //     setTodos([
  //       ...todos,
  //       { id: nextId.current, 
  //         textValue: text,
  //         done: false},
  //     ]);
  //   setNewTodoItem({
  //     text : ''
  //   });
  //   nextId.current += 1;
  // };

  
  // const undoneTasksCount = todos.filter(todo => !todo.done).length;

  return (
    <TodoProvider>
      <Globalstyle />
      <TodoTemplate>
        <TodoHead />
          {/* count = {undoneTasksCount} /> */}
          
        <TodoList />
          {/* todos = {todos}
          onRemove = {onRemove}
          onToggle = {onToggle} /> */}
        <TodoCreate />
          {/* text={text}
          onChange={onChange}
          onCreate={onCreate} /> */}
      </TodoTemplate>
    </TodoProvider>
    )
}

export default App;
