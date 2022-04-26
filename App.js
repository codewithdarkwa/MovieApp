import { View, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { fetchMovies } from "./Api/index";
import { TextInput } from "react-native-paper";
import MovieCard from "./MovieCard";
export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("superman");

  const getMovies = async () => {
    setMovies(await fetchMovies(searchMovie));
    setSearchMovie("");
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      {Object.keys(movies).length > 0 && (
        <View>
          <TextInput
            placeholder="Search your movies here"
            value={searchMovie}
            onChangeText={(text) => setSearchMovie(text)}
            style={{
              marginTop: 20,
            }}
            left={<TextInput.Icon name="magnify" />}
            onSubmitEditing={getMovies}
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
