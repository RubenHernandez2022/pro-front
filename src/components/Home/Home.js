import  "./Home.css";
import ListItemHome from "../ListItem/ListItemHome";

export default function Home() {

    return(
        
        <div className="centrado-home w-50 d-flex flex-column justify-content-center align-items-center ">  
           
                <h1 className="titulo-home">La Ferretería</h1>
                <nav>
                   <ul className="d-flex justify-content-between">
                      <ListItemHome dato="CLIENTE" infoPath="/Cliente"/>
                      <ListItemHome dato="ADMINISTRACION" infoPath="/Administrador"/>
                      
                   </ul>
                </nav>
        </div> 
        
    )
}
  
   