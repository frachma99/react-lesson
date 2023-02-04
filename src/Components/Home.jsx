import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 style={{ textTransform: "uppercase" }}>Ini adalah halaman Utama</h1>
      <h2>
        aplikasi react ini adalah playground saya untuk melatih pemahaman react
      </h2>

      <br />
      <h3>aplikasi yang tersedia: </h3>
      <button onClick={() => navigate("/search")}>Search Movie App</button>
      <h6>implementasi API menggunakan OMDb API</h6>
      <button onClick={() => navigate("/counter")}>Counter App</button>
      <h6>implementasi redux dengan aplikasi counter</h6>
      <button onClick={() => navigate("/todo")}>Todo App</button>
      <h6>implementasi useEffect dan useParams serta API lokal</h6>
      <button onClick={() => navigate("/tables")}>Table</button>
      <h6>just table</h6>
    </div>
  );
}
