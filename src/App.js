import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import {Route} from "react-router-dom";
import NavbarMovie from './Components/NavbarMovie'
import MovieApp from './MovieApp';
import Child from './Components/Child'


function App() {

  const [film,setFilm] = useState(
    [
      {title : "The Father" , description : "Film de Florian Zeller avec Olivia Colman, Anthony Hopkins, Mark Gatiss" , posterURL : "/1.jpg" ,trailer : 'https://www.youtube.com/embed/4TZb7YfK-JI', rating : 5,id : 1 },
      {title : "Nomadland " , description : "Film de Chloé Zhao avec Frances McDormand, David Strathairn, Gay DeForest" , posterURL : "/2.jpg" ,trailer : 'https://www.youtube.com/embed/6sxCFZ8_d84', rating : 3,id : 2 },
      {title : "Les Mitchell contre les machines" , description : "Long-métrage d'animation de Michael Rianda et Jeff Rowe avec Abbi Jacobson, Danny McBride, Maya Rudolph" , posterURL : "/3.jpg",trailer : 'https://www.youtube.com/embed/QolEkXbxupw' , rating : 2,id : 3 },
      {title : "Zack Snyder's Justice League " , description : "Film de Zack Snyder avec Ben Affleck, Gal Gadot, Henry Cavill" , posterURL : "/4.jpg",trailer : 'https://www.youtube.com/embed/vM-Bja2Gy04' , rating : 5,id : 4 }
    ]
      );


  return (
    <div>
      <NavbarMovie film = {film} setFilm = {setFilm}/>
      
      <Route exact path="/" component={Home}  />
      <Route exact path="/Movies" component={() => <MovieApp film={film} setFilm={setFilm} />}  />
      <Route  exact path="/Movies/:slug" children={<Child film = {film} />} /> 
    </div>

   
  );
}

export default App;
