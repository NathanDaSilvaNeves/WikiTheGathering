import React, {useContext} from 'react';
import { ManaContext } from '../components/ManaContext.tsx';


const List = () => {
    const { mana } = useContext(ManaContext);
    return (
        <div>
            <h1>List</h1>
            <p>the choosen mana is {mana}</p>
        </div>
    );
};

export default List;