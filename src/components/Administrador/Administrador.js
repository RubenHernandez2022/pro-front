import Navegation from "../Navegation/Navegation"; 
import "./Administrador.css";

import {useState} from"react";
import{Fragment} from "react"


export default function Administrador(){
  
      return(
      <Fragment>
        <Navegation/>
        <main className="container-fluid recuadro-contacto">
            
            <div class=" color-contacto d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75">
                <h2>Producto nuevo</h2>
                
                <form className="row g-5 p-5" action="http://localhost:4000/Administrador" method="POST">
                    <div className="col-12"> 
                        <label htmlfor="tipoProducto" className="form-label">
                           Tipo de Producto  :
                           <select name="tipoProducto" id="tipoProducto" required>
                             <option value="Materiales">Materiales</option>
                             <option value="Herramientas">Herramientas</option>
                             <option value="Repuestos">Repuestos</option>
                           </select>        
                        </label>
                    </div> 
                    <div className="col-12">
                       <label htmlFor="producto" className="form-label">Producto</label>
                       <input type="text" className="form-control" id="producto"/>
                    </div>
                    <div className="col-12">
                       <label htmlFor="marca" className="form-label">Marca</label>  
                       <input type="text" className="form-control" id="marca"/>
                    </div>
                    <div className="col-12">
                       <button type="=submit" className="btn boton-contacto">Enviar</button>
                    </div>
                </form>
            </div> 
        </main>  
      </Fragment> 
    ) 
}
