import { Link, Stack } from "expo-router";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import Button from "@/src/components/Button";
import Colors from "@/src/constants/Colors";
import { useState } from "react";
import { supabase } from "@/src/lib/supabase";

const signUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      Alert.alert(error.message);
    }
    setLoading(false);
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign up" }}></Stack.Screen>
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        placeholder="jon@gmail.com"
        onChangeText={setEmail}
        style={styles.input}
      ></TextInput>
      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      ></TextInput>
      <Button
        text={loading ? "Creating account..." : "Create account"}
        onPress={signUpWithEmail}
        disabled={loading}
      ></Button>
      <Link style={styles.textButton} href="/sign-in">
        Sign in
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    flex: 1,
  },
  label: {
    color: "gray",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
});

export default signUp;
