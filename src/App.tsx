import TeamSelect from "./components/teamSelect"
import OpponentSelect from "./components/OpponentSelect"
import { useState } from "react"
function App() {
  //state to manage battle phase
  const [battlePhase, setBattlePhase] = useState("Selection")
  const [playerTeam, setPlayerTeam] = useState([]); //staet of user team
  const [opponentTeam, setOpponentTeam] = useState([]); //state of opponent team

  //function to get the player team
  function getPlayerTeam(team){
    setPlayerTeam(team);
  }

  //funciton to get the opponent team
  function getOpponentTeam(team){
    setOpponentTeam(team);
  }

  //start battle button
  let startBattle = null;
  if(playerTeam.length === 3 && opponentTeam.length ===3){
    startBattle = <button onClick={()=>setBattlePhase("Battle")}>Start Battle</button> 
  }

  const selectionUI = 
        <div className="min-h-screen bg-gray-900 text-white flex flex-row gap-8 items-start justify-center p-8">
          <TeamSelect getTeam = {getPlayerTeam}></TeamSelect>
          <OpponentSelect getTeam = {getOpponentTeam}></OpponentSelect>
          {startBattle}
        </div>

  const battleUI = null;
  

  return (
    <>
      {battlePhase == "Selection" ? 
        selectionUI 
      : battleUI}
    </>
  )
}

export default App
