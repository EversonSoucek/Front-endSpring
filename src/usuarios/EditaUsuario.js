import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditaUsuario() {
  let navegar = useNavigate();

  const { id } = useParams();

  const [usuario, setUsuario] = useState({
    nome: "",
    nomeDeUsuario: "",
    email: "",
  });

  const { nome, nomeDeUsuario, email } = usuario;

  const onInputChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    CarregaUsuario();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/usuario/${id}`, usuario);
    navegar("/");
  };

  const CarregaUsuario = async () => {
    const resultado = await axios.get(`http://localhost:8080/usuario/${id}`);
    setUsuario(resultado.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Editar usuário</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Nome
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Digite seu nome"
                name="nome"
                value={nome}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Nome de usuário
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your nomeDeUsuario"
                name="nomeDeUsuario"
                value={nomeDeUsuario}
                onChange={(e) => onInputChange(e)}
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
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Enviar
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}