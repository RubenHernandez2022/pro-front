import "./Card.css"
import {Fragment,useState } from "react";
import {Link} from "react-router-dom"; 

export default function Card({info}) {
  
  const eliminarProducto=async()=>{
    setOcultar(false)
      await  fetch("http://localhost:4000/eliminarProducto", {
       method: "DELETE",
       headers: {
           'Content-Type': 'application/json'
         },
       body: JSON.stringify({ "tipoProducto": info.tipoProducto,"Producto":info.Producto,"Marca":info.Marca})
     })
       .then(respuesta => respuesta.json())
       .then(data => console.log(data))
       .catch(error => console.log("HAY UN ERROR!!" +error))
  
  }

  const [Ocultar,setOcultar]=useState(true);
  
  return(
    <Fragment>
       {Ocultar ===true?
          <div className="tarjeta d-flex flex-column m-2 "> 
              {/* <div className="d-flex flex-column aling-items-center p-2">
              {/* <button onClick={mostrar} className={Ocultar === true ?"d-flex align-self-end boton-show":"d-none"}>Comprar</button>   
              </div>*/}
              {/* <button className="cierre-menu d-flex align-self-end me-5 mt-5" onClick={ocultarInfo}>X</button> */}
                        
              <div >
                  <div >
                      <img  className="imagen w-100 p-2"  src={info.imagen} alt={info.Imagen}/> 
                  </div>
                  <div >
                  <h2 className="d-flex align-self-center mt-2 color-name"><u>Artículo</u></h2>
                  </div>
                  <ul >   
                     <li className="color-name">Tipo Producto</li>
                     <li className="lista-info ">{info.tipoProducto}</li>
                     <li className="color-name">Producto</li>
                     <li className="lista-info ">{info.Producto}</li>
                     <li className="color-name">Marca</li>
                     <li className="lista-info">{info.Marca}</li>
                    
                     <Link to="/Eliminar" activeClassName="active"><button className="btn btn-danger btn-eliminar" onClick={()=>eliminarProducto()}>Eliminar</button></Link>
                  </ul>
              </div>
             
           
          </div>:""
       }
    </Fragment>  
  );

}
