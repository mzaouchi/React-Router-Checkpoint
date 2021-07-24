import { useState } from 'react';
import FilterCard from './Components/FilterCard';
import MovieList from './Components/MovieList';
function MovieApp({film,setFilm}){

    
        
          const[textT,setTextT] = useState('');
          const[rateR,setRateR] = useState('');
    return(
        <div>
            <br/>                       
            <FilterCard  setTextT = {setTextT} setRateR = {setRateR} textT = {textT} rateR = {rateR}></FilterCard>
            <br/>
            <MovieList film = {film}  textT = {textT} rateR = {rateR} setFilm={setFilm}></MovieList>
            
            
        </div>
    )
}
export default MovieApp;