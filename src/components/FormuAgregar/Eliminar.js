import{Fragment} from "react"
import {useEffect,useState} from "react";
import SectionCards from "../SectionCards/SectionCards";
import {Link} from "react-router-dom";

export default function Eliminar () {
    
    let [datos,setDatos]=useState([]);
    const mostrarInfo=async()=>{
            // metodo que es una promesa , le pediamos que haga "algo" -> una peticion , y que segun la respuesta : si lo pudo hacer o no, realizar distintas acciones
            //por defecto -> peticion GET ,pero podemos cambiar su configuracion para utilizar las otras peticiones (POST,DELETE,etc..)
            await fetch("http://localhost:4000/pedirProducto")
                    .then((res)=>res.json())
                    .then((data)=>setDatos(data))
                    .catch((err)=> console.log(err))
    }
      
      useEffect(()=>{
          mostrarInfo()
          setTimeout(()=>{console.log(datos)},4000)//ejecutar una funcion luego de un cierto tiempo(seg)
            
      },[]);


  return(
   <Fragment>
     <div className="card bg-secondary text-white" >
        <div className="card-body">
          <Link to="/Administrador" activeClassName="active"><button className="btn btn-success btn-eliminar mt-3 mb-5 position-absolute  top-0 end-50" >VOLVER</button></Link>
          <SectionCards datos={datos}/>
        </div>
      </div>
    </Fragment>
  );
    
};