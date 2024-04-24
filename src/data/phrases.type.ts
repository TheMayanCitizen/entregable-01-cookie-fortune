export interface Phrase {
  place: number;
  year?: number;
  quote: string;
  movie: string;
}

export interface selectPhraseReturn extends Phrase {
  nextPhrase: () => void;
  photoIndex: number;
}
