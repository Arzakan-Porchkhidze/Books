import React from 'react'
import '../../styles/BookCard.css'
import {Link} from 'react-router-dom'
import FavButton from '../details/FavButton'

function CardButtons({id}) {
    return (
        <div  className = 'button_wrapper'>
            <FavButton id={id} />
            <button className='details_button'>
            <Link to = {`/details/${id}`} >
                read more
            </Link>
            </button>
        </div>
    );
}

export default CardButtons;