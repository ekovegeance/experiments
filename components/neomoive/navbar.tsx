import React from "react";
import Search from "./search";
import NumResults from "./num-results";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  
  return (
    <header className="py-4 bg-zinc-50 text-primary md:rounded-xl mt-8">
      <nav className="flex justify-between items-center mx-2 md:mx-12 ">
        <Link href="/" className=" hidden md:block text-xl font-bold">
          <div className="flex items-center gap-2">
            <Clapperboard />
            Noemovie
          </div>
        </Link>
        <Search />
        <NumResults />
      </nav>
    </header>
  );
}
