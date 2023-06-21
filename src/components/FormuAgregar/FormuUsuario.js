import {Fragment} from 'react';
import {useNavigate} from "react-router-dom"

export default function FormuUsuario(){
    const navigate=useNavigate();
    
    const registro=async (event)=>{
        event.preventDefault();
        const form=JSON.stringify({
            "usuario":event.target[0].value,
            "contraseña":event.target[1].value,
            })
       
        const response= await fetch('http://localhost:4000/login',{
            method:'POST',
            body:form,
            headers:{
                'Content-Type': 'application/json',
                
            }
        })// o hacemos esto .then().catch(err)
       
        // console.log(response.status)
        if(response.status===204){
            alert("usuario incorrecto")
        }else{
             if(response.status===401){
                 alert("contraseña incorrecta")
             }else{
                   
                   navigate("/Administrador")
             }
        }
        //  en la response voy a tener el token que lo voy a guardar  en una variable
    }
    return(
        <Fragment> 
            
         <div className="container-fluid recuadro-contacto"> 
           
           <div className=" color-contacto d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75">
                <h2>Iniciar Sesion</h2>
                
                <form className="row g-5 p-5" onSubmit={(event)=>{registro(event)}} method="POST">
                    
                    <div className="col-12">
                       <label htmlFor="usuario" className="form-label">Usuario</label>
                       <input type="text" name="usuario" className="form-control" id="usuario"/>
                    </div>
                    <div className="col-12">
                       <label htmlFor="contraseña" className="form-label">Contraseña</label>  
                       <input type="text" name="contraseña" className="form-control" id="contraseña"/>
                    </div>
                    <div className="col-12">
                       <button type="=submit" className="btn boton-contacto">Login</button>
                    </div>
                </form>
                 
            </div>
             
          </div> 
            
        </Fragment>
    );
} 
 //enctype="multipart/form-data"
 // //mensaje de usuario registrado 