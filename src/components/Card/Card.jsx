import './Card.css'
import {Link} from 'react-router-dom'

export default function Card({ id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div className='card'>
         <div className='close'><button onClick={ () => onClose(id)}>X</button>
         </div>
            <div className='info'> 
               <Link to={`/detail/${id}`} >
                  <h2>{name}</h2>
               </Link>
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
