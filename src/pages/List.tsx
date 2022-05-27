import React, {useContext, useEffect, useState} from 'react';
import { ManaContext } from '../components/ManaContext.tsx';
import Cards from '../components/Cards.tsx';

function whichMana(Mana) {
    let chosenMana;
    switch (Mana) {
        case "all":
            chosenMana= "o:%22%7BW%7D%22%20OR%20m:%7BW%7D%20OR%20o:%22%7BU%7D%22%20OR%20m:%7BU%7D%20OR%20o:%22%7BB%7D%22%20OR%20m:%7BB%7D%20OR%20o:%22%7BR%7D%22%20OR%20m:%7BR%7D%20OR%20o:%22%7BG%7D%22%20OR%20m:%7BG%7D%20OR%20o:%22%7BC%7D%22%20OR%20m:%7BC%7D"
        break;
        case "b":
            chosenMana= "o:%22%7BB%7D%22%20OR%20m:%7BB%7D"
        break;
        case "w":
            chosenMana= "o:%22%7BW%7D%22%20OR%20m:%7BW%7D";
        break;
        case "r":
            chosenMana= "o:%22%7BR%7D%22%20OR%20m:%7BR%7D";
        break;
        case "g":
            chosenMana= "o:%22%7BG%7D%22%20OR%20m:%7BG%7D";
        break;
        case "c":
            chosenMana= "o:%22%7BC%7D%22%20OR%20m:%7BC%7D";
        break;
        case "u":
            chosenMana= "o:%22%7BU%7D%22%20OR%20m:%7BU%7D";
        break;
        default :
            chosenMana= "o:%22%7BW%7D%22%20OR%20m:%7BW%7D%20OR%20o:%22%7BU%7D%22%20OR%20m:%7BU%7D%20OR%20o:%22%7BB%7D%22%20OR%20m:%7BB%7D%20OR%20o:%22%7BR%7D%22%20OR%20m:%7BR%7D%20OR%20o:%22%7BG%7D%22%20OR%20m:%7BG%7D%20OR%20o:%22%7BC%7D%22%20OR%20m:%7BC%7D";
        break;
    }
    return chosenMana;
}

const List = () => {
    const { mana } = useContext(ManaContext);
    //let cards: Array<any>;
    const [data, setData] = useState([]);
    useEffect(() => {
        //var counter = 0;
        //while (counter < 2) {
        fetch("https://api.scryfall.com/cards/search?q="+whichMana({ mana }.mana)) //change for data
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
        //}
    }, [])
    return (
        <div>
            <h1>List</h1>
            <p>the choosen mana is {mana}</p>
            <Cards cards={data} />
        </div>
    );
};

export default List;