import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        console.log("$$$$$$$$$$");
        const response = await axios.get("https://dummyapi.online/api/movies");
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Movie Database
      </h1>
      {loading ? (
        <p className="text-center text-gray-600">Loading movies...</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
}

export default App;
