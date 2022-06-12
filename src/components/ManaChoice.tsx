import React from "react";
import { ManaContext } from "../components/ManaContext.tsx";

const ManaChoice = (mana: ManaContext) => {
  {
    console.log(mana.mana.Color);
    return (
      <div className="manachoice">
        <img src={mana.mana.Img} alt={mana.mana.Name + " mana"} />
        <div className="infos">
          <h2>{mana.mana.Name}</h2>
        </div>
      </div>
    );
  }
};

export default ManaChoice;
