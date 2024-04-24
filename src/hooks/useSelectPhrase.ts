import { useState } from "react";
import phrases from "../data/phrases.json";
import getRandomNumber from "../utils/getRandomNumber";
import photos from "../data/photos.json";
import { Phrase, selectPhraseReturn } from "../data/phrases.type";

const useSelectPhrase = (): selectPhraseReturn => {
  const randomIndex: number = getRandomNumber(phrases.length);
  const [selectedPhrase, setSelectedPhrase] = useState<Phrase>(
    phrases[randomIndex]
  );
  const [photoIndex, setPhotoIndex] = useState<number>(
    photos[getRandomNumber(photos.length)]
  );

  const { place, quote, movie } = selectedPhrase;

  const nextPhrase = () => {
    setSelectedPhrase(phrases[getRandomNumber(phrases.length)]);
    setPhotoIndex(photos[getRandomNumber(photos.length)]);
  };

  return {
    place,
    quote,
    movie,
    nextPhrase,
    photoIndex,
  };
};

export default useSelectPhrase;
