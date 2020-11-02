import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {addToFavorites, removeFromFavorites} from '../../redux/index'

function CardButtons({id}) {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);

    //add to favorites 
    const addBtn = () => {
        dispatch(addToFavorites(id));
    }

    // remove from favorites
    const removeBtn = () => {
        dispatch(removeFromFavorites(id));
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