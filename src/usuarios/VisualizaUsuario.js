import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function VisualizaUsuario() {
  const [usuario, setUsuario] = useState({
    nome: "",
    nomeDeUsuario: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    carregaUsuario();
  }, []);

  const carregaUsuario = async () => {
    const resultado = await axios.get(`http://localhost:8080/usuario/${id}`);
    setUsuario(resultado.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Detalhes do usuário</h2>

          <div className="card">
            <div className="card-header">
              Detalhes do usuário de id : {usuario.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Nome:</b>
                  {usuario.nome}
                </li>
                <li className="list-group-item">
                  <b>Nome De Usuário:</b>
                  {usuario.nomeDeUsuario}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {usuario.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Voltar à página principal
          </Link>
        </div>
      </div>
    </div>
  );
}