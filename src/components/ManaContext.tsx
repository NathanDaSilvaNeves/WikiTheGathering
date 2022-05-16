import React from "react";

interface IManaContext {
    mana: any;
    setMana: any;
}

export const ManaContext = React.createContext<IManaContext>(
    {} as IManaContext
);