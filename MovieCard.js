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
        <Text style={{fontSize:20,fontWeight: 'bold',paddingLeft:10}}>{movie.Title}</Text>
        <Text style={{paddingLeft:10}}>{movie.Year}</Text>
        <Text style={{paddingLeft:10}}>{movie.Type}</Text>
      </TouchableOpacity>
    </View>
  );
}
