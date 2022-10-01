import React from 'react';
import { TodoType } from './models';
import CompletedTasks from "./components/CompletedTasks/CompletedTasks";
import Tasks from "./components/Tasks/Tasks";

const App: React.FC =() => {
  const [todos, setTodos] = React.useState<TodoType[]>([]);
  const [inputValue, setInputValue] = React.useState<string>('');
  const [todoId, setTodoId] = React.useState<number>(1);

  let addTodo = () => {

    if(inputValue?.length === 0) return alert('You must type at least one letter !'); 

    let todo:TodoType = {
        text: inputValue,
        completed: false,
        id: todoId,
    }
    
    setTodoId((prev:number) => prev + 1);
    setTodos((prev:TodoType[]) => [ todo, ...prev]);
    setInputValue('');        
    console.log(todo);
    
  }

  let onCompleted = (id:number) => {
    let newTodosList = todos.map((item:TodoType) => {
      if (item.id === id) {
        item.completed = !item.completed
        return item;
      }
      return item;
    })
    setTodos(newTodosList);
  }

  let onClose = (id:number) => {
    let newTodosList = todos.filter((item:TodoType) => item.id !== id);
    setTodos(newTodosList);
  }

  let onKeyDown = (e:React.KeyboardEvent) => {
    if (e.keyCode === 13) {
        addTodo();
    }
};

  return (
    <div className="bg-slate-200 h-full pt-10">
      <div className="bg-slate-400 max-w-[900px] h-[550px] rounded-xl mx-auto overflow-y-scroll">
        <h1 className='text-center text-[40px] pt-5 pb-5 text-white font-bold'>TypeScript TodoList tutorial</h1>
        <div className="flex justify-center pb-5">
          <input onKeyDown={(e) => onKeyDown(e)} value={inputValue} onChange={( e) => setInputValue(e.target.value)}  type="text" className='bg-slate-600 rounded-md p-2 w-[300px] text-white text-center' placeholder='Type your todo here !' />
          <button onClick={addTodo} className='bg-indigo-500 text-white ml-1  px-2 rounded-md hover:opacity-[0.7] active:opacity-[1] transition-all '>Add task </button>
        </div>
        <div className="px-10">
            <Tasks todos={todos} onCompleted={onCompleted} onClose={onClose}/>
            {todos.length > 0 ? 
            <CompletedTasks onCompleted={onCompleted} todos={todos} onClose={onClose} /> 
            : null}
        </div>
      </div>
    </div>
  );
}

export default App;
