import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

export default function TodoContent() {
  const param = useParams();

  const { todos } = useFetch(`http://localhost:8080/todos/${param.id}`);
  const { title, content } = todos;

  return (
    <div>
      <h1>judul: {title} </h1>
      <h3>isi Todo: {content} </h3>
    </div>
  );
}
