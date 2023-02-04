import axios from "axios";
import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [todos, setTodos] = useState({});
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    axios.get(url).then((res) => {
      const todoRes = res.data;
      setTodos(todoRes);
      setIsReady(true);
    });
  }, [url]);

  return { todos, isReady };
}
