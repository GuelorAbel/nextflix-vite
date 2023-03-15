import { useState, useEffect } from "react"
import axios from 'axios'
//  les composants utilies
import SingleMovie from './SingleMovie'
import Container from "./elements/Container";


export default function Movies({ fetchURL, title}) {
      //  Mes états ou données
      const [movies, setMovies] = useState([]);

      //  Ensemble des comportements du composant
      useEffect(() => {
            axios.get(fetchURL).then((resp) => {
                  setMovies(resp.data.results);
            });
      }, [fetchURL]);

      //  Vue du composant sur les navigateurs
      return (
      <section className="py-10 bg-gray-800">
            <Container>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6 uppercase"> {title} </h2>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
                        {/* récupération des données via MAP() */}
                        {
                              movies.map((item, id) => (
                                    <SingleMovie key={id} item={item} />
                              ))
                        }
                  </div>
            </Container>
      </section>
      )
}
