import {useEffect,useState} from "react";
import{Fragment} from "react";

import aunProducto from "../aunProducto/aunProducto";

export default function atodoProd() {
    
    let [datos,setDatos]=useState([]);
    const traerInfo=async()=>{
            // metodo que es una promesa , le pediamos que haga "algo" -> una peticion , y que segun la respuesta : si lo pudo hacer o no, realizar distintas acciones
            //por defecto -> peticion GET ,pero podemos cambiar su configuracion para utilizar las otras peticiones (POST,DELETE,etc..)
            await fetch("http://localhost:4000/getatodoProd")
                    .then((res)=>res.json())
                    .then((data)=>setDatos(data))
                    .catch((err)=> console.log(err))
          
        }
      
        useEffect(()=>{
            traerInfo()
      
            setTimeout(()=>{console.log(datos)},5000)//ejecutar una funcion luego de un cierto tiempo(seg)
            
        },[])
    return( 
          <Fragment>
            <Navegation/>
            <section className="row card text-white bg-secondary m-3 align-itemns-center w-50">
              {datos.map((dato)=>{return <aunProducto key={datos.indexOf(dato)}info={dato}/>
              })}
            </section>
          </Fragment>
    )
}