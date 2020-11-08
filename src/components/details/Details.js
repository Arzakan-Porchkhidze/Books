import React, {useState, useEffect} from 'react'
import axios from 'axios'
import FavButton from './FavButton'
import '../../styles/Details.css'

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
        <div className='details'>
        { book ? (<div className='details-info'>
            <div className='img-and-favButton-div'>
                <img className='book-img' src={book.volumeInfo.imageLinks.thumbnail} alt='book cover' />
                <FavButton id={match.params.id} />
            </div>
            <div className='details-text'>
                <div className='title'>
                    <h2>{book.volumeInfo.title}</h2>
                </div>
                <div className='authors'>
                    <p>By:</p>
                    <div className='author-names'>
                        {book.volumeInfo.authors.map((item,i) => <p key={i}>{item}</p>)}
                    </div>
                </div>
                <div className='description'>
                    <h3>Description:</h3>
                    <p>{book.volumeInfo.description}</p>
                </div>
                <div className='workMeta-details'>
                    <div className='workMeta-detailsRow'>
                        <span className='workMeta-detail'>Publisher:</span>
                        <span className='workMeta-detail'>{book.volumeInfo.publisher}</span>
                    </div>
                    <div className='workMeta-detailsRow'>
                        <span className='workMeta-detail'>Publish Date:</span>
                        <span className='workMeta-detail'>{book.volumeInfo.publishedDate}</span>
                    </div>
                    <div className='workMeta-detailsRow'>
                        <span className='workMeta-detail'>Language:</span>
                        <span className='workMeta-detail'>{book.volumeInfo.language}</span>
                    </div>
                    <div className='workMeta-detailsRow'>
                        <span className='workMeta-detail'>Length:</span>
                        <span className='workMeta-detail'>{book.volumeInfo.pageCount} Pages</span>
                    </div>
                </div>
            </div>
        </div>): null}
        </div>
    );
}

export default Details;
