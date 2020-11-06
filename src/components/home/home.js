import React from 'react'
import BookCard from './BookCard'
import '../../styles/Home.css'

function Home({bookData}) {
  const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    color: '#918e8e',
    fontSize: '50px'
  }
  const errorStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    color: '#ba2929',
    fontSize: '30px'
  }

    return bookData.loading ? (
      <div style={loadingStyle}>
        <h2 className='loading-text'>Loading...</h2>
      </div>
    ): bookData.error ? (
      <div style={errorStyle}>
        <h2>{bookData.error}</h2>
      </div>
      
    ): (
      <div className = 'booksContainer'>
        <ul className = 'bookList'>
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