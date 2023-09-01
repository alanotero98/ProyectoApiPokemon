
import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';




export default function Card(props) {

   
   const {id,name,life,image,attack,types} =  props.pokemons;
   
 
   
  
  
   return (

      <div className='divContenedor'>
            <div className='Card' key={id}   >
            
            
            
            
               <div className='info'>
               <Link to={`/${id}`}>
                   <div className='img'>
                      <img src={image} alt="" />
                   </div>
               </Link>
                     
                     <h2 className='nombre'>Name: {name}</h2>
                     <p className='status'>Life: {life}</p>
                     <p className='status'>types: {types}</p>
                     <p className='status'>attack: {attack}</p>
                    
                   
                     
                       
                     
                     
               </div>
            </div>
      </div>
   );
}
