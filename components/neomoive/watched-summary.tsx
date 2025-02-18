import React from "react";
import { Watched } from "@/types/watched";
import { Clock1, Film, Star } from "lucide-react";


export default function WatchedSummary({ watched }: { watched: Watched[] }) {
  const avgImdbRating =
    watched.reduce((acc, movie) => acc + (movie.imdbRating || 0), 0) / watched.length;
  const avgUserRating =
    watched.reduce((acc, movie) => acc + (movie.userRating || 0), 0) / watched.length;
  const avgRuntime =
    watched.reduce((acc, movie) => acc + (movie.Runtime || 0), 0) / watched.length;

  return (
    <div className="w-full bg-zinc-100 rounded-md p-4">
      <h2 className=" font-semibold text-lg">Movies you watched</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex gap-2 items-center">
          <Film className="h-4" />
          <p>{watched.length}</p>
        </div>
        <div className="flex gap-2 items-center ">
          <Star fill="full" className="text-orange-500 h-4 " />
          <p>{avgImdbRating ? avgImdbRating.toFixed(1) : "0"}</p>
        </div>
        <div className="flex gap-2 items-center fill-orange-500">
          <Star fill="full" className="h-4 text-orange-500" />
          <p>{avgUserRating ? avgUserRating.toFixed(1) : "0"}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Clock1 className="h-4" />
          <span>{avgRuntime ? avgRuntime.toFixed(1) : "0"} min</span>
        </div>
      </div>
    </div>
  );
}
