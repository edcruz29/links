import { FiX, FiClipboard } from "react-icons/fi";
import "./linkItem.css";

export default function LinkItem({ closeModal }) {
  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Link Encurtado</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#000" />
        </button>
      </div>

      <span>https://www.google.com/</span>

      <button className="modal-link">
        https://bit.ly/12900
        <FiClipboard size={20} color="#fff" />
      </button>
    </div>
  );
}
