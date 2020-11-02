import React from 'react';
import CardButtons from './cardButtons'

const BookCard = ({thumbnail, bookTitle, author, id}) => {
    return (
        <div>
            <div className="card">
                <img src={thumbnail} className="card-img-top" alt="cover img"/>
                <div className="card-body">
                    <h5 className="card-title">{bookTitle}</h5>
                    <p className="card-text">{author}</p>
                    <CardButtons id = {id} />
                </div>
            </div>
        </div>
    );
};

export default BookCard;