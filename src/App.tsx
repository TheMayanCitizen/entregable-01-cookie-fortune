import "./App.css";
import { BtnPhrase, Movie, Phrase } from "./components";
import useSelectPhrase from "./hooks/useSelectPhrase";

function App() {
  const { movie, quote, nextPhrase, photoIndex } = useSelectPhrase();

  const objStyle = {
    backgroundImage: `url(images/fondo${photoIndex}.png)`,
  };

  return (
    <div
      style={objStyle}
      className="min-h-screen w-screen flex flex-col justify-center items-center  bg-cover bg-no-repeat bg-center "
    >
      <h1 className="text-center absolute top-48 font-bold text-3xl">
        Awesome Quotes from Movies
      </h1>

      <article className="bg-rectangle bg-cover bg-no-repeat w-[90%] max-w-xl mx-auto text-center text-2xl h-56 relative ">
        <Phrase quote={quote} />
        <Movie movie={movie} />
      </article>
      <BtnPhrase nextPhrase={nextPhrase} />
    </div>
  );
}

export default App;
