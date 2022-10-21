import './App.css';
import TodoList from './Todo/Todo';
function toggleTodo(id){
  console.log('asdsad')
}

function App(){
  const todos = [
    {id:1,complited:false,title:'купить хлеб'},
    {id:2,complited:false,title:'купить масло'},
    {id:3,complited:false,title:'купить молоко'},
  ]
  return (
    <div className='wrapper'>
      <h1>react start</h1>
      <TodoList todos={todos} onToggle="toggleTodo"></TodoList>
    </div>
  )
}

export default App;
