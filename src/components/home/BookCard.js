import React from 'react';
import CardButtons from './CardButtons'

const BookCard = ({thumbnail, bookTitle, author, id}) => {
    return (
            <div className="card">
                <img src={thumbnail} className="card-img" alt="cover img"/>
                <div className="card-body">
                    <h4 className="card-title">{bookTitle}</h4>
                    <div className="card-text">{author.map((item,i) => <p key={i}>{item}</p>)}</div>
                    <CardButtons id = {id} />
                </div>
            </div>
    );
};

export default BookCard;
