import "./error.css";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="container-error">
      <img src="/notfound.png" alt="Página Não Encontrada" />
      <h1>Página Não encontrada!</h1>
      <Link to="/">Voltar para Home</Link>
    </div>
  );
}
