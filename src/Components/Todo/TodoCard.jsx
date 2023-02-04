import { useNavigate } from "react-router-dom";

export default function TodoCard(props) {
  const { id, title, content } = props;
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`${id}`)}>
      <h2>Judul todo: {title}</h2>
      <h5>Isi todo: {content}</h5>
    </div>
  );
}
