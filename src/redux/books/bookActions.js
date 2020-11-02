import axios from 'axios'
import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE
} from './bookTypes'

export const fetchBooksRequest = () => {
    return {
      type: FETCH_BOOKS_REQUEST
    }
};
  
export const fetchBooksSuccess = books => {
    return {
      type: FETCH_BOOKS_SUCCESS,
      payload: books
    }
};
  
export const fetchBooksFailure = error => {
    return {
      type: FETCH_BOOKS_FAILURE,
      payload: error
    }
};

export const fetchBooks = () => {
    return (dispatch) => {
      dispatch(fetchBooksRequest());
        axios
        .get('https://www.googleapis.com/books/v1/volumes?q=subject:comedy&key=AIzaSyDuIPd1eaJXwmOZXm_UDsz4GL6S88VdBYk')
        .then(response => {
          console.log(response.data)
          const books = response.data
          dispatch(fetchBooksSuccess(books));
        })
        .catch(error => {
          dispatch(fetchBooksFailure(error.message))
        })
      }
};