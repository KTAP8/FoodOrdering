import { Text, FlatList, ActivityIndicator } from "react-native";
import OrderListItem from "@/src/components/OrderListItem";
import { useAdminOrderList } from "@/src/api/orders";
export default function OrdersScreen() {
  const {
    data: orders,
    isLoading,
    error,
  } = useAdminOrderList({ archived: false });
  if (isLoading) {
    return <ActivityIndicator></ActivityIndicator>;
  }

  if (error) {
    return <Text>Failed to fetech</Text>;
  }
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
