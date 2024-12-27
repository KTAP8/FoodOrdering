import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import orders from "@/assets/data/orders";
import OrderListItem from "@/src/components/OrderListItem";
import OrderItemListItem from "@/src/components/OrderItemListItem";
import { useOrderDetails } from "@/src/api/orders";
export default function OrderDetailsScreen() {
  const { id: idString } = useLocalSearchParams();
  const id = parseFloat(typeof idString === "string" ? idString : idString[0]);
  const { data: order, isLoading, error } = useOrderDetails(id);
  //const order = orders.find((o) => o.id.toString() === id);
  if (isLoading) {
    return <ActivityIndicator></ActivityIndicator>;
  }

  if (error) {
    return <Text>Failed to fetch</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Order #${id}` }}></Stack.Screen>
      <OrderListItem order={order}></OrderListItem>
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => (
          <OrderItemListItem item={item}></OrderItemListItem>
        )}
        contentContainerStyle={{ gap: 10 }}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    gap: 10,
  },
});
