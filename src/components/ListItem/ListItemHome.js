import {Link} from "react-router-dom";
import "./ListItemHome.css"

export default function ListItemHome ({dato,infoPath}){
    
    return(
        <Link to={infoPath}><li className="btn boton-home m-2 p-3">{dato}</li></Link>
        )
    
}