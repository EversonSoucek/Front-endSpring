import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdicionaUsuario() {
  let navegar = useNavigate();

  const [usuario, setUsuario] = useState({
    nome: "",
    nomeDeUsuario: "",
    email: "",
  });

  const { nome, nomeDeUsuario, email } = usuario;

  const AomudarInput = (e) => {
    setUsuario({ ...usuario, [e.target.nome]: e.target.value });
  };

  const Aosubmeter = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/usuario", usuario);
    navegar("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Registrar Usuário</h2>

          <form Aosubmeter={(e) => Aosubmeter(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Nome
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Digite seu nome"
                nome="nome"
                value={nome}
                onChange={(e) => AomudarInput(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nomeDeUsuario" className="form-label">
                nome De Usuário
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Digite seu nome de usuário"
                nome="nomeDeUsuario"
                value={nomeDeUsuario}
                onChange={(e) => AomudarInput(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Digite seu e-mail"
                nome="email"
                value={email}
                onChange={(e) => AomudarInput(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}