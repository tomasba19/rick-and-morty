import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}


const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: [state.myFavorites.filter(fav => fav.id !== Number(payload))]
            }
        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter(character => character.gender === payload)
                
            return{
                ...state,
                myFavorites: allCharactersFiltered
            }
        case ORDER:
            const allCharactersCopy = [...state.allCharacters]
            return{
                ...state,
                myFavorites:
                payload === 'A'
                ? allCharactersCopy.sort((a,b) => a.id - b.id)
                : allCharactersCopy.sort((a,b) => b.id - a.id)
            }
            


        default:
            return{...state};
    }
}



export default reducer;