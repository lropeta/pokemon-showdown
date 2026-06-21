import { fetchPokemon } from "./services/fetchPokemon"

function App() {
  fetchPokemon("pikachu");

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold">Pokemon Showdown</h1>
    </div>
  )
}

export default App
