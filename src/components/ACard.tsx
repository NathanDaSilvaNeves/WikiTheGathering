import React from 'react';
import ICard from '../interfaces/ICard';

const ACard = ({ card }: ICard["cards"]) => {
    const isRectoVerso = card.card_faces
    let img;
    if (isRectoVerso) {
        img = <img src={isRectoVerso[1].image_uris.small} alt={card.name} /> 
    } else {
        img = <img src={card.image_uris.small} alt={card.name} />
    }

    return (
        <li className="card">
            {img}
            <h2>{card.name}</h2>
        </li>
    );
};

export default ACard;