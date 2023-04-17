
import "./Card.css"

export default function Card({info}) {
  
  return(
     
        <div className="d-flex  mb-4 ms-2 tarjeta ancho-tarjeta"> 
           {/* <div className="d-flex flex-column aling-items-center p-2">
                <img src={info.image} alt={info.image}/> 
               
               {/* <button onClick={mostrar} className={Ocultar === true ?"d-flex align-self-end boton-show":"d-none"}>Comprar</button>   
            </div>*/}
           
           
            
              {/* <button className="cierre-menu d-flex align-self-end me-5 mt-5" onClick={ocultarInfo}>X</button> */}
                <ul>     
                 <h2 className="d-flex justify-content-center color-name">Articulos</h2>
                 <li className="lista-info">Tipo Producto<li className="resaltar">{info.TipoProd}</li></li>
                 <li className="lista-info">Producto<li className="resaltar">{info.Producto}</li></li>
                 <li className="lista-info" >Marca <li className="resaltar">{info.Marca}</li></li>
                </ul>
            
          
        </div> 
     

  );

    
}
