import { Text, FlatList } from "react-native";
import orders from "@/assets/data/orders";
import OrderListItem from "@/src/components/OrderListItem";
export default function OrdersScreen() {
  return (
    <FlatList
      contentContainerStyle={{ gap: 10, padding: 10 }}
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item}></OrderListItem>}
    >
      Order screen
    </FlatList>
  );
}
