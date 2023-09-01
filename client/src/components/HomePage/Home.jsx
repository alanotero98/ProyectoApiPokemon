import SearchBar from '../SearchBar/SearchBar'
import './Home.css'
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons } from '../../store/actiones';
import { orderPokemonsByAttack, orderPokeByName, cleanFilter, originPoke} from '../../store/actiones';
import './Home.css';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';


const ITEMS_PER_PAGE = 12;

const Home = ({ pokemons, loading, error, created, fetchPokemons, orderByAttack, orderPokemonsByAttack ,orderByName, orderPokeByName, cleanFilter, originPoke }) => {
  
   const [currentPage, setCurrentPage] = useState(1);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  
  useEffect(() => {
     fetchPokemons();
  }, [fetchPokemons]);

  useEffect(() => {
     // Cuando se actualizan los pokémones originales, también actualiza los pokémones filtrados
     setFilteredPokemons(pokemons);
  }, [pokemons]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
 };


 //filtro de orden por ataque
 const handleOrderChange = () => {
   const newOrder = orderByAttack === 'asc' ? 'desc' : 'asc';
   orderPokemonsByAttack(newOrder);
 };
 // filtro de order por nombre

 const handleOrderName = () => {
   const newOrder = orderByName === 'A-Z' ? 'Z-A' : 'A-Z';
   orderPokeByName(newOrder)

 }

 //limpiar filtros

 const handleAllPoke = () => {
      cleanFilter()
 }
//origen Poke

const handleOriginPoke = () => {
   const newOrder = created === 'Creados por usuario' ? 'Preexistentes' : 'Creados por usuario';
   originPoke(newOrder)
   console.log(created);
}



  const filterPokemons = (searchValue) => {
    if (searchValue.trim() === '') {
       // Si el valor de búsqueda está vacío, muestra todos los pokémones
       setFilteredPokemons(pokemons);
    } else {
       // Filtra los pokémones en base al valor de búsqueda
       const filtered = pokemons.filter(pokemon =>
          pokemon.name.toLowerCase() === searchValue.toLowerCase()
       );
       setFilteredPokemons(filtered);
    }
 };

 


  if (loading) {
     return <div>Loading...</div>;
  }

  if (error) {
     return <div>Error: {error}</div>;
  }

    // Calcula el índice inicial y final de los Pokémones en la página actual
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
 
   // Filtra los Pokémones por página
   const pokemonsByPage = filteredPokemons.slice(startIndex, endIndex);

   


  return (
     <div className='home'>
      
        <Link to={`/landing`}><button className='botonLanding'>Volver al Landing Page</button> </Link>
        <Link to="/create"><button className='botonCrear'>Crear Nuevo Pokémon</button></Link>
        
        <SearchBar filterPokemons={filterPokemons} />
        <button className='botonPoke' onClick={handleAllPoke}>Todos los Pokemons</button>
        <button className='botonAtaque' onClick={handleOrderChange}>
         Ordenar por Ataque ({orderByAttack})
        </button>

        <button className='botonName' onClick={handleOrderName}>
         Ordenar por Name ({orderByName})
        </button>

        <button className='botonCreado' onClick={handleOriginPoke}>Pokemons ({created})</button>
        
        <div className='Container'>
           <Container pokemons={pokemonsByPage} />
        </div>
        <div className='pagination'>
            {/* Crea botones de paginación para cambiar de página */}
            {Array.from({ length: Math.ceil(filteredPokemons.length / ITEMS_PER_PAGE) }).map((_, index) => (
               <button
                  key={index}
                  className={currentPage === index + 1 ? 'active' : ''}
                  onClick={() => handlePageChange(index + 1)}
               >
                  {index + 1}
               </button>
            ))}
         </div>
     </div>
  );
};

const mapStateToProps = state => ({
  pokemons: state.pokemon.pokemons,
  loading: state.pokemon.loading,
  orderByAttack: state.pokemon.orderByAttack,
  orderByName: state.pokemon.orderByName,
  created: state.pokemon.created,
  error: state.pokemon.error,
});

export default connect(mapStateToProps, { fetchPokemons, orderPokemonsByAttack, orderPokeByName, cleanFilter, originPoke})(Home);

