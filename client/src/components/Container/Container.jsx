import Card from '../Card/Card';
import './Container.css'





export default function Container(props) {
   let arrayPj = props.pokemons;
 
   


   return <div className='card' >

      
      {arrayPj.map((pokemons) => {
         return (<Card 
            pokemons={pokemons}
            key={pokemons.id}
            id={pokemons.id}
            name={pokemons.name}
            life={pokemons.hp}
            attack={pokemons.attack}
            speed={pokemons.speed}
            height={pokemons.height}
            image={pokemons.image}
            
            />)
            
         })}
   
       
   
   </div>
}
