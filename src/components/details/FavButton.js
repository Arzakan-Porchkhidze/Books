import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {addToFavorites, removeFromFavorites} from '../../redux/index'

function FavButton({id}) {
    const dispatch = useDispatch();
    const favorites = useSelector( state => state.favorites);
    const bookData = useSelector( state => state.books.items);
    console.log(favorites)
    console.log(bookData)

    const favBook = bookData.find(book => book.id === id); //to select book by id

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
                className='details-addBtn'
            ><i className="fa fa-star-o"></i>
            </button>
            ) : (
            <button
                onClick={removeBtn}
                className='details-removeBtn'
            ><i className="fa fa-star"></i>
            </button>
            )}
        </div>
    );
}


export default FavButton;