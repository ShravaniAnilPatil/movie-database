import React from "react";
import img1 from "../images/image.png"; 
function MovieCard({ movie }) {
  const defaultImage = img1; 

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={movie.image}
        alt={movie.movie}
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = defaultImage; 
        }}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{movie.movie}</h3>
        <p className="text-sm text-gray-600">Rating: {movie.rating}</p>
        <a
          href={movie.imdb_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-sm"
        >
          View on IMDb
        </a>
      </div>
    </div>
  );
}

export default MovieCard;
