import EditCard from "./EditCard";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";


function MovieCard({el,film,setFilm,i}){
        
    return(
                   
         
        <div className="card">
            <h3>{el.title}</h3>
            <Link to={`/Movies/${el.id}`} ><img src={el.posterURL} alt="" style={{width :"184PX", height :"273px"}}/></Link>
            <p>{el.description}</p>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={el.rating} readOnly />
             </Box>
            <EditCard el = {el} film = {film} setFilm = {setFilm} i ={i}></EditCard>
        </div>
                
        
        
    )
}

export default MovieCard;