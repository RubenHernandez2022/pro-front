import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../components/Home/Home";
import Cliente from "../components/Cliente/Cliente";
import Administrador from "../components/Administrador/Administrador";

export default function Router(){
    return(<BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/Cliente" element={<Cliente/>}/>
                  <Route path="/Administrador" element={<Administrador/>}/>
                </Routes>
            </BrowserRouter>

    )
}