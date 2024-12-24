import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>ProductDetailsScreen for id: {id}</Text>
    </View>
  );
};

export default ProductDetailScreen;
