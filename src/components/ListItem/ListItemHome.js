import {Link} from "react-router-dom";
import "./ListItemHome.css"

export default function ListItemHome ({dato,infoPath}){
    
    return(
        <li className="btn boton-home m-2 p-3"><Link className="text-decoration-none boton-home m-2 p-3"to={infoPath}>{dato}</Link></li>
        )
    
}