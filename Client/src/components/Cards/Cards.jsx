import Card from '../Card/Card';
import './Cards.css'


export default function Cards({characters, onClose}) {
  
   return(
   
   <div className='cards'>
      {characters.map((card)=>{
         return(
      
      <Card
            key = {card.id}
            id = {card.id}
            name = {card.name}
            status = {card.status}
            species = {card.species}
            gender = {card.gender}
            origin = {card.origin.name}
            image = {card.image}
            onClose={onClose}
         />
      )
      }
   )}
   
</div>);
}

