import { StyleSheet, Image } from "react-native";
import Colors from "@/src/constants/Colors";
import { Text, View } from "@/src/components/Themed";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";

// const product = products[0];

export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[0]}></ProductListItem>
      <ProductListItem product={products[1]}></ProductListItem>
    </View>
  );
}
