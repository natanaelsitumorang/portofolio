import { Text, View, StyleSheet, Image } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={style.container}>
      <Image style={style.tinyLogo}
      source={{
        uri: 'https://reacnative.dev/img/tiny_logo.png',
      }}/>
      <Text style={style.Textname}>
        Natanael Situmorang
      </Text>
      <Text style={style.Textdesc}>Intan Cantik@gmail.com</Text>
      <Link href="/experience">Experience</Link>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "crimson",
    height: 250,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",

  },
  Textname: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",

  },

  Textdesc: {
    fontSize: 12,
    color: 'white',
  },
})