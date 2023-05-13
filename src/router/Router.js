import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../components/Home/Home";
import Cliente from "../components/Cliente/Cliente";
import Administrador from "../components/Administrador/Administrador";
import FormuAgregar from "../components/FormuAgregar/FormuAgregar";

export default function Router(){
    return(<BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/Cliente" element={<Cliente/>}/>
                  <Route path="/Administrador" element={<Administrador/>}/>
                  <Route path="/formuAgregar" element={<FormuAgregar/>}/>
                </Routes>
            </BrowserRouter>

    )
}