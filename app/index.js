import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, Image, View, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebaseConfig";
import { useRouter } from 'expo-router';

export default function Page(){
    const router = useRouter();
    const[email, setEmail] = useState("");
    const[isLoginFormSubmit, setIsLoginFormSubmit] = useState(true);
    const[password, setPassword]= useState("");
    const[user, setUser] = useState("");
    const[error, setError] = useState("");

    const onSubmitForm = (e) => {
        e.preventDefault();
        setError("");
        if(isLoginFormSubmit){
            signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                setEmail("");
                setPassword("");
                setUser(userCredential?.user);
                router.replace('home');
            }).catch((error) => {
               console.log(error?.message) 
               onError(error?.message);
            })
        }
        else{
            setError("");
            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                setEmail("");
                setPassword("");
                setUser(userCredential?.user);
                console.log('user created');
                router.replace('home');
            }).catch((error) => {
               console.log(error?.message) 
               setError(error?.message)
            })
        }
    }

    const onError = (msg) => {
        if(msg.toString() === "Firebase: Error (auth/invalid-email).") setError("Invalid email");
        else if(msg.toString() === "Firebase: Error (auth/wrong-password).") setError("Incorrect password");
        else if(msg.toString() === "Firebase: Error (auth/missing-password).") setError("Missing password");
        else if(msg.toString() === "Firebase: Password should be at least 6 characters (auth/weak-password).") setError("Password must contain atleast 6 characters");
        else if(msg.toString() === "Firebase: Error (auth/email-already-in-use).") setError("Email already in use");
        else if(msg.toString() === "Firebase: Error (auth/user-not-found).") setError("User doesn't exist!");
    }
    return(
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={styles.loginContainer}>
                <View style={styles.loginTopContainer}>
                    <Image source={require('../assets/logo-large.png')} style={styles.loginImage} />
                    <Text style={styles.loginText}>Short digital activities for emotional wellbeing</Text>
                </View>
                <View style={styles.loginBottomContainer}>
                    <View style={styles.loginFormHeader}>
                        <Pressable style={isLoginFormSubmit ? styles.loginSwitchButton : styles.signupSwitchButton} onPress={() => setIsLoginFormSubmit(true)}>
                            <Text style={isLoginFormSubmit ? styles.loginSwitchButtonText : styles.signupSwitchButtonText}>Login</Text>
                        </Pressable>
                        <Pressable style={isLoginFormSubmit ? styles.signupSwitchButton : styles.loginSwitchButton} onPress={() => setIsLoginFormSubmit(false)}>
                            <Text style={isLoginFormSubmit ? styles.signupSwitchButtonText : styles.loginSwitchButtonText}>Signup</Text>
                        </Pressable>
                    </View>
                    <View style={styles.loginForm}>
                        <Text style={styles.formSubHeader}>Press Login to continue</Text>
                        <Text style={styles.formLabel}>Email</Text>
                        <TextInput style={styles.formInput} value={email} onChangeText={setEmail}/>
                        <Text style={styles.formLabel}>Password</Text>
                        <TextInput style={styles.formInput} secureTextEntry={true} value={password} onChangeText={setPassword}/>
                        <Text style={styles.errorText}>{error}</Text> 
                        <Pressable style={isLoginFormSubmit ? styles.loginButton : styles.signupButton} onPress={onSubmitForm}><Text style={isLoginFormSubmit ? {color: "#EBEFFF"}: {color: "#FFF"}}>{isLoginFormSubmit ? "Login" : "Signup"}</Text></Pressable>
                        {isLoginFormSubmit ? <Text style={styles.formFooter}>Don't have an account? <Pressable onPress={() => setIsLoginFormSubmit(false)}>Signup</Pressable></Text> :<Text style={styles.formFooter}>Already have an account? <Pressable onPress={() => setIsLoginFormSubmit(true)}>Login</Pressable></Text>}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#1A1F33"
    },
    loginTopContainer: {
        flex: 1,
        minHeight: "40vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#1A1F33"
    },
    loginImage: {
        flex: 1,
        width: "70%",
        resizeMode: "contain",
    },
    loginText: {
        position: "absolute",
        top: 280,
        fontSize: 16,
        color: "#7871FC",
    },
    loginBottomContainer: {
        flex: 1,
        minHeight: "60vh",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        zIndex: 2,
        backgroundColor: "#EBEFFF",
        overflow: "hidden"
    },
    loginFormHeader: {
        flex: 0.25,
        flexDirection: "row",
        paddingBottom: 40,
    },
    loginForm: {
        flex: 1,
    },
    loginSwitchButton: {
        flex: 0.5,
        padding: 25,
        backgroundColor: "#7871FC",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 0,
        color: "#fff",
        borderBottomColor: "#354173",
        borderBottomWidth: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    loginSwitchButtonText: {
        color: "#fff",
        fontSize: 20,
    },
    signupSwitchButton: {
        flex: 0.5,
        padding: 25,
        backgroundColor: "#EBEFFF",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 0,
        color: "#000"
    },
    signupSwitchButtonText: {
        color: "#000",
        fontSize: 20,
    },
    formSubHeader: {
        textAlign: "center",
        paddingBottom: 20,
        color: "#7871FC"
    },
    formLabel:{
        textAlign: "left",
        marginLeft: 45,
        fontSize: 16
    },
    formInput: {
        marginTop:3,
        padding: 20,
        backgroundColor: '#CBCFE0',
        width: '80%',
        marginBottom: 20,
        marginLeft: 40,
        borderRadius: 10,
        marginBottom: 20,
    },
    loginButton: {
        marginLeft: "auto",
        marginRight: "auto",
        padding: 20,
        width: "40%",
        marginTop: 15,
        marginBottom: 20,
        textAlign: "center",
        backgroundColor: "#868686",
        borderRadius: 10,
    },
    signupButton: {
        marginLeft: "auto",
        marginRight: "auto",
        padding: 20,
        width: "40%",
        marginTop: 15,
        marginBottom: 20,
        textAlign: "center",
        backgroundColor: "#C59F1A",
        borderRadius: 10,
        color: "#fff"
    },
    formFooter: {
        textAlign: "center"
    },
    errorText: {
        textAlign: "center",
        color: "#f00"
    }


})