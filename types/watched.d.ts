export interface Watched {
    imdbID: string;
    Title?: string;
    Year?: string;
    Poster?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Runtime?: any;
    Genre?: string;
    Director?: string;
    Writer?: string;
    Actors?: string;
    Plot?: string;
    imdbRating?: number;
    userRating?: number;
    rating?: number;
  }