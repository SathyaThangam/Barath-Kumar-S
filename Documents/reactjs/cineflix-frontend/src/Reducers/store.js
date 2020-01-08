// import {combineReducers} from'redux'

// const allReducers = combineReducers({
//     favourites : [],
//     watchlist : []
// })


const initState = {
    api : false,
    cards : [],
    favourites : [],
    watchlist : [], 
}

const rootReducer =(state = initState, action )=>{
    switch(action.type){
        case 'FETCHED' :
            return{
                ...state,
                api : true,
            }
        case 'SHOW_FAVOURITE' :
            return{
                ...state,
                favourites : [...state.favourites , ...action.favourites]
            }
        case 'SHOW_WATCHLIST' :
            return{
                ...state,
                watchlist : [...state.watchlist , ...action.watchlist]
            }
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