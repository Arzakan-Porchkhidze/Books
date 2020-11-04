import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Details({match}) {
    const [book, setBook] = useState();
    useEffect( () => {
        axios
        .get(`https://www.googleapis.com/books/v1/volumes/${match.params.id}?key=AIzaSyDuIPd1eaJXwmOZXm_UDsz4GL6S88VdBYk`)
        .then( resoponse => {
            //console.log(resoponse.data)
            setBook(resoponse.data)
        })
        .catch(error => {
           return error.message
        })
    }, [match.params.id]);
    return (
        <div>
        { book ? (<div>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt='book cover' />
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors[0]}</p>
            <p>Category: {book.volumeInfo.categories[0]}</p>
              <h3>Description</h3>
              <p>{book.volumeInfo.description}</p>
              <h4>Publisher</h4>
              <p>{book.volumeInfo.publisher}</p>
              <h5>Publish Date</h5>
              <p>{book.volumeInfo.publishedDate}</p>
            </div>): null}
        </div>
    );
}

export default Details;