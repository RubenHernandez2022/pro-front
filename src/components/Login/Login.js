import Navegation from "../Navegation/Navegation"; 
import "./Login.css";

import{Fragment} from "react"
import FormuUsuario from "../FormuAgregar/FormuUsuario";

export default function Login(){
  
    return(
       <Fragment>
         <Navegation/>
         <div className="centrado-home w-50 d-flex flex-column justify-content-center align-items-center ">  
            <nav>
               <ul className="d-flex justify-content-between">
               <FormuUsuario/>
               </ul>
            </nav>
          </div>  
       </Fragment> 
    );
}