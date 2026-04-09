import React from 'react';
import './App.css';
import { Header } from '../header.js';
import { TodoCounter } from '../todoCounter/todoCounter.js';
import { TodoSearch } from '../todoSearch/todoSearch.js';
import { TodoList } from '../todoList/todoList.js';
import { TodoItem } from '../todoItem/todoItem.js';
import { CreateTodoButton } from '../createTodoButton/createTodoButton.js';
import { Modal } from '../Modal/Modal.js';
import { TodoForm } from '../TodoForm/TodoForm.js';
import { useLocalStorage } from '../useLocalStorage.js';




// const defaultTodos = [
//   { text: "cortar cebello", completed: true },
//   { text: "repasar el curso", completed: false },
//   { text: "comprar cebolla", completed: true },
//   { text: "cocinar cebolla", completed: false },
//   { text: "llorar con la llorona", completed: false },
//   { text: "uno nuevo", completed: false }
// ];



function App() {
  ///list counter
  const [todos, setTodos] = useLocalStorage('Todos_v1', []);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  ///serach
  const [searchValue, setSearchValue] = React.useState('');
  /// search engine
  const findTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });
  /// checkComplete

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    setTodos(newTodos);
  }

  const [openModal, setOpenModal] = React.useState(false);

  console.log("soy el uno");

  React.useEffect(() => {
    console.log("soy el dos");
  }, []);




  return (
    <div className="hidden md:block">
      <Header />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <TodoCounter completed={completedTodos} total={totalTodos} />
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

          <TodoList>
            {findTodos.map(todo => (
              <TodoItem key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)} />
            ))}
          </TodoList>

        </div>
      </main>

      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />

      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

    </div >
  );
}



export default App;
