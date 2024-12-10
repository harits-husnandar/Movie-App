import React from "react"

type MovieCardProps = {
    movie:{
        Title: string
        Year: string
        Poster: string
        imdbId: string
    }
}

const MovieCard = ({movie}:MovieCardProps)=>{
    return (
    <div className="bg-gray-900 p-4 shadow-md cursor-pointer">
        <img src={movie.Poster} alt={movie.Title} className="rounded-lg"/>
        <h3 className="text-white mt-2 text-lg font-semibold">
        {movie.Title}
        </h3>
        <p className="text-gray-400">{movie.Year}</p>
    </div>
    )
}

export default MovieCard