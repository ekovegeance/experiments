"use client";

import Main from "@/components/neomoive/main";
import MoiveList from "@/components/neomoive/movie-list";
import Navbar from "@/components/neomoive/navbar";
import React, { useEffect, useState } from "react";
import BoxMoive from "@/components/neomoive/box-movie";
import WatchedSummary from "@/components/neomoive/watched-summary";
import WatchedList from "@/components/neomoive/watched-list";
import MovieDetails from "@/components/neomoive/movie-details";
import { Watched } from "@/types/watched";
import { useSearchStore } from "@/store/useSearchStore";
import { useMoviesStore } from "@/store/useMoviesStore";
import ErrorMessage from "@/components/neomoive/error-message";

export default function Home() {
  const { movies, setMovies } = useMoviesStore();
  const { query } = useSearchStore();
  // const [movies, setMovies] = useState<Movies[]>([]);
  const [watched, setWatched] = useState<Watched[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data.Response === "False") {
          throw new Error(data.Error);
        }

        setMovies(data.Search);
      } catch (error: unknown) {
        if (error instanceof Error) {
          if (error.name === "Error") return;
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    if (query.length < 3) {
      setMovies([]);
      setError("");
    }
    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [query, setMovies]);
  const handleSelectMovie = (id: string) => {
    setSelectedMovieId((selectedMoive) => (selectedMoive === id ? "" : id));
  };

  const handleBackToList = () => {
    setSelectedMovieId("");
  };
  const handleAddWatched = (movie: Watched) => {
    setWatched((watched) => (watched ? [...watched, movie] : [movie]));
  };

  return (
    <div className="container mx-auto">
      <Navbar />
      <Main>
        <BoxMoive title="Movies List">
          {loading && <div className="mx-auto text-center">Loading...</div>}
          {error && <ErrorMessage message={error} />}
          {!loading && !error && (
            <MoiveList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
        </BoxMoive>

        <BoxMoive title="Watched List">
          {selectedMovieId ? (
            <MovieDetails
              watched={watched}
              selectedMovieId={selectedMovieId}
              onBackToList={handleBackToList}
              onAddWatched={handleAddWatched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList watcheds={watched} />
            </>
          )}
        </BoxMoive>
      </Main>
    </div>
  );
}
