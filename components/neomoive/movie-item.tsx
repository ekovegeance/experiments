import React from "react";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "lucide-react";

interface MoivesProps {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export default function MovieItem({
  movie,
  onSelectMovie,
}: {
  movie: MoivesProps;
  onSelectMovie: (imdbID: string) => void;
}) {
  return (
    <div
      key={movie.imdbID}
      className="bg-zinc-50 hover:bg-zinc-100 rounded-md hover:cursor-pointer"
      onClick={() => onSelectMovie(movie.imdbID)}
    >
      <div className="flex flex-row gap-2 p-2 ">
        <Image
          src={movie.Poster}
          alt={movie.Title}
          width={40}
          height={60}
          className="w-auto h-auto object-cover rounded-md"
        />
        <div>
          <h2 className="font-semibold text-xl">{movie.Title}</h2>
          <div className="flex flex-row gap-2 items-center">
            <Calendar className="h-4" /> <p>{movie.Year}</p>
          </div>
        </div>
      </div>
      <Separator className="my-2" />
    </div>
  );
}
