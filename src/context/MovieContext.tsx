import { createContext, useContext, useState } from "react"
import { getMovieDetails, searchMovies } from "../api/omdbApi"

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
    selectMovie: (id:string)=>Promise<void>
    closeMovie: ()=>void
}

const MovieContext = createContext<MovieContextType | undefined>(undefined)

type MovieProviderProps ={
    children : React.ReactNode
}

export const MovieProvider = ({children}:MovieProviderProps)=>{
    // state dari movies
    const [movies, setMovies] = useState<Movie[]>([])

    // state selectedMovie
    const [selectedMovie, setSelectedMovie] = useState<MovieDetail | null>(null)

    // search movies
    const searchMoviesHandler = async (query:string) =>{
        const result = await searchMovies(query) 
        setMovies(result || [])
    }

    const selectedMoviesHandler = async(id:string)=>{
        const movieDetails = await getMovieDetails(id)
        setSelectedMovie(movieDetails)
    }

    const closeMovieHandler = ()=>{
        setSelectedMovie(null)
    }

    return(
        <MovieContext.Provider value={{
            movies,
            selectedMovie,
            searchMovies: searchMoviesHandler,
            selectMovie: selectedMoviesHandler,
            closeMovie: closeMovieHandler
        }}>
            {children}
        </MovieContext.Provider>
    )
}

// custon hooks untuk useContext
export const useMovieContext =()=>{
    const context = useContext(MovieContext)
    if(context === undefined){
        throw new Error('useMovieContext must be used within a MovieProvider')
    }
    return context
}

