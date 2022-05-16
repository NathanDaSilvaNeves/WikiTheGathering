import React from 'react';

const mana = [{Name: "All", Color: "all", Img:"All.png"}, {Name: "Blue", Color: "u", Img:"Blue.png"},{Name: "Black", Color: "b", Img:"Black.png"},{Name: "White", Color: "w", Img:"White.png"},{Name: "Red", Color: "r", Img:"Red.png"},{Name: "Green", Color: "g", Img:"Green.png"},{Name: "Colorless", Color: "c", Img:"Colorless.png"} ]
//A vérifier si mana est bon
const Card = () => {
    return (
        mana.forEach(mana => {
            <li className="mana">
            <img src={mana.Img} alt={mana.Name+ " mana"} />
            <div className="infos">
                <h2>{mana.Name}</h2>
            </div>
        </li>
        })
    );
};

export default Card;