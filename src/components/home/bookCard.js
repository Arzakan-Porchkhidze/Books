import React from 'react';

const BookCard = ({thumbnail, bookTitle, author}) => {
    return (
        <div>
            <div className="card">
                <img src={thumbnail} className="card-img-top" alt="cover img"/>
                <div className="card-body">
                    <h5 className="card-title">{bookTitle}</h5>
                    <p className="card-text">{author}</p>
                    <button className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;