
import "./Card.css"

export default function Card({info}) {
  
  return(
     
        <div className="tarjeta d-flex flex-column m-2 "> 
           {/* <div className="d-flex flex-column aling-items-center p-2">
                <img src={info.image} alt={info.image}/> 
               
               {/* <button onClick={mostrar} className={Ocultar === true ?"d-flex align-self-end boton-show":"d-none"}>Comprar</button>   
            </div>*/}
           {/* <button className="cierre-menu d-flex align-self-end me-5 mt-5" onClick={ocultarInfo}>X</button> */}
             <div >
               <img  className="imagen w-100 p-2"  src={info.Imagen} alt={info.Imagen}/> 
             </div>
               <h2 className="d-flex align-self-center mt-2 color-name"><u>Artículo</u></h2>
             
               
                <ul >     
                 <li className="color-name">Tipo Producto</li>
                 <li className="lista-info ">{info.tipoProducto}</li>
                 <li className="color-name">Producto</li>
                 <li className="lista-info ">{info.Producto}</li>
                 <li className="color-name">Marca</li>
                 <li className="lista-info">{info.Marca}</li>
                </ul>
               
          
        </div> 
     

  );

    
}
