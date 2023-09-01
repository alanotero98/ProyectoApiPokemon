import React, { useEffect } from 'react';
import "./Details.css"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Importa useDispatch y useSelector
import { fetchPokemonDetails } from '../../store/actiones'; // Importa la acción
import "./Details.css";
import { Link } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch(); // Obtiene el despachador de acciones
    const pokemonDetails = useSelector(state => state.pokemonDetails.details); // Obtiene el estado de Redux

    useEffect(() => {
        // Llama a la acción para obtener los detalles del Pokémon
        dispatch(fetchPokemonDetails(id));
    }, [dispatch, id]);

    return (
        <div className='detail'>
            {pokemonDetails ? (
                <div>
                    <h1 className='t'>Name: {pokemonDetails.name}</h1>
                    <img className="imagen" src={pokemonDetails.image} alt="" />
                    <div className='informacion'>
                        <div className='info-hijo'>
                            <h2>ID: {pokemonDetails.id}</h2>
                            <h2>Speed: {pokemonDetails.speed}</h2>
                            <h2>attack: {pokemonDetails.attack}</h2>
                            <h2>Defense: {pokemonDetails.defense}</h2>
                            <h2>Life: {pokemonDetails.hp}</h2>
                            <h2>Height: {pokemonDetails.height}</h2>
                            <h2>Weight: {pokemonDetails.weight}</h2>
                            <button><Link to="/home" className='boton'>Volver</Link></button>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div>Loading...</div>
                    <button><Link to="/home">Home</Link></button>
                </>
            )}
        </div>
    );
}

export default Detail;
