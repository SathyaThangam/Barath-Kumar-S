// import {combineReducers} from'redux'

// const allReducers = combineReducers({
//     favourites : [],
//     watchlist : []
// })


const initState = {
    cards : [],
    favourites : [],
    watchlist : [],
}

const rootReducer =(state = initState, action )=>{
    console.log(state)
    switch(action.type){
        case 'ADD_FAVOURITE' :
            return{
                ...state,
                favourites : [...state.favourites , action.favourites]
            }
        case 'ADD_WATCHLIST' :
            return{
                ...state,
                watchlist : [...state.watchlist , action.watchlist]
            }
        case 'DELETE_FAVOURITE' :
            return {
                ...state,
                favourites: state.favourites.filter(favourites => favourites.imdbID !== action.favourites.imdbID)
            }
        case 'DELETE_WATCHLIST' :
            return{
                ...state,
                watchlist : state.watchlist.filter(watchlist => watchlist.imdbID !== action.watchlist.imdbID)
            }
        case 'CARDS' :
            return{
                ...state,
                cards : [...action.cards]
            }
        default:
            return state;
    }
}

export default rootReducer;