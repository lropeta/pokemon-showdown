import TeamSelect from "./components/teamSelect"
import OpponentSelect from "./components/OpponentSelect"
function App() {

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <TeamSelect></TeamSelect>
      <OpponentSelect></OpponentSelect>
    </div>
  )
}

export default App
