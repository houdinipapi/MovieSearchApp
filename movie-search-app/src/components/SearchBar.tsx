import React from 'react'

interface SearchBarProps {
    searchTerm: string;
    onSearch: (term: string) => void;
}


const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

  return (
    <input
        type="text"
        placeholder="Search for a movie"
        value={searchTerm}
        onChange={handleInputChange}
        className='p-2 border rounded w-full mb-4'
    />
  );
};

export default SearchBar