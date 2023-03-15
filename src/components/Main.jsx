import { useState, useEffect } from 'react'
import axios from 'axios'
import Requests from '../Requests'
// les composants

// les éléments globaux
import Container from './elements/Container'
import Descp from './elements/Descp'

export default function Main() {
      //  état, données
      const [movies, setMovies] = useState([]);
      const movie = movies[Math.floor(Math.random() * movies.length)];
      //  comportements
      useEffect(() =>{
            // récupération des données via GET
            axios.get(Requests.requestPopular).then((resp) => {
                  setMovies(resp.data.results);
            });
      }, []);
      // la fonction qui renvoi un extrait du contenu
      const CoupeText = (str, num) => {
            // je vérifie ici si le nmbre de départ est > que le nmbre de l'arrivée.
            if(str?.length > num) {
                  return str.slice(0, num) +  "...";
            }
            // sinon il renvoi le  texte sans le couper
            else {
                  return str;
            }
      }

      //  vue sur les navigateurs
      return (
      <section className="bg-gray-800 text-white py-10">

            <Container>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-10 uppercase"> à la une</h2>

                  <div className="grid md:grid-cols-2 gap-2">
                        <div className="my-auto">
                              <h3 className="text-3xl uppercase mb-1"> {movie?.title} </h3>
                              <span className="font-bold text-sm italic"> { movie?.release_date } </span>
                              <Descp>
                                    {CoupeText(movie?.overview, 300)}
                              </Descp>
                        </div>
                        {/* bloc de l'image */}
                        <div>
                        <img className='w-full h-full object-cover' 
                              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
                              alt={movie?.title} 
                        />
                        </div>
                  </div>

            </Container>

      </section>
      )
}
