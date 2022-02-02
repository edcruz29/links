import { FiLink } from "react-icons/fi";
import "./home.css";

export default function Home() {
  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
        <h1>EduardoLink's</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className="area-input">
        <div>
        <FiLink size={24} color="#fff"></FiLink>
        <input type="text" placeholder="cole seu link aqui..." />
        
        </div>
        <button>Gerar Link</button>
        
      </div>
    </div>
  );
}
