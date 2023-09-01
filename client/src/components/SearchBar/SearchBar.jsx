import './SearchBar.css'
import React from 'react';
import { useState } from 'react';

export default function SearchBar({ filterPokemons }) {
   const [searchValue, setSearchValue] = useState('');

   const handleSearchChange = (event) => {
      const value = event.target.value;
      setSearchValue(value);
      filterPokemons(value); // Llama a la función de filtrado pasando el valor de búsqueda
   };

   return (
      <div className='todoInput'>
         <input
            className="input"
            type='search'
            name='seach'
            id='search'
            placeholder='Busque su Pokemon solo por nombre.'
            value={searchValue}
            onChange={handleSearchChange}
         />
      </div>
   );
}