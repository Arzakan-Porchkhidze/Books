import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {addToFavorites, removeFromFavorites} from '../../redux/index'

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
        <div>
            {!favBooksId.includes(id) ? (
            <button
                onClick={addBtn}
                className='addBtn'
            >add to favorites
            </button>
            ) : (
            <button
                onClick={removeBtn}
                className='removeBtn'
            >remove from favorites
            </button>
            )}
        </div>
    );
}

export default CardButtons;