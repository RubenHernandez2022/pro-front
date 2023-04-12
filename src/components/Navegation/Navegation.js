import "./Navegation.css";
import {NavLink} from "react-router-dom"; 

export default function Navegation () {
 
    return(
        
        <nav className="navbar navbar-expanded-lg fondo-nav ">
            <div className="container-fluid me-4">
               <h2>Productos</h2>
               <ul  className="d-flex flex-row">
                  <li className="border border-0 p-3 subra" ><NavLink style={{color:'inherit',textDecoration:'inherit'}} to="/">Home</NavLink></li>
                  <li className="border border-0 p-3 subra" ><NavLink style={{color:'inherit',textDecoration:'inherit'}} to="/Cliente" activeClassName="active">Cliente</NavLink></li>
                  <li className="border border-0 p-3 subra"><NavLink style={{color:'inherit',textDecoration:'inherit'}} to="/Administrador" activeClassName="active">Administrador</NavLink></li>
               </ul>
            </div>
        </nav>
       
        
    )
}
