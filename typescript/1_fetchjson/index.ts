import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Adding some Typescript
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  // Response.data has properties of:
  // id
  // title
  // completed
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  console.log(`
    The todo with ID: ${id}
    Has a title of: ${title}
    Is it Finished? ${completed}
  `)
})