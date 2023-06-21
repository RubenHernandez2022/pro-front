import {Fragment, useState,useEffect} from 'react';
import {useNavigate} from "react-router-dom"

export default function FormuAgregar(){
    const navigate=useNavigate();
    const [metodo,setMetodo]=useState('');
    const[form,setForm]=useState({
        imagen:'',
        tipoProducto:'',
        Producto:'',
        Marca:''
            
    });
    
    const handleChange= (e)=>{
        setForm({...form,[e.target.name]:e.target.value})

    };

    const handleChangeInput= (e)=>{
            let fileInfo=e.target.files[0]
            console.log(fileInfo)
            setForm({...form,[e.target.name]: fileInfo})   
        
    };
    const CargarArticulo=async(event)=>{
       
        event.preventDefault();
        let formData;
        let infoHeaders;
        let actionurl='';
        
        if(metodo === 'POST'){
            formData= new FormData(event.target)//objeto con toda la data recaudada del formulario
            console.log("soy post"+formData);
            infoHeaders={
                'Context-Type':'multipart/form-data'
            }
            
            actionurl="http://localhost:4000/agregarProducto"
        }else{
            formData=JSON.stringify(form)
            infoHeaders={ 'Content-Type': 'application/json'}
            
            console.log(form.id)
            actionurl="http://localhost:4000/modifArticulo/"+form.id
        }
        
        const response= await fetch(actionurl,{
             method:metodo,
             headers:infoHeaders,
             body:formData
            }
        )
        
        if(response.ok){
            //  en la response voy a tener el token que lo voy a guardar  en una variable
            console.log("ok");
            localStorage.removeItem("ArticuloGuardado")
            navigate("/Eliminar")
           
        }
    };

        useEffect(()=>{
          //si la data la traigo con localStorage
          //la agregamos al estado form para que figure ya completo el formulario
          let data = localStorage.getItem("ArticuloGuardado");
          console.log(data)
          if(data !== null){
            setForm(JSON.parse(data))
            setMetodo("PUT")
            console.log(form)
          }else{
            setMetodo("POST")
          }
            console.log(metodo)
            //si la data viene como prop
           // if(data !== ''){
            //     setForm(data)
            // }
           // if(id !== ''){
           //     setIdCard(id)
          // }
        },[])
    
    return(
        <Fragment> 
            <div className="container-fluid recuadro-contacto">
             <div className=" color-contacto d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75">
                <h2>Producto nuevo</h2>
                
                <form className="row g-5 p-5" onSubmit={(event)=>{CargarArticulo(event)}}>
                    <div className="col-12"> 
                        <label htmlFor="imagen" className="form-label">imagen</label>
                        <input type="file" name="imagen" className="form-control" id="imagen" placeholder={form.imagen} onChange={(event)=>handleChangeInput(event)}/> 
                    </div> 
                    <div className="col-12">
                        <label htmlFor="tipoProducto" className="form-label">
                           Tipo de Producto  :
                           <select value={form.tipoProducto} name="tipoProducto" id="tipoProducto" onChange={(event)=>handleChange(event)} required>
                             <option value="Materiales">Materiales</option>
                             <option value="Herramientas">Herramientas</option>
                             <option value="Repuestos">Repuestos</option>
                           </select>        
                        </label>  
                    </div> 
                    <div className="col-12">
                       <label htmlFor="producto" className="form-label">Producto</label>
                       <input type="text" name="producto" className="form-control" id="producto" value={form.producto} onChange={(event)=>handleChange(event)}/>
                    </div>
                    <div className="col-12">
                       <label htmlFor ="marca" className="form-label">Marca</label>  
                       <input type="text" name="marca" className="form-control" id="marca" value={form.marca} onChange={(event)=>handleChange(event)}/>
                    </div>
                    <div className="col-12">
                       <button type="submit" className="btn boton-contacto">Enviar</button>
                    </div>
                </form>
              </div> 
            </div> 
        </Fragment>
    );
    }
