import React from 'react';
import { useSelector } from 'react-redux'
import BookCard from '../home/bookCard'


function Favorites() {
    const favorites = useSelector(state => state.favorites)
    const booksData = useSelector(state => state.books);

    const favBooks = booksData.items?
     booksData.items.filter(book => favorites.includes(book.id))
     : null;

    return (
        <div>
            {favBooks ? (
                <ul>
                    { favBooks.map(book => <li>
                        <BookCard
                            id = {book.id}
                            thumbnail = {book.volumeInfo.imageLinks.thumbnail} 
                            bookTitle = {book.volumeInfo.title}
                            author = {book.volumeInfo.authors[0]}
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