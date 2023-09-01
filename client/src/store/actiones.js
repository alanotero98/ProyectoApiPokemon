import axios from 'axios';

export const FETCH_POKEMONS_REQUEST = 'FETCH_POKEMONS_REQUEST';
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
export const FETCH_POKEMONS_FAILURE = 'FETCH_POKEMONS_FAILURE';

export const FETCH_POKEMON_DETAILS_REQUEST = 'FETCH_POKEMON_DETAILS_REQUEST';
export const FETCH_POKEMON_DETAILS_SUCCESS = 'FETCH_POKEMON_DETAILS_SUCCESS';
export const FETCH_POKEMON_DETAILS_FAILURE = 'FETCH_POKEMON_DETAILS_FAILURE';
export const ORDER_POKEMONS_BY_ATTACK = 'ORDER_POKEMONS_BY_ATTACK';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const CLEAN_FILTER = 'CLEAN_FILTER';
export const ORIGIN = 'ORIGIN'


export const fetchPokemons = () => {
    return async dispatch => {
        dispatch({ type: FETCH_POKEMONS_REQUEST });

        try {
            const response = await axios.get('http://localhost:3001/pokemons');
            const pokemons = response.data;

            dispatch({
                type: FETCH_POKEMONS_SUCCESS,
                payload: pokemons
            });
        } catch (error) {
            dispatch({
                type: FETCH_POKEMONS_FAILURE,
                payload: error.message
            });
        }
    };
};

export const fetchPokemonDetails = (id) => {
    return async dispatch => {
        dispatch({ type: FETCH_POKEMON_DETAILS_REQUEST });

        
        try {
            const response = await axios.get('http://localhost:3001/pokemons');
            const pokemons = response.data;
            const pokemonDetails = pokemons.find(pokemon => pokemon.id === Number(id));

            dispatch({
                type: FETCH_POKEMON_DETAILS_SUCCESS,
                payload: pokemonDetails
            });
        } catch (error) {
            dispatch({
                type: FETCH_POKEMON_DETAILS_FAILURE,
                payload: error.message
            });
        }
    };
};


export const orderPokemonsByAttack = (order) => ({
  type: ORDER_POKEMONS_BY_ATTACK,
  payload: order, // Puede ser 'asc' o 'desc'
});



export const orderPokeByName = (order) => ({
    type: ORDER_BY_NAME,
    payload: order,
});



export const cleanFilter = () => ({
    type: CLEAN_FILTER,
})

export const originPoke = (order) => ({
    type: ORIGIN,
    payload: order
})