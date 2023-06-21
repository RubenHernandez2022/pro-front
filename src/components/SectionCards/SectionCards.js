import Card from "../Card/Card";
import "./SectionCards.css";


export default function SectionCards ({datos}){
   
  return (
     <section className="section-cards mt-5">
           {datos.map((dato)=>{return <Card key={datos.indexOf(dato)} info={dato}/>})}
     </section>
     
   )
 
}