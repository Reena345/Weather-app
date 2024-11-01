import React from 'react';

const CitySearch = ({ searchHandler }) => {
    return (
        <div className="city-search">
            <input
                type="text"
                placeholder="Search for a city..."
                onChange={(e) => searchHandler(e.target.value)}
            />
            <button>Search</button>
        </div>
    );
};

export default CitySearch;



