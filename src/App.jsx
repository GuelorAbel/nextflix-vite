// les composants
import Header from "./components/Header";
import Main from "./components/Main";
import Movies from "./components/Movies";
// les données
import Requests from "./Requests";


export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Movies title='à venir' fetchURL={Requests.requestUpcoming} />
      <Movies title='Populaire' fetchURL={Requests.requestPopular} />
      <Movies title='Tendance' fetchURL={Requests.requestTrending} />
      <Movies title='Les mieux notés' fetchURL={Requests.requestTopRated} />
      <Movies title='Horreur' fetchURL={Requests.requestHorror} />
    
    </>
  )
}
