import { NextPhraseFunc } from "./types/BtnPhrase.type";

export const BtnPhrase = ({ nextPhrase }: NextPhraseFunc) => {
  const handleNextPhrase = () => {
    nextPhrase();
  };

  return (
    <button
      onClick={handleNextPhrase}
      className="py-4 bg-cyan-400 px-8 rounded-lg hover:cursor-pointer hover:border-2 border-black mt-4"
    >
      Next awesome quote
    </button>
  );
};
