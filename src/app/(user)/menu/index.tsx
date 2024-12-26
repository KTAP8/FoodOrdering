import {
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
  Text,
  View,
} from "react-native";
import Colors from "@/src/constants/Colors";
import ProductListItem from "@/src/components/ProductListItem";
import { useProductList } from "@/src/api/products";

// const product = products[0];

export default function MenuScreen() {
  const { data: products, error, isLoading } = useProductList();

  if (isLoading) {
    return <ActivityIndicator></ActivityIndicator>;
  }

  if (error) {
    return <Text> Failed to fetch products</Text>;
  }

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductListItem product={item}></ProductListItem>
      )}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    ></FlatList>
  );
}
