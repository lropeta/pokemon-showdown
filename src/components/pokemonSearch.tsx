import { useState } from "react";
import { fetchPokemon } from "../services/fetchPokemon";


export default function Search(){
    //State calls
    const [inputValue, setInputValue] = useState(""); //state to manage search input
    const [pokeData, setPokeData] = useState(null); //state to manage search output, poke

    //function called to whenever we need to re-render
    async function changeUI(){
        //step 1: store the raw pokemon data
        const apiCall = await fetchPokemon(inputValue);
        //step 2: re-render the ui according to the input pokemon 
        setPokeData(apiCall);
    }


    return (
        <div>
            {/* if the data is null, render nothing */}
            {pokeData ? 
                <>
                    <img src={pokeData.front}/> 
                    <p>Name: {pokeData.name}</p>
                    <p>HP: {pokeData.hp}</p>
                    <p>ATK: {pokeData.attack}</p>
                    <p>DEF: {pokeData.defense}</p>
                </>
            : null}

            <input type="text" placeholder="Pikachu..." onChange={
                (e) => setInputValue(e.target.value) //Run the output function each time the input is changed
            }/>
            <button onClick={changeUI}>Search</button>
        </div>
    )
}
