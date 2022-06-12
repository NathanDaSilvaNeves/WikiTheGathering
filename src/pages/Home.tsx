import React, { useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ManaContext } from "../components/ManaContext.tsx";
import Searchbar from "../components/Searchbar.tsx";
import All from "../assets/img/All.png";
import Blue from "../assets/img/Blue.png";
import Black from "../assets/img/Black.png";
import White from "../assets/img/White.png";
import Red from "../assets/img/Red.png";
import Green from "../assets/img/Green.png";
import Colorless from "../assets/img/Colorless.png";
import ManaChoice from "../components/ManaChoice.tsx";

const Home = () => {
  const { setMana } = useContext(ManaContext);
  //A vérifier si mana est bon
  const manaList = [
    { Name: "All", Color: "all", Img: All },
    { Name: "Blue", Color: "u", Img: Blue },
    { Name: "Black", Color: "b", Img: Black },
    { Name: "White", Color: "w", Img: White },
    { Name: "Red", Color: "r", Img: Red },
    { Name: "Green", Color: "g", Img: Green },
    { Name: "Colorless", Color: "c", Img: Colorless },
  ];

  return (
    <>
      <h1>Home</h1>
      <Searchbar />
      <div className="manachoice">
        <ul className="Ul-mana">
          {manaList.map((mana) => {
            return (
              <li className="mana">
                <Link to="/list" onClick={() => setMana(mana.Color)}>
                  <ManaChoice mana={mana} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Home;

/*
{manaList.map((mana) => {
        console.log(mana.Color);
        return (
          <Link to="/list">
            <img
              src={mana.Img}
              alt={mana.Name + " mana"}
              onClick={() => setMana(mana.Color)}
            />
            <div className="infos">
              <h2>{mana.Name}</h2>
            </div>
          </Link>
        );
      })}
*/
