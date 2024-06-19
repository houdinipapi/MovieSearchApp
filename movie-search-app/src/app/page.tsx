"use client"

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import MovieList from "@/components/MovieList";
import moviesData, { Movie } from "@/data/movies";
import Filters from "@/components/Filters";


export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleRatingFilter = (rating: number | null) => {
    setRatingFilter(rating);
  };

  const handleCategoryFilter = (category: string) => {
    setCategoryFilter(category);
  };


  const filteredMovies = moviesData.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!ratingFilter || movie.rating >= ratingFilter) &&
      (!categoryFilter || movie.category === categoryFilter)
    );
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl">

        <SearchBar
          searchTerm={searchTerm}
          onSearch={handleSearch}
        />
        <MovieList movies={filteredMovies} />
        <Filters onRatingFilter={handleRatingFilter} onCategoryFilter={handleCategoryFilter} />

      </div>
    </main>
  )


}