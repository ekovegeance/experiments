import React from "react";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Watched } from "@/types/watched";
import { Clock, Star } from "lucide-react";




export default function WatchedItem({ watched }: { watched: Watched }) {

  return (
    <div
      key={watched.imdbID}
      className="bg-zinc-50 hover:bg-zinc-100 rounded-md hover:cursor-pointer"
    >
      <div className="flex flex-row gap-2 p-2 ">
        {watched?.Poster && watched?.Title && (
          <Image
            src={watched.Poster}
            alt={watched.Title}
            width={40}
            height={60}
            className="w-auto h-auto object-cover rounded-md"
          />
        )}
        <div>
          <h2 className="font-semibold text-xl">{watched.Title}</h2>
          <div className="flex flex-row gap-2">
            <div className="flex flex-row items-center">
              <Star fill="full" className="h-4 text-orange-500" />{" "}
              {watched.imdbRating}
            </div>
            <div className="flex flex-row items-center fill-orange-500">
              <Star fill="full" className="h-4 text-orange-500" />{" "}
              {watched.userRating}
            </div>
            <div className="flex flex-row items-center ">
              <Clock className="h-4" /> {watched.Runtime} min
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-2" />
    </div>
  );
}
