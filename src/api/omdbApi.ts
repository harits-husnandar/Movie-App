const API_KEY = '4f637245'
const BASE_URL = 'http://www.omdbapi.com/'

// function search film 

export const searchMovies = async(query:string)=>{
    const response = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`)

    const data = await response.json()

    return data.Search 
}

// function detail film berdasarkan id omdb

export const getMovieDetails = async(id:string)=>{
    const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`)

    const data = await response.json()

    return data
}