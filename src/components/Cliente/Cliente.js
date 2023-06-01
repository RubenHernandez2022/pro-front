import Navegation from "../Navegation/Navegation";
//import Filters from "../Filters/Filter";
import SectionCards from "../SectionCards/SectionCards";
import "./Cliente.css";
//import Card from "../Card/Card";

import {useEffect,useState} from "react";
import{Fragment} from "react"

export default function Cliente () {
  // let [admin,setAdmin]=useState();
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
        <main className="container-fluid mt-5">
            {/* <section className="sec-filtro py-5 "> */}
               {/* <h2>Filtros</h2> 
              <div className="row card text-white bg-secondary m-3 align-items-center w-50 d-flex justify-content-between flex-wrap">
                 <Filters  nombreFiltro="Tipo Producto" datoFiltro="Tipo producto" muestraValor={mostrarValor}/>
                 <Filters  nombreFiltro="Productos" datoFiltro="Productos" muestraValor={mostrarValor}/>
                 <Filters  nombreFiltro="Marca" datoFiltro="Marca" muestraValor={mostrarValor}/> 
                 {datos.map((dato)=>{return <Card key={datos.indexOf(dato)}info={dato}/>
              })}
              </div> */}
              <SectionCards datos={datos}/>
            {/* </section>
              */}
             
             
        </main>
      </Fragment>
    )
    
}