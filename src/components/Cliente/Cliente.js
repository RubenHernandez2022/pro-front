import Navegation from "../Navegation/Navegation";
import Filters from "../Filters/Filter";
import SectionCards from "../SectionCards/SectionCards";
import "./Cliente.css";

import {useEffect,useState} from "react";
import{Fragment} from "react"

export default function Cliente () {
    
    let [datos,setDatos]=useState([]);
    let [infoCompleta,setInfoCompleta]=useState([]);
    
    const mostrarValor=(event)=>{
    
        if(event.target.checked){    
             let datoFiltro=event.target.value;
             if(datoFiltro === "Alive" || datoFiltro === "Dead"){
              let resultado= datos.filter((ch)=>ch.status===datoFiltro)
              setDatos(resultado)
             } 

            if(datoFiltro === "Female" || datoFiltro === "Male"){
             let resultado= datos.filter((ch)=>ch.gender===datoFiltro)
             setDatos(resultado)
            } 

            if(datoFiltro === "unknown"){
            let resultado= datos.filter((ch)=>ch.origin.name===datoFiltro)
            setDatos(resultado)
            } 
        }else{
            setDatos(infoCompleta)
        }
    }   
    
    const traerInfo=async()=>{
      let info= await fetch("http://localhost:4000/getatodoProd")
                      .then(respuesta => respuesta.json())
                      .catch(error => console.log("HAY UN ERROR!!" +error))
      return info
    }
    
    const mostarInfo= async ()=>{
        let dato= await traerInfo()
        let infoProductos=dato.results
        setDatos(infoProductos)
        setInfoCompleta(infoProductos)
    }
   
    useEffect(()=>{
        mostarInfo()
    },[]) 
    
    return( 
      <Fragment>
        <Navegation/>
        <main className="container">
            <section className="sec-filtro py-5 ">
              <h2>Filtros</h2>
              <div className="d-flex justify-content-between flex-wrap">
                 <Filters  nombreFiltro="Tipo Producto" datoFiltro="Tipo producto" muestraValor={mostrarValor}/>
                 <Filters  nombreFiltro="Productos" datoFiltro="Productos" muestraValor={mostrarValor}/>
                 <Filters  nombreFiltro="Marca" datoFiltro="Marca" muestraValor={mostrarValor}/>
                 
              </div>
            </section>
             
            <SectionCards datos={datos}/>
             
        </main>
      </Fragment>
    )
    
}