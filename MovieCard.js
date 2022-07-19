import { View, Image, TouchableOpacity,Text } from "react-native";

export default function MovieCard({ movie }) {
  return (
    <View >
      <TouchableOpacity>
        <Image
          style={{
            width: '100%',
            height: 200,
            margin: 10,
            borderRadius: 10,
          }}
          resizeMode ="cover"
          source={{ uri: movie.Poster }}
        />
        
      </TouchableOpacity>
    </View>
  );
}
