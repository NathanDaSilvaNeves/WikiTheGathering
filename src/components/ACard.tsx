import React from 'react';
import ICard from '../interfaces/ICard';

const ACard = ({ card }: ICard["cards"]) => {
    const isRectoVerso = card.card_faces
    let name;
    let img;
    if (isRectoVerso) {
        console.log(isRectoVerso[1].image_uris)
        if (!isRectoVerso[1].image_uris === undefined) {
            img = <img src={isRectoVerso[1].image_uris.small} alt={card.name} />
            name = <h2>card.name</h2> 
        }
    } else {
        img = <img src={card.image_uris.small} alt={card.name} />
        name = <h2>{card.name}</h2>
    }

    return (
        <li className="card">
            {img}
            {name}
        </li>
    );
};

export default ACard;