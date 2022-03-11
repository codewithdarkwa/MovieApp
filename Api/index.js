const url = "http://www.omdbapi.com/?apikey=3706d845";

export const fetchMovies = async (title) => {
  const res = await fetch(`${url}&s=${title}`);
  const data = await res.json();
  return data;
};
