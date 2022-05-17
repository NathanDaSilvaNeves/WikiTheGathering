import React, {useContext} from 'react';
import { ManaContext } from '../components/ManaContext.tsx';
import Cards from '../components/Cards.tsx';


const List = () => {
    const { mana } = useContext(ManaContext);
    return (
        <div>
            <h1>List</h1>
            <p>the choosen mana is {mana}</p>
            <Cards />
        </div>
    );
};

export default List;