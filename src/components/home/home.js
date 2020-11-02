import React, {useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBooks } from '../../redux/index'
import BookCard from './bookCard'

function Home() {
  const bookData = useSelector(state => state);
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBooks());
    }, []);

    return bookData.loading ? (
      <h2>Loading</h2>
    ): bookData.error ? (
      <h2>{bookData.error}</h2>
    ): (
      <div>
        <ul>
          {bookData.books.items? bookData.books.items
           .map((item) => <li key={item.id}>
           <BookCard
           thumbnail = {item.volumeInfo.imageLinks.thumbnail} 
           bookTitle = {item.volumeInfo.title}
           author = {item.volumeInfo.authors[0]}
          /></li>)
          : null 
          }
        </ul>
      </div>
    )
};

export default Home;