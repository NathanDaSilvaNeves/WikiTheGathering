import React, { useContext, useEffect, useState } from "react";
import { ManaContext } from "../components/ManaContext.tsx";
import Cards from "../components/Cards.tsx";
import Searchbar from "../components/Searchbar.tsx";
import Logo from "../components/Logo.tsx";

function whichMana(Mana) {
  let chosenMana;
  let nameMana;
  switch (Mana) {
    case "all":
      nameMana = "all mana";
      chosenMana =
        "o:%22%7BW%7D%22%20OR%20m:%7BW%7D%20OR%20o:%22%7BU%7D%22%20OR%20m:%7BU%7D%20OR%20o:%22%7BB%7D%22%20OR%20m:%7BB%7D%20OR%20o:%22%7BR%7D%22%20OR%20m:%7BR%7D%20OR%20o:%22%7BG%7D%22%20OR%20m:%7BG%7D%20OR%20o:%22%7BC%7D%22%20OR%20m:%7BC%7D";
      break;
    case "b":
      nameMana = "black";
      chosenMana = "o:%22%7BB%7D%22%20OR%20m:%7BB%7D";
      break;
    case "w":
      nameMana = "white";
      chosenMana = "o:%22%7BW%7D%22%20OR%20m:%7BW%7D";
      break;
    case "r":
      nameMana = "red";
      chosenMana = "o:%22%7BR%7D%22%20OR%20m:%7BR%7D";
      break;
    case "g":
      nameMana = "green";
      chosenMana = "o:%22%7BG%7D%22%20OR%20m:%7BG%7D";
      break;
    case "c":
      nameMana = "colorless";
      chosenMana = "o:%22%7BC%7D%22%20OR%20m:%7BC%7D";
      break;
    case "u":
      nameMana = "blue";
      chosenMana = "o:%22%7BU%7D%22%20OR%20m:%7BU%7D";
      break;
    default:
      nameMana = "all mana";
      chosenMana =
        "o:%22%7BW%7D%22%20OR%20m:%7BW%7D%20OR%20o:%22%7BU%7D%22%20OR%20m:%7BU%7D%20OR%20o:%22%7BB%7D%22%20OR%20m:%7BB%7D%20OR%20o:%22%7BR%7D%22%20OR%20m:%7BR%7D%20OR%20o:%22%7BG%7D%22%20OR%20m:%7BG%7D%20OR%20o:%22%7BC%7D%22%20OR%20m:%7BC%7D";
      break;
  }
  return chosenMana;
}

function whichManaName(Mana) {
  let nameMana;
  switch (Mana) {
    case "all":
      nameMana = "all mana";
      break;
    case "b":
      nameMana = "black";
      break;
    case "w":
      nameMana = "white";
      break;
    case "r":
      nameMana = "red";
      break;
    case "g":
      nameMana = "green";
      break;
    case "c":
      nameMana = "colorless";
      break;
    case "u":
      nameMana = "blue";
      break;
    default:
      nameMana = "all mana";
      break;
  }
  return nameMana;
}

const List = () => {
  const { mana } = useContext(ManaContext);
  //let cards: Array<any>;
  const [data, setData] = useState([]);
  useEffect(() => {
    //var counter = 0;
    //while (counter < 2) {
    fetch("https://api.scryfall.com/cards/search?q=" + whichMana({ mana }.mana)) //change for data
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
    //}
  }, []);
  window.onbeforeunload = function (event) {
    return window.confirm();
  };

  return (
    <div>
      <Logo />
      <div className="search">
        <Searchbar />
        <p>The choosen mana is {whichManaName({ mana }.mana)}</p>
      </div>
      <Cards cards={data} />
    </div>
  );
};

export default List;
