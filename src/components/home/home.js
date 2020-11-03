import React from 'react'
import BookCard from './bookCard'

function Home({bookData}) {

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
           id = {item.id}
           thumbnail = {item.volumeInfo.imageLinks.thumbnail} 
           bookTitle = {item.volumeInfo.title}
           author = {item.volumeInfo.authors}
          /></li>)
          : null 
          }
        </ul>
      </div>
    )
};

export default Home;