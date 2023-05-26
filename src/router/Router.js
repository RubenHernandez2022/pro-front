import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../components/Home/Home";
import Cliente from "../components/Cliente/Cliente";
import Administrador from "../components/Administrador/Administrador";
import FormuAgregar from "../components/FormuAgregar/FormuAgregar";
import Eliminar from "../components/FormuAgregar/Eliminar";

export default function Router(){
    return(<BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/Cliente" element={<Cliente/>}/>
                  <Route path="/Administrador" element={<Administrador/>}/>
                  <Route path="/formuAgregar" element={<FormuAgregar/>}/>
                  <Route path="/Eliminar" element={<Eliminar/>}/>
                </Routes>
            </BrowserRouter>

    )
}