import { StyleSheet, View, Image } from "react-native";

export default function Menu() {
  return (
    <View style={styles.menuContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
        <Image source={require('../assets/user.png')} style={styles.userLogo}/>
    </View>
  );
}

const styles = StyleSheet.create({
   menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "8vh",
    backgroundColor: "#1A1F33",
    position: "relative",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,

  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: "contain"
  },
  userLogo: {
    position: "absolute",
    right: 4,
    flex: 1,
    width: 60,
    resizeMode: "contain"
  }
});
