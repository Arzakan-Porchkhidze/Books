import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES
} from './bookTypes';

const initialState = {
    loading: false,
    books: [],
    favorites: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BOOKS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_BOOKS_SUCCESS:
        return {
          loading: false,
          books: action.payload,
          favorites: [],
          error: ''
        }
      case FETCH_BOOKS_FAILURE:
        return {
          loading: false,
          books: [],
          favorites: [],
          error: action.payload
        }
      case ADD_TO_FAVORITES:
        return {
          ...state,
          favorites: state.favorites.concat(action.payload)
        }
      case REMOVE_FROM_FAVORITES:
        return {
          ...state,
          favorites: state.favorites.filter(id => id !== action.payload)
        }
      default: return state
    }
}
  
export default reducer