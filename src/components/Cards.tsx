//import axios from "axios"
import React, { useEffect, useState } from 'react';
import ICard from "../interface/ICard.tsx";
import ACard from "./ACard.tsx";

const Cards = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        //let cards = [];
        //var counter = 0;
        //while (counter < 31) {
        fetch("https://api.scryfall.com/cards/random") //change for data
            .then((res) => res.json())
            .then((data) => {
                //if(!cards.find(data)) {
                    //cards.push(data);
                    //counter++;
                    setData(data);
                //};
            })
            .catch((err) => console.log(err));
        //}
    }, [])
    console.log(data)
    console.log(typeof data)
    return (
        <div className="Card">

            <ul>
                {
                    data.map((card: ICard["cards"], index: ICard["index"]) => (<ACard key={index} card={card} />))
                }
            </ul>
        </div>
    );
};

export default Cards;