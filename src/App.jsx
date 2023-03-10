import Container from "./components/elements/Container";
// image de couverture
import CoverImg from './assets/netflix-cover.jpg';


export default function App() {
  return (
    <section className="relative w-full h-[450px] md:h-screen">
      {/* l'image de couverture est juste en dessous */}
      <img src={CoverImg} alt="La photo de couverture de netflix" className="w-full h-full absolute"  />
      <div className="absolute w-full h-full bg-black/60">
        <Container>
          <div className="flex justify-between items-center py-6">
            {/* le logo est en dessous */}
            <a href="/">
              <img src="/logo-Netflix.png" alt="Le logo de NetFlix" className="w-32 md:w-40 object-cover object-center" />
            </a>
            {/* ici se trouve le bouton de connexion */}
            <button className="md:btn btn-sm md:btn-md bg-[#ea292e] text-white capitalize font-semibold tracking-widest">inscription</button>
          </div>
          <div className="text-white py-[10%] md:py-[15%] text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black">Unlimited movies, TV show, and more.</h1>
            <h5 className="text-2xl mt-9 mb-4">
              Plans now start at USD2.99/month.
            </h5>
            <input type="text" placeholder="Adresse Email" className="p-3 bg-transparent border outline-none btn-lg" />
            <button className="btn-lg bg-[#ea292e] text-white ml-2 ">Get Started  </button>
          </div>
        </Container>
      </div>

    </section>
  )
}
