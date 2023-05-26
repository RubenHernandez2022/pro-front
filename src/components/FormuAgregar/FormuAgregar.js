

export default function FormuAgregar(){
    return(
       <div className="container-fluid recuadro-contacto">
            
            <div class=" color-contacto d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75">
                <h2>Producto nuevo</h2>
                
                <form className="row g-5 p-5" action="http://localhost:4000/agregarProducto" enctype="multipart/form-data" method="POST">
                    <div className="col-12"> 
                        <label formHTML="imagen" className="form-label">imagen</label>
                        <input type="file" name="imagen" className="form-control" id="imagen"/> 
                    </div> 
                    <div className="col-12">
                        <label formHTML="tipoProducto" className="form-label">
                           Tipo de Producto  :
                           <select name="tipoProducto" id="tipoProducto" required>
                             <option value="Materiales">Materiales</option>
                             <option value="Herramientas">Herramientas</option>
                             <option value="Repuestos">Repuestos</option>
                           </select>        
                        </label>
                        {/* <input type="text" name="tipoProducto" className="form-control" id="tipoProducto"/> */}
                    </div> 
                    <div className="col-12">
                       <label formHTML="producto" className="form-label">Producto</label>
                       <input type="text" name="producto" className="form-control" id="producto"/>
                    </div>
                    <div className="col-12">
                       <label formHTML="marca" className="form-label">Marca</label>  
                       <input type="text" name="marca" className="form-control" id="marca"/>
                    </div>
                    <div className="col-12">
                       <button type="=submit" className="btn boton-contacto">Enviar</button>
                    </div>
                </form>
            </div> 
        </div> 
    );
} 
