//import axios from "axios"
import React from 'react';
import ICard from "../interface/ICard.tsx";
import ACard from "./ACard.tsx";

const Cards = ({ cards }) => {
    return (
        <div className="Card">

            <ul className='Ul-card'>
                {
                    cards?.data?.map((card: ICard["cards"], index: ICard["index"]) => (<ACard key={index} card={card} />))
                }
            </ul>
        </div>
    );
};

export default Cards;