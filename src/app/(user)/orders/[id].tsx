import { Text, View, FlatList, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import orders from "@/assets/data/orders";
import OrderListItem from "@/src/components/OrderListItem";
import OrderItemListItem from "@/src/components/OrderItemListItem";
export default function OrderDetailsScreen() {
  const { id } = useLocalSearchParams();

  const order = orders.find((o) => o.id.toString() === id);
  if (!order) {
    return <Text>Not found</Text>;
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
