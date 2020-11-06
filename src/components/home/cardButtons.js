import React from 'react'
import '../../styles/BookCard.css'
import { useSelector, useDispatch } from 'react-redux'
import {addToFavorites, removeFromFavorites} from '../../redux/index'
import {Link} from 'react-router-dom'

function CardButtons({id}) {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const bookData = useSelector(state => state.books);

    const favBook = bookData.items.find(book => book.id === id); //to select book by id

    const favBooksId = favorites.map(book => book.id); // to check all favBooks id

    //add to favorites 
    const addBtn = () => {
        dispatch(addToFavorites(favBook));
    }

    // remove from favorites
    const removeBtn = () => {
        dispatch(removeFromFavorites(favBook));
    }
    return (
        <div  className = 'button_wrapper'>
            {!favBooksId.includes(id) ? (
            <button
                onClick={addBtn}
                className='addBtn'
            ><i className="fa fa-star-o"></i>
            </button>
            ) : (
            <button
                onClick={removeBtn}
                className='removeBtn'
            ><i className="fa fa-star"></i>
            </button>
            )}
            <button className='details_button'>
            <Link to = {`/details/${id}`} >
                read more
            </Link>
            </button>
        </div>
    );
}

export default CardButtons;