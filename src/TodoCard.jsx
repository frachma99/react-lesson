import React from "react";
import { useNavigate } from "react-router-dom";

export default function TodoCard(props) {
  const { id, title } = props;
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/employee/todo/${id}`)}>
      <h1>Ini adalah halaman todo id {id}</h1>
      <h2>Judul: {title}</h2>
    </div>
  );
}
