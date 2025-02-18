import React, { useState, useEffect } from "react";
import { Watched } from "@/types/watched";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  BookOpenCheck,
  Calendar,
  CircleArrowLeft,
  CirclePlus,
  Clapperboard,
  Clock,
  Film,
  UsersRound,
} from "lucide-react";
import { Badge } from "../ui/badge";
import StarRating from "./star-rating";

interface MovieDetailsProps {
  selectedMovieId: string;
  watched: Watched[];
  onBackToList: () => void;
  onAddWatched: (movie: Watched) => void;
}

export default function MovieDetails({
  selectedMovieId,
  onBackToList,
  onAddWatched,
  watched,
}: MovieDetailsProps) {
  const [movie, setMovie] = useState<Watched>();
  const [loading, setLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const isWatched = watched.some((movie) => movie.imdbID === selectedMovieId);
  const userRatingWatched = watched.find(
    (movie) => movie.imdbID === selectedMovieId
  )?.userRating;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      const response = await fetch(
        `https://www.omdbapi.com/?i=${selectedMovieId}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
      );
      const data = await response.json();
      setMovie(data);
      setLoading(false);
    };
    fetchMovieDetails();
  }, [selectedMovieId]);

  const {
    Title: Title,
    Year: Year,
    Poster: Poster,
    imdbRating,
    Runtime: Runtime,
  } = movie || {};
  console.log("log dari movie details", movie);
  function handleAddWatched() {
    const newWatchedMovie = {
      imdbID: selectedMovieId,
      Title,
      Year,
      Poster,
      imdbRating: Number(imdbRating),
      userRating: Number(userRating),
      Runtime: Number(Runtime.replace(" min", "")),
    };
    onAddWatched(newWatchedMovie);
    onBackToList();
  }

  return (
    <div className="p-4">
      {loading ? (
        <div className="mx-auto mt-10 text-center">Loading...</div>
      ) : (
        <>
          <header className="flex gap-4 bg-primary text-primary-foreground rounded-lg justify-between">
            <div className="flex gap-4">
              <Image
                src={movie?.Poster || ""}
                alt={`${movie?.Title} poster`}
                width={100}
                height={120}
                className="w-auto h-auto object-cover rounded-md"
              />
              <div className="mt-4">
                <h2 className="text-2xl font-semibold">{movie?.Title}</h2>
                <div className="flex gap-2 items-center">
                  <Calendar className=" h-4" />
                  <span>{movie?.Year}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Film className="h-4" />
                  <span>{movie?.imdbRating}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Clock className="h-4" />
                  <span>{movie?.Runtime}</span>
                </div>
              </div>
            </div>
            <div>
              <Button size="icon" onClick={onBackToList}>
                <CircleArrowLeft />
              </Button>
            </div>
          </header>
          <section className="mt-4">
            <div className=" mb-4 flex gap-4 items-center justify-between">
              <div>
                <Badge variant="secondary" className="rounded-full">
                  {movie?.Genre}
                </Badge>
              </div>
              {isWatched ? (
                <>
                  <p className=" text-teal-600 text-sm">
                    rating of{" "}
                    {userRatingWatched}/5
                  </p>
                </>
              ) : (
                <div>
                  
                  {userRating > 0  ?(
                    <Button size="sm" onClick={handleAddWatched}>
                      {" "}
                      <CirclePlus /> Add Watched
                    </Button>
                  ) : (<StarRating onSetRating={setUserRating} />)}
                </div>
              )}
            </div>
            <div className="flex gap-2 items-center">
              <Clapperboard className="h-4" />
              <span>{movie?.Director}</span>
            </div>
            <div className="flex gap-2 items-center">
              <BookOpenCheck className="h-4" />
              <span>{movie?.Writer}</span>
            </div>
            <div className="flex gap-2 items-center">
              <UsersRound className="h-4" />
              <span>{movie?.Actors}</span>
            </div>
          </section>
          <section>
            <p>
              <span className="font-semibold">Plot: </span>
              <span>{movie?.Plot}</span>
            </p>
            {/* <div className="rating">
              {isWatched ? (
                <p>
                  You have watched this movie with a rating of{" "}
                  {userRatingWatched}/10
                </p>
              ) : (
                <>
                  <StarRating
                    max={10}
                    size={24}
                    color={"#fbbf24"}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAddWatched}>
                      Add to watched
                    </button>
                  )}
                </>
              )}
            </div> */}
          </section>
        </>
      )}
    </div>
  );
}
