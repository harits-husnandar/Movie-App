import SearchBar from "./components/SearchBar"
import MovieList from "./components/MovieList"
import MovieModal from "./components/MovieModal"

function App() {

  const selectedMovie = false 

  return (
    <div className='min-h-screen bg-black text-white'>
      <SearchBar/>
      <MovieList/>
      {selectedMovie && <MovieModal/>}
    </div>
  )
}

export default App
