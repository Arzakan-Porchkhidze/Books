import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {addToFavorites, removeFromFavorites} from '../../redux/index'

function CardButtons({id}) {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);

    //add to favorites 
    const addBtn = (e) => {
        dispatch(addToFavorites(e.target.value));
    }

    // remove from favorites
    const removeBtn = (e) => {
        dispatch(removeFromFavorites(e.target.value));
    }
    return (
        <div>
            {!favorites.includes(id) ? (
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