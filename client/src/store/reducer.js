import { combineReducers } from 'redux';
import {
    FETCH_POKEMONS_REQUEST,
    FETCH_POKEMONS_SUCCESS,
    FETCH_POKEMONS_FAILURE,
    FETCH_POKEMON_DETAILS_REQUEST,
    FETCH_POKEMON_DETAILS_SUCCESS,
    FETCH_POKEMON_DETAILS_FAILURE, 
    ORDER_POKEMONS_BY_ATTACK,
    ORDER_BY_NAME,
    CLEAN_FILTER,
    ORIGIN
} from './actiones';



const initialState = {
    loading: false,
    pokemons: [],
    pokemonsCopy: [],
    error: null,
    created: 'Creados por usuario',
    pokemonDetails: {},
    orderByAttack: 'asc', // Valor inicial para ordenar
    orderByName: 'A-Z'
};

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMONS_REQUEST:
            return { ...state, loading: true };
        case FETCH_POKEMONS_SUCCESS:
            return { ...state, loading: false, pokemons: action.payload, pokemonsCopy:action.payload ,error: null };
        case FETCH_POKEMONS_FAILURE:
            return { ...state, loading: false, pokemons: [], error: action.payload };
        
            //filtroByAttack
        case ORDER_POKEMONS_BY_ATTACK:            
                const orderedPokemons = [...state.pokemonsCopy].sort((a, b) => {
                  const orderMultiplier = state.orderByAttack === 'asc' ? 1 : -1;
                  return (a.attack - b.attack) * orderMultiplier;
                });
                return {
                  ...state,
                  pokemons: orderedPokemons,
                  orderByAttack: action.payload,
                };

                //filtroByName
         case ORDER_BY_NAME:
                    let pokemonsName= [...state.pokemonsCopy]

                    let sortedPokeName = [];
                    action.payload === "A-Z" ?
                    sortedPokeName = pokemonsName.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())) :
                    sortedPokeName = pokemonsName.sort((a,b)=> b.name.toLowerCase().localeCompare(a.name.toLowerCase()));

                     
                      
                    return{
                      ...state,
                      pokemons:sortedPokeName,
                      orderByName: action.payload,
                    } 
        case CLEAN_FILTER:
                
                return{
                    ...state,
                    pokemons:state.pokemonsCopy,
                    }
        case ORIGIN:
                console.log(action.payload)
                let filtered = [];
                action.payload === 'Creados por usuario' ?
                filtered = [...state.pokemonsCopy].filter((pokemon) => pokemon.hasOwnProperty('createdAtDB')):
                filtered = [...state.pokemonsCopy].filter((pokemon) => !pokemon.hasOwnProperty('createdAtDB'));
                
                console.log(filtered);
        return{
            ...state,
            pokemons: filtered,
            created: action.payload
        }
        
        default:
            return state;
    }
};

const initialPokemonDetailsState = {
    loading: false,
    details: {},
    error: null
};

const pokemonDetailsReducer = (state = initialPokemonDetailsState, action) => {
    switch (action.type) {
        case FETCH_POKEMON_DETAILS_REQUEST:
            return { ...state, loading: true };
        case FETCH_POKEMON_DETAILS_SUCCESS:
            return { ...state, loading: false, details: action.payload, error: null };
        case FETCH_POKEMON_DETAILS_FAILURE:
            return { ...state, loading: false, details: {}, error: action.payload };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    pokemonDetails: pokemonDetailsReducer
});

export default rootReducer;
