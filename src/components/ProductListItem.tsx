import { StyleSheet, Image } from "react-native";
import Colors from "@/src/constants/Colors";
import { Text, View } from "@/src/components/Themed";

const ProductListItem = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image}></Image>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
