import { View, Text, Image, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { fetchMovies } from "./Api/index";
import { TextInput } from "react-native-paper";
import MovieCard from "./MovieCard";
export default function App() {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const [searchMovie, setSearchMovie] = useState("batman");
  console.log(searchMovie);
  useEffect(() => {
    const getMovies = async () => setMovies(await fetchMovies(searchMovie));
    getMovies();
  }, []);
  const Search = async () => {
    setMovies(await fetchMovies(searchMovie));
    setSearchMovie("");
  };
  return (
    <>
      {Object.keys(movies).length > 0 && (
        <View>
          <TextInput
            placeholder="Search your movies here"
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
            style={{
              marginTop: 35,
            }}
            left={<TextInput.Icon name="magnify" onPress={Search} />}
            onSubmitEditing={Search}
          />
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {movies.Search.map((movie, i) => (
              <MovieCard movie={movie} key={i} />
            ))}
          </ScrollView>
        </View>
      )}
    </>
  );
}
