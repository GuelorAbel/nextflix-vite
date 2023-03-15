import Container from "../components/elements/Container";
// image de couverture
import CoverImg from '../assets/netflix-cover.jpg';

export default function Header() {
  return (
    <header className="relative w-full h-[450px] md:h-screen">
      {/* l'image de couverture est juste en dessous */}
      <img src={CoverImg} alt="La photo de couverture de netflix" className="w-full h-full absolute"  />
      {/* le contenu de la page se trouve en dessous */}
      <div className="absolute w-full h-full bg-black/60">
        <Container>
          <div className="flex justify-between items-center py-6">
            {/* le logo est en dessous */}
            <a href="/">
              <img src="/logo-Netflix.png" alt="Le logo de NetFlix" className="w-32 md:w-40 object-cover object-center" />
            </a>
            {/* ici se trouve le bouton de connexion */}
            <button className="md:btn btn-sm md:btn-sm bg-[#ea292e] text-white capitalize font-semibold tracking-widest">inscription</button>
          </div>
          <div className="text-white py-[10%] md:py-[15%] text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">Unlimited movies, TV show, and more.</h1>
            <h5 className="text-2xl mt-9 mb-4">
              Watch anywhere. Cancel anytime.
            </h5>
            <p className="text-xl mb-4">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className="flex w-full justify-center items-center">
            <input type="text" placeholder="Adresse Email" className="p-3 bg-transparent border outline-none btn-md w-2/6" />
            <button className="btn-md bg-[#ea292e] text-white ml-2 font-semibold ">Get Started  </button>
            </div>
          </div>
        </Container>
      </div>

    </header>
  )
}
