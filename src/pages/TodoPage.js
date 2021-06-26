import './TodoPage.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from '../components/TodoTemplate';
import TodoHead from '../components/TodoHead';
import TodoList from '../components/TodoList';
import TodoCreate from '../components/TodoCreate';
import { TodoProvider } from '../components/TodoContext';

const Globalstyle = createGlobalStyle`
body{
  background : #e9ecef;

}
`;
const TodoPage = () => {
  return (
    <TodoProvider>
      <Globalstyle />
      <TodoTemplate>
        <TodoHead />          
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
    );
};

export default TodoPage;
