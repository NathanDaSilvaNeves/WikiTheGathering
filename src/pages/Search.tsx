import React, { useContext, useEffect, useState} from 'react';
import Cards from '../components/Cards.tsx';
import Return from '../components/Return.tsx';
import { SearchContext } from '../components/SearchContext.tsx';

const Search = () => {
    const { search } = useContext(SearchContext);
    const [data, setData] = useState([]);
    let result;
    let chosenWord = '';

    function msg() {
        if (data.length <= 0) {
            result = "There is no result "
        } else {
            result = "Here the result for "
            if (chosenWord === '') {
                result = result+' '+{search}.search+'.'
            } else {
                result = result+' '+{chosenWord}.chosenWord+'.'
            }
        }
        return result;
    }
        
    const [word, setWord] = useState('');

    useEffect(() => {
        fetch("https://api.scryfall.com/cards/search?q="+{search}.search) //change for data
            .then((res) => res.json())
            .then((data) => setData(data))
            .then(() =>setWord(msg()))
            .catch((err) => console.log(err));
    }, [])

    const getInputValue = (event)=>{
        // show the user input value to console
        chosenWord = event.target.value;
    };

    function research() {
        setData([]);
        
        fetch("https://api.scryfall.com/cards/search?q="+{chosenWord}.chosenWord) //change for data
            .then((res) => res.json())
            .then((data) => setData(data))
            .then(() => setWord(msg()))
            .catch((err) => console.log(err));

    }
    return (
        <div>
            <h1>Search</h1>
            <Return />
            <div>
                <input type="text" onChange={getInputValue} required></input>
                <button onClick={() =>research()}>Research card</button>
            </div>
            <p>{word}</p>
            <Cards cards={data} />
        </div>
    );
};

export default Search;