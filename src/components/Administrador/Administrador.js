import Navegation from "../Navegation/Navegation";
import{Fragment} from "react"
import ListItemHome from "../ListItem/ListItemHome";


export default function Administrador(){
  
   return(
      <Fragment>
         <Navegation/> 
         <div className="centrado-home w-50 d-flex flex-column justify-content-center align-items-center ">  
            <nav>
               <ul className="d-flex justify-content-between">
                  <ListItemHome dato="AGREGAR" infoPath="/FormuAgregar"/>
                  <ListItemHome dato="EDITAR--ELIMINAR" infoPath="/Eliminar"/>
               </ul>
            </nav>
         </div>   
        
      </Fragment> 
   );
}
