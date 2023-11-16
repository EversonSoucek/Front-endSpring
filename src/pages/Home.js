import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

    const [usuarios,setUsuarios] = useState([])
    
    useEffect(() => {
            carregaUsuarios();
    },[])

    const carregaUsuarios =async () => {
        const resultado =await axios.get("http://localhost:8080/usuarios")
        setUsuarios(resultado.data)
    }

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">NomeDeUsuario</th>
      <th scope="col">email</th>
      <th scope="col">Ação</th>
    </tr>
  </thead>
  <tbody>
   {
        usuarios.map((usuario, index) =>(
            <tr key={index}>
                <th scope='row'>{index + 1 }</th>
                <td>{usuario.nome}</td>
                <td>{usuario.nomeDeUsuario}</td>
                <td>{usuario.email}</td>
                <td>
                    <button className='btn btn-primary mx-2'>Visualizar</button>
                    <button className='btn btn-outline-primary mx-2'>Editar</button>
                    <button className='btn btn-danger mx-2'>Deletar</button>
                </td>
            </tr>
        ))
   }
  </tbody>
</table>
        </div>
    </div>

  )
}
