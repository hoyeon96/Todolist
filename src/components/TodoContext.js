import React, {useReducer, createContext, useContext, useRef} from 'react';

const initialTodos = [
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
  ];

function todoReducer(state,action) {
    switch(action.type){
        case 'CREATE': 
            return state.concat(action.todo);
        case 'TOGGLE':
            console.log("체크 상태 변경 실행");
            return state.map(
                todo => todo.id === action.id?
                {...todo, done :!todo.done} : todo
                ); 
        case 'REMOVE':
            console.log("리무브 실행");
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children}) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
          <TodoNextIdContext.Provider value={nextId}>
                {children}
          </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}
  
export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}