import { Movies } from '@/types/movies';
import {create} from 'zustand';


interface MoviesStore {
    movies: Movies[];
    setMovies: (movies: []) => void;
}

export const useMoviesStore = create<MoviesStore>((set) => ({
    movies: [],
    setMovies: (movies) => set({ movies }),
}));