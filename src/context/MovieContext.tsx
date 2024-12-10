interface Movie  {
        Title: string
        Year: string
        Poster: string
        imdbId: string
}

interface MovieDetail extends Movie{
    Plot: string
    Genre: string
    Director: string
    Released: string
    Actors: string
    imdbRating: string
}

interface MovieContextType {
    movies: Movie[]
    selectedMovie: MovieDetail | null
    searchMovies: (query:string)=>Promise<void>
    selectedMovies: (id:string)=>Promise<void>
    closeMovie: ()=>void
}

const MovieContext = createContext
