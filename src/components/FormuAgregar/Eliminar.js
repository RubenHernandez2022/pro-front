//import Filters from "../Filters/Filter";
//import SectionCards from "../SectionCards/SectionCards";
//import "./Cliente.css";
//import Card from "../Card/Card";
//import Cliente from "../Cliente/Cliente"
import{Fragment} from "react"
import {useEffect,useState} from "react";
import SectionCards from "../SectionCards/SectionCards";
import Navegation from "../Navegation/Navegation";

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
      <Navegation/>
       <div className="card bg-secondary text-white" >
          <div className="card-body">
            <SectionCards datos={datos}/>
          </div>
        </div>
    </Fragment>

 );
    
};