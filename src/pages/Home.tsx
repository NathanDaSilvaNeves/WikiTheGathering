import React, {useContext} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { ManaContext } from '../components/ManaContext.tsx';
import Searchbar from '../components/Searchbar.tsx';
import All from '../assets/img/All.png';
import Blue from '../assets/img/Blue.png';
import Black from '../assets/img/Black.png';
import White from '../assets/img/White.png';
import Red from '../assets/img/Red.png';
import Green from '../assets/img/Green.png';
import Colorless from '../assets/img/Colorless.png';

const Home = () => {
    const { setMana } = useContext(ManaContext);
    const manaList = [{Name: "All", Color: "all", Img:All}, {Name: "Blue", Color: "u", Img:Blue},{Name: "Black", Color: "b", Img:Black},{Name: "White", Color: "w", Img:White},{Name: "Red", Color: "r", Img:Red},{Name: "Green", Color: "g", Img:Green},{Name: "Colorless", Color: "c", Img:Colorless} ]
    //A vérifier si mana est bon

    return (
        <>
            <h1>Home</h1>
            <Searchbar />
            {manaList.map(mana => {
                return(<Link to="/list">
                    <img src={mana.Img} alt={mana.Name+ " mana"} onClick={() => setMana(mana.Color)} />
                     <div className="infos">
                        <h2>{mana.Name}</h2>
                    </div>
                </Link>)
            })}
        </>
    );
};

// 
export default Home;