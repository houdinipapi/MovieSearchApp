import React from 'react'


interface FiltersProps {
    onRatingFilter: (rating: number | null) => void;
    onCategoryFilter: (category: string) => void;
}


const Filters: React.FC<FiltersProps> = ({ onRatingFilter, onCategoryFilter }) => {

    const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onRatingFilter(parseFloat(e.target.value) || null);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onCategoryFilter(e.target.value);
    };

    return (
        <div className='fle space-x-4 my-3'>
            <select onChange={handleRatingChange} className="p-2 border rounded" title="Rating Filter">
                <option value="">All Ratings</option>
                <option value="5">5 and above</option>
                <option value="6">6 and above</option>
                <option value="7">7 and above</option>
            </select>

            <select onChange={handleCategoryChange} className="p-2 border rounded" title="Category Filter">
                <option value="">All Categories</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Thriller">Thriller</option>
            </select>
        </div>
    );
};

export default Filters;