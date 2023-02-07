import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import Header from './Components/Header/Header';
import ClausulaSuelo from "./Pages/ClausulaSuelo/ClausulaSuelo";
import Creditos from "./Pages/Creditos/Creditos";
import GastosHipoteca from "./Pages/GastosHipoteca/GastosHipoteca";
import Multidivisa from "./Pages/Multidivisa/Multidivisa";
import TarjetaRevolving from "./Pages/TarjetasRevolving/TarjetasRevolving";

function App() {
  return (
    <Router>
      <div>
        
        
        <header>
          <Header></Header>
        </header>
        <main>
          <Routes>        
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route exact path="/ClausulaSuelo" element={<ClausulaSuelo></ClausulaSuelo>}></Route>
            <Route exact path="/Creditos" element={<Creditos></Creditos>}></Route>
            <Route exact path="/GastosHipoteca" element={<GastosHipoteca></GastosHipoteca>}></Route>
            <Route exact path="/Multidivisa" element={<Multidivisa></Multidivisa>}></Route>
            <Route exact path="/TarjetasRevolving" element={<TarjetaRevolving></TarjetaRevolving>}></Route>
            
          </Routes>
        </main>
        
        
      
        {/* <footer>
          
        </footer> */}
        
      
      </div>
    </Router>
  );
}

export default App;
