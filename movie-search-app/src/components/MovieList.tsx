import React from 'react'
import { Movie } from '@/data/movies'


interface MovieListProps {
    movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div>
        <ul className='space-y-2'>
            {movies.map((movie, index) => (
                <li key={index} className='p-2 border rounded'>
                    {movie.title} - {movie.rating} - {movie.category}
                </li>
            ))}
        </ul>
    </div>
  );
};


export default MovieList