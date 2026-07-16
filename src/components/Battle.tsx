import { useState } from "react";
import HUD from "./HUD";

export default function Battle({getUserTeam, getOpponentTeam}){
    //step 1: get the teams to track whos dead and whatnot
    const [opponentTeam, setOpponentTeam] = useState([getOpponentTeam]);

    //step 2: health bar?

    return(
        <>
            <HUD pokemonObj = {getUserTeam[0]} currHealth = {getUserTeam[0].hp}></HUD>
        </>
    )
}