import { For, createSignal } from 'solid-js';

import styles from './App.module.css';
function App() {
  type TodoType = {
    Index: number; // Add Index property
    Description: string;
    Created_time: string;
    Completed: boolean;
  };

  const [todoText, SetTodoText] = createSignal('');
  const [todos, setTodos] = createSignal<TodoType[]>([]);
  const [currentIndex, setCurrentIndex] = createSignal<number>(0); // Initialize with 0

  // const Button = styled('button', {
  //   backgroundColor: 'gainsboro',
  //   borderRadius: '9999px',
  //   fontSize: '13px',
  //   padding: '10px 15px',
  //   '&:hover': {
  //     backgroundColor: 'lightgray',
  //   },
  // });

  const createTodo = () => {
    if (todoText()) {
      const newTodo: TodoType = {
        Index: currentIndex(), // Use current index value
        Description: todoText(),
        Created_time: new Date().toLocaleTimeString(),
        Completed: false,
      };

      // Update todos
      setTodos([...todos(), newTodo]);

      // Increment current index for the next todo
      setCurrentIndex(currentIndex() + 1);

      // Clear input
      SetTodoText('');
    }
  };

  return (
    <>
      <div class={styles.createTodo}>
        <input
          class={styles.createTodoInput}
          type="text"
          placeholder="Type text..."
          autocomplete="off"
          value={todoText()}
          onchange={(e) => SetTodoText(e.target.value)}
        />
        
        <button  class={styles.createButton} onClick={createTodo}>
          Add
        </button>
      </div>
      
      <div>
        <For each={todos()}>
          {(todo) => (
            <div>
              <p>{`Index: ${todo.Index}`}</p>
              <p>{todo.Description}</p>
              <p>Created at: {todo.Created_time}</p>
              <p>Completed: {todo.Completed ? 'Yes' : 'No'}</p>
            </div>
          )}
        </For>
      </div>
    </>
  );
}

export default App;
