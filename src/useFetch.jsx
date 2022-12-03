import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [todos, setTodos] = useState({});
  const [isHere, setIsHere] = useState(false);

  useEffect(() => {
    axios.get(url).then((res) => {
      const todoRes = res.data;
      setTodos(todoRes);
      setIsHere(true);
    });
  }, [url]);

  function handleSubmit(input) {
    axios.post(`http://localhost:8080/todos`, input);
  }

  return { todos, isHere, handleSubmit };
}
