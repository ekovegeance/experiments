import React from "react";
import MovieItem from "./movie-item";
import { ScrollArea } from "../ui/scroll-area";

interface MoivesProps {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export default function MoiveList({ movies, onSelectMovie }: { movies: MoivesProps[], onSelectMovie: (id: string) => void }) {
  return (
    <div className="w-full">
      <ScrollArea className="h-[550px] w-full ">
      <div>
        {movies?.map((movie, index) => (
          <MovieItem key={index} movie={movie} onSelectMovie={onSelectMovie} />
        ))}
      </div>
      </ScrollArea>
    </div>
  );
}
