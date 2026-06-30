import { useState } from "react";
import { fetchPokemon } from "../services/fetchPokemon";

export default function OpponentSelect({getTeam}){
    //Step 1: State variable to track opponent team
    const [members, setMember] = useState([]) //useState(*variable type*)

    //members == getter
    //setMember == setter

    //Add members until length == 3
    async function generateTeam(){

        //local array
        //state variable isn't updated until after the function ends
        let tempArr = [];
        while(tempArr.length < 3){
            //Step 2: variable that generates random pokemon index
            const rand = Math.floor(Math.random() * 1025) + 1;
            const pokemonObj = await fetchPokemon(rand.toString());//only accepts strings
            
            //Step 3: add pokemon to team after error handling
            if(!tempArr.includes(pokemonObj)){
                tempArr[tempArr.length] = pokemonObj;
            }
        }

        //update the state
        setMember(tempArr);
    }
    

    //Step 4: pokemon team images
    const memberImages = [];
    for(let i = 0; i < members.length; i++){
        memberImages.push(<img key = {i} src={members[i].front} className="border-4" />);
    }
    let variableText = null; //assign it to null in case members is always 0
    if(memberImages.length > 0){
         variableText = <p>Opponent Team:</p>
    }

    //function to confirm the opponent team
    let confirmButton = null;
    if(members.length === 3){
        confirmButton = 
            <button className="bg-green-500" onClick={()=>getTeam(members)}>Confirm Team?</button>
    }

    return(
        <div className="flex flex-col gap-4 p-4 bg-gray-800 rounded-lg">
            <p className="text-lg font-bold">Opponent Team</p>
            <button className="bg-gray-600 rounded px-4 py-2" onClick={()=>generateTeam()}>Generate Opponent Team</button>
            {/* Display Members */}
            <div className="flex flex-row gap-2 flex-wrap">{memberImages}</div>
            {confirmButton}
        </div>
    )    
}
