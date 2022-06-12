import React from 'react';
import ICard from '../interfaces/ICard';

const ACard = ({ card }: ICard["cards"]) => {
    const isRectoVerso = card.card_faces
    let aCard;
    if (isRectoVerso) {
        if (!isRectoVerso[1].image_uris === undefined) {
            aCard = <li className="card"><img src={isRectoVerso[1].image_uris.small} alt={card.name} /><h2>card.name</h2></li>
        }
    } else {
        aCard = <li className="card"><img src={card.image_uris.small} alt={card.name} /><h2>{card.name}</h2></li>
    }


    return aCard;
};

export default ACard;