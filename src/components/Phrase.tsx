import { PhraseProps } from "./types/Phrase.type";

export const Phrase: React.FC<PhraseProps> = ({ quote }) => {
  return (
    <>
      <p className="italic text-2xl absolute top-10 text-center w-11/12 mx-auto  inset-x-0">
        "{quote}"
      </p>
    </>
  );
};
