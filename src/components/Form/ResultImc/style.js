import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    resultImc: {
        flex: 1,
        marginTop: 15,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    information: {
        fontSize: 18,
        color: "#ff0043",
        fontWeight: "bold"
    },
    numberImc: {
        fontSize: 40,
        color: "#ff0043",
        fontWeight: "bold",
        textAlign: "center",
    },
    boxShareButton: {
        marginTop: 10,
        width: "100%",
        alignItems: "center",
        marginBottom: 10,
    },
    shared:{
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingBottom: 5,
        paddingTop: 5,
    },
    sharedText:{
        color: "#fff",
        fontWeight:"bold",
        paddingHorizontal: 30,
    }
});

export default style