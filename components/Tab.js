import { Link } from "expo-router";
import { StyleSheet, View, Image,Text } from "react-native";

export default function Tab() {
  return (
    <View style={styles.tabContainer}>
        <Link style={styles.tab} href="/home">
            <Image source={require('../assets/tab-home.png')} style={styles.tabImage}/>
            <Text style={styles.tabText}>Home</Text>
        </Link>
        <Link style={styles.tab} href="/">
            <Image source={require('../assets/tab-mantra.png')} style={styles.tabImage}/>
            <Text style={styles.tabText}>Mantra</Text>
        </Link>
        <Link style={styles.tab} href="/">
            <Image source={require('../assets/tab-records.png')} style={styles.tabImage}/>
            <Text style={styles.tabText}>Records</Text>
        </Link>
        <Link style={styles.tab} href="/">
            <Image source={require('../assets/tab-ambience.png')} style={styles.tabImage}/>
            <Text style={styles.tabText}>Ambiences</Text>
        </Link>
    </View>
  );
}

const styles = StyleSheet.create({
    tabContainer: {
        height: "10vh",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        backgroundColor: "#272C40"
    },
    tab: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    tabImage: {
        width: "100%",
        height: "5vh",
        resizeMode: "contain"
    },
    tabText: {
        flex: 1,
        color: "#fff"
    }

});
