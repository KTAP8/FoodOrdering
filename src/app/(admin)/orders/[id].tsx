import { Text, View, FlatList, StyleSheet, Pressable } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import orders from "@/assets/data/orders";
import OrderListItem from "@/src/components/OrderListItem";
import OrderItemListItem from "@/src/components/OrderItemListItem";
import { OrderStatusList } from "@/src/types";
import Colors from "@/src/constants/Colors";
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
        ListFooterComponent={() => (
          <View>
            <Text style={{ fontWeight: "bold" }}>Status</Text>
            <View style={{ flexDirection: "row", gap: 5 }}>
              {OrderStatusList.map((status) => (
                <Pressable
                  key={status}
                  onPress={() => console.warn("Update status")}
                  style={{
                    borderColor: Colors.light.tint,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 5,
                    marginVertical: 10,
                    backgroundColor:
                      order.status === status
                        ? Colors.light.tint
                        : "transparent",
                  }}
                >
                  <Text
                    style={{
                      color:
                        order.status === status ? "white" : Colors.light.tint,
                    }}
                  >
                    {status}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        )}
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