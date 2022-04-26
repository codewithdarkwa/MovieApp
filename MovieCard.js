import { View, Image } from "react-native";
import React from "react";

export default function MovieCard({ movie }) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        style={{
          width: 150,
          height: 200,
          margin: 10,
          borderRadius: 5,
        }}
        source={{ uri: movie.Poster }}
      />
    </View>
  );
}
