import { useState } from "react";
import Search from "./pokemonSearch";


export default function TeamSelect({getTeam}){
    const [members, setMember] = useState([])
    //Function that receives pokemon data
    function pokeDataReceiver(pokemonObj){
        if(members.length < 3 && !members.includes(pokemonObj)){
            setMember(members.concat(pokemonObj)); //creates a new array w/ old + new index
        } else {
            //general error, can be any erorr
            alert("Error");
        }
    }

    function removePokemon(index){
        console.log("clicked")
        const newTeam = [];
        let newTeamCounter = 0
        for(let i = 0; i < members.length; i++){
            if(i != index){
                newTeam[newTeamCounter] = members[i]
            newTeamCounter++;
            }
        }
        console.log(newTeam);
        setMember(newTeam);
    }

    //display the member images
    const memberImages = [];
    for(let i = 0; i < members.length; i++){
        memberImages.push(
            <div  key = {i} className="flex flex-col">
                <img key = {i} src={members[i].front} className="border-4" />
                <button type="button" className="bg-red-500" onClick={()=>removePokemon(i)}>Remove</button>
            </div>
        );
    }

    //display the confirm team button
    let confirmButton = null;
    if(members.length === 3){
        confirmButton = 
            <button className = "bg-green-500" onClick={()=>getTeam(members)}>Confirm Team?</button>
    }
    return(
        <div className="flex flex-col gap-4 p-4 bg-gray-800 rounded-lg">
            <p className="text-lg font-bold">Your Team</p>
            <Search sendPokemon = {pokeDataReceiver} />
            {/* Display Members */}
            <div className="flex flex-row gap-2">{memberImages}</div>
            {confirmButton}
        </div>
    )    
}
