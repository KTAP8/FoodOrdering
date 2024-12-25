import { StyleSheet, Image, Pressable } from "react-native";
import Colors from "@/src/constants/Colors";
import { Text, View } from "@/src/components/Themed";
import { Product } from "../types";
import { Link, useSegments } from "expo-router";
import relativeTime from "dayjs/plugin/relativeTime";
import { Order } from "../types";
import dayjs from "dayjs";

dayjs.extend(relativeTime);

type OrderProps = {
  order: Order;
};

const OrderListItem = ({ order }: OrderProps) => {
  const segments = useSegments();
  return (
    <Link href={`/orders/${order.id}`} asChild>
      <Pressable style={styles.container}>
        <View>
          <Text style={styles.title}>Order #{order.id}</Text>
          <Text>{dayjs(order.created_at).fromNow()}</Text>
        </View>
        <Text style={styles.status}>{order.status}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    marginVertical: 5,
  },
  time: {
    color: "gray",
  },
  status: {
    fontWeight: "500",
  },
});

export default OrderListItem;
