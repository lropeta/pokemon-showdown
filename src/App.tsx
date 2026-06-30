import TeamSelect from "./components/teamSelect"
import OpponentSelect from "./components/OpponentSelect"
import { useState } from "react"
function App() {
  //state to manage battle phase
  const [battlePhase, setBattlePhase] = useState("")
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

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-row gap-8 items-start justify-center p-8">
      <TeamSelect getTeam = {getPlayerTeam}></TeamSelect>
      <OpponentSelect getTeam = {getOpponentTeam}></OpponentSelect>
    </div>
  )
}

export default App
