import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './lab1/shared/navbar/page'; // Ajusta el path según tu estructura
import FormRegister from './lab1/components/formRegister/page.js'; // Ajusta el path según tu estructura
import FormUser from './lab1/components/formUser/page'; // Ajusta el path según tu estructura

function App() {
  return (
    <Router>
   
     <FormRegister/>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<FormRegister />} />
          <Route path="/formUser" element={<FormUser />} />
          {/* Elimina esta ruta, ya que no es necesaria y causa conflicto */}
          {/* <Route path="/shared/navbar" element={<page />} /> */}
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
//export default App;