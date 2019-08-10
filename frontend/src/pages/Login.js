import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "./Login.css";
import { api } from "../services/api";

const Login = ({ history }) => {
  const [username, setUsername] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const { data } = await api.post("/devs", {
      username
    });
    const { _id } = data;

    history.push(`/dev/${_id}`);
    console.log(username);
  }
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input
          placeholder="Digite seu usuário no githhub"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export { Login };
