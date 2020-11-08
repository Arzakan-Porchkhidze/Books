import React from 'react';
import { useSelector } from 'react-redux'
import BookCard from '../home/BookCard'
import '../../styles/Favorites.css'


function Favorites() {
    const favorites = useSelector(state => state.favorites)

    return (
        <div className='favBooks-container'>
            {favorites.length > 0 ? (
                <ul className='fav-list'>
                    { favorites.map(book => <li key = {book.id}>
                        <BookCard
                            id = {book.id}
                            thumbnail = {book.volumeInfo.imageLinks.thumbnail} 
                            bookTitle = {book.volumeInfo.title}
                            author = {book.volumeInfo.authors}
                        />
                    </li>
                    )}
                </ul>
                
            ):(
                <h4>You don't have favorite books yet</h4>
            )}
            
        </div>
    );
}

export default Favorites;
