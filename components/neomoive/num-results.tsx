import { AudioWaveform } from "lucide-react";
import React from "react";
import { useMoviesStore } from "@/store/useMoviesStore";

export default function NumResults() {
  const {movies} = useMoviesStore();
  return (
    <div className="flex items-center gap-2">
      <AudioWaveform className="h-4" />
      <span className="font-semibold">{movies.length} </span> results
    </div>
  );
}
