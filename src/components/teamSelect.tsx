import { useState } from "react";
import Search from "./pokemonSearch";


export default function TeamSelect(){
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

    const memberImages = [];
    for(let i = 0; i < members.length; i++){
        memberImages.push(<img key = {i} src={members[i].front} className="border-4" />);
    }
    return(
        <>
            <Search sendPokemon = {pokeDataReceiver} />
            {console.log(members)}
            {/* Display Members */}
            {memberImages}
        </>
    )    
}
