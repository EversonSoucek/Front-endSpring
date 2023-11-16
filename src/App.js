import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdicionaUsuario from "./usuarios/AdicionaUsuario";
import EditaUsuario from "./usuarios/EditaUsuario";
import VisualizaUsuario from "./usuarios/VisualizaUsuario";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adicionausuario" element={<AdicionaUsuario />} />
          <Route exact path="editausuario/:id" element={<EditaUsuario />} />
          <Route exact path="visualizausuario/:id" element={<VisualizaUsuario />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
