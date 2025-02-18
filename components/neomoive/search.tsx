import React from "react";
import { Input } from "../ui/input";
import { useSearchStore } from "@/store/useSearchStore";

export default function Search() {
  const { query, setQuery } = useSearchStore();
  return (
    <Input
      type="text"
      value={query}
      className="w-1/2 md:w-1/4 bg-zinc-100 rounded-full"
      placeholder="Cari film apa?"
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
