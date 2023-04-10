// import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/Banco-Errores"  element={<Home/>}/>
        {/* <Route path="/Documentacion"  />
        <Route path="/Formulario"  />
        <Route path="/CargaMasiva"  /> */}
      </Routes>

    </Router>
  );
}

export default App;
