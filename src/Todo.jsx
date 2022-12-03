import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

export default function Todo() {
  const param = useParams();
  const { todos } = useFetch(`http://localhost:8080/todos/${param.id}`);

  const { id, title } = todos;

  return (
    <div>
      <h1>Ini adalah halaman todo id {id} </h1>
      <h2>Judul: {title}</h2>
    </div>
  );
}
