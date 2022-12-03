import { useState } from "react";

import TodoCard from "./TodoCard";
import useFetch from "./useFetch";

export default function TodoApp() {
  const { todos, isHere, handleSubmit } = useFetch(
    `http://localhost:8080/todos`
  );

  const [input, setInput] = useState({
    id: "",
    title: "",
  });

  const { id, title } = input;

  function handleChange(e) {
    const { name, value } = e.target;
    setInput((pre) => ({
      ...pre,
      [name]: value,
    }));
  }

  return (
    <div>
      <h1>Ini halaman TodoApp</h1>
      <form onSubmit={() => handleSubmit(input)}>
        <input
          type="text"
          placeholder="input id"
          name="id"
          value={id}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="input title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
      {isHere
        ? todos.map((todo) => <TodoCard key={todo.id} {...todo} />)
        : "wait..."}
    </div>
  );
}
