import './Card.css'

export default function Card({ id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div className='card'>
         <div className='close'><button onClick={ () => onClose(id)}>X</button>
         </div>
            <div className='info'> 
             <h2>{name}</h2>
           {/*<h2>{status}</h2>*/}
             <h2>{species}</h2>
            {/*<h2>{gender}</h2>*/}
            <h2>{origin}</h2>
         <div className='imagen'>
            <img src={image} alt='' /> 
         </div>
           
            </div>
      </div>
   );
}
