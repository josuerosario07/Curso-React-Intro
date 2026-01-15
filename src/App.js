import './App.css';
import { Header } from './header.js';
import { TodoCounter } from './todoCounter.js';
import { TodoSearch } from './todoSearch.js';
import { TodoList } from './todoList.js';
import { TodoItem } from './todoItem.js';



const defaultTodos = [
  { text: "cortar cebello", completed: true },
  { text: "repasar el curso", completed: false },
  { text: "llorar con la llorona", completed: false },
  { text: "comprar cebolla", completed: false },
  { text: "uno nuevo", completed: false },
];

function App() {
  return (
    <div className="hidden md:block">
      <Header />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <TodoCounter completed={2} total={5} />
          <TodoSearch />

          <TodoList>
            {defaultTodos.map(todo => {
              return <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
            })}
          </TodoList>

        </div>
      </main>




    </div >
  );
}



export default App;
