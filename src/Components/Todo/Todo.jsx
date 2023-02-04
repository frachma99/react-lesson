import axios from "axios";
import { useState } from "react";
import useFetch from "./useFetch";
import TodoCard from "./TodoCard";

export default function Todo() {
  const { todos, isReady } = useFetch("http://localhost:8080/todos");

  const [input, setInput] = useState({
    id: "",
    title: "",
    content: "",
  });

  const { title, content } = input;

  function handleChange(e) {
    const { name, value } = e.target;
    setInput((pre) => ({
      ...pre,
      [name]: value,
    }));
  }

  function handleSubmit(input) {
    axios.post("http://localhost:8080/todos", input);
  }

  return (
    <div>
      <h2>Klik konten untuk melihat isi dalam page berbeda</h2>
      <form onSubmit={() => handleSubmit(input)}>
        <input
          type="text"
          placeholder="put title"
          onChange={handleChange}
          value={title}
          name="title"
        />
        <input
          type="text"
          placeholder="put content"
          onChange={handleChange}
          value={content}
          name="content"
        />
        <button>submit</button>
      </form>
      {isReady
        ? todos.map((todo) => <TodoCard key={todo.id} {...todo} />)
        : "waiting..."}
    </div>
  );
}
