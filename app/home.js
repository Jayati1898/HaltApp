import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Menu from "../components/Menu";
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import Tab from "../components/Tab";


export default function Home() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Menu/>
        <View style={styles.nameInfo}>
          <View style={styles.nameInfoContainer}>
            <Image source={require('../assets/home-user.png')} style={styles.homeUserImage} />
            <Text style={styles.welcomeUserText}>Hey, Hrithik!</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/home-breather.png')} style={styles.boxImage}/>
          <View style={styles.boxRuler}></View>
          <Text style={styles.boxText}>Let's take a quick breather...</Text>
        </View>
        <Text style={styles.subHeader}>What do you want to work on?</Text>
        <View style={styles.homeBlock}>
          <Image source={require('../assets/home-mood.png')} style={styles.homeBlockImage} />
          <Text style={styles.homeBlockText}>Select mood</Text>
        </View>
        <View style={styles.homeBlock}>
          <Image source={require('../assets/home-mantra.png')} style={styles.homeBlockImage} />
          <Text style={styles.homeBlockText}>Select mood</Text>
        </View>
        <View style={styles.homeBlock}>
          <Image source={require('../assets/home-about-mantra.png')} style={styles.homeBlockImage} />
          <Text style={styles.homeBlockText}>Select mood</Text>
        </View>
        <View style={styles.homeBlock}>
          <Image source={require('../assets/home-activity.png')} style={styles.homeBlockImage} />
          <Text style={styles.homeBlockText}>Select mood</Text>
        </View>
      </ScrollView>
      <Tab/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "82vh",
    backgroundColor: "#1A1F33",
    fontFamily: 'Poppins_400Regular', 
    fontSize: 30
  },
  nameInfo: {
    width: "100%",
    height: 170,
    backgroundColor: '#354173',
  },
  nameInfoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  homeUserImage:{
    flex: 0.5,
    marginTop: 20,
    resizeMode: "contain",
  },
  welcomeUserText: {
    color: "#fff",
    fontSize: 22,
    marginLeft: 15,
    fontFamily: 'Poppins_400Regular', 
  },
  box: {
    borderWidth: 2,
    borderColor: "#5e699a",
    borderRadius: 10,
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 25,
    height: 177,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row"
  },
  boxImage: {
    flex: 0.3,
    resizeMode: "contain"
  },
  boxRuler: {
    flex: 0.007,
    width: 1,
    height: "50%",
    backgroundColor: "#5e699a",
  },
  boxText: {
    flex: 0.3,
    fontSize: 20,
    textAlign: "left",
    color: "#fff",
    lineHeight: 30,
    fontWeight: 400
  },
  subHeader: {
    fontSize: 22,
    fontWeight: 500,
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  homeBlock: {
    borderWidth: 2,
    padding: 10,
    borderColor: "#5e699a",
    borderRadius: 10,
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  homeBlockImage:{
    width: 100,
    height: 100,
    marginLeft: 10,
    resizeMode: "contain",
  },
  homeBlockText: {
    fontSize: 20,
    color: "#fff", 
    marginLeft: 20,
  }

});
