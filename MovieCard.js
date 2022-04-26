import { View, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function MovieCard({ movie }) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity>
        <Image
          style={{
            width: 150,
            height: 200,
            margin: 10,
            borderRadius: 10,
          }}
          source={{ uri: movie.Poster }}
        />
      </TouchableOpacity>
    </View>
  );
}
