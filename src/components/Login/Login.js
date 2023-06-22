import Navegation from "../Navegation/Navegation"; 
import "./Login.css";

import{Fragment} from "react"
import FormuUsuario from "../FormuAgregar/FormuUsuario";

export default function Login(){
  
   return(
      <Fragment>
         <Navegation/>
         <FormuUsuario/>
      </Fragment> 
   );
}