import { useState } from "react";
import { FiLink } from "react-icons/fi";
import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";
import "./home.css";
import api from "../../services/api";
import { saveLinks } from "../../services/storeLinks";
import React, { Component } from "react";

export default function Home() {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });
      setData(response.data);
      setShowModal(true);
      saveLinks("@encurtarLink", response.data);
      setLink("");
    } catch (error) {
      alert("Ops! parece que algo deu errado!");
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
        <h1>Encurtador de Links</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff"></FiLink>
          <input
            type="text"
            placeholder="cole seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLink}>Gerar Link</button>
      </div>
      <Menu />
      {showModal && (
        <LinkItem content={data} closeModal={() => setShowModal(false)} />
      )}
    </div>
  );
}
