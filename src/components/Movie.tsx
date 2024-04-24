import { MovieProps } from "./types/Movie.type";

export const Movie = ({ movie }: MovieProps) => {
  return (
    <>
      <span className="absolute right-12 bottom-10 text-xl text-slate-500 italic">
        {movie}
      </span>
    </>
  );
};
