import { useState } from "react";
import HUD from "./HUD";

export default function Battle({getUserTeam, getOpponentTeam}){
    //step 1: get the teams to track whos dead and whatnot
    const [opponentTeam, setOpponentTeam] = useState([getOpponentTeam]);
    const [userTeam, setUserTeam] = useState([getUserTeam]);

    //step 2: health bar?

    //step 3: sprites
    let currOpponentSprite = <img src={getOpponentTeam[0].front} className="w-1/4 h-auto object-contain" />
    let currUserSprite = <img src={getUserTeam[0].back} className="w-1/3 h-auto object-contain" />

    return(
        <div className="min-h-screen bg-gray-900 text-white grid grid-cols-2 grid-rows-2 gap-4 p-8 items-center">
            <HUD pokemonObj={getOpponentTeam[0]} currHealth={getOpponentTeam[0].hp} />
            <div className="flex justify-end">{currOpponentSprite}</div>
            <div className="flex justify-start">{currUserSprite}</div>

            <div className="flex justify-end"><HUD pokemonObj={getUserTeam[0]} currHealth={getUserTeam[0].hp} /></div>
        </div>
    )
}