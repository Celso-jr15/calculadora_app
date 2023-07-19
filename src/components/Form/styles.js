import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#FFFFFF",
        alignItems:"center",
        marginTop:20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        
        
    },
    form: {
        width:"100%",
        height:"auto",
        marginTop: 20,
        padding:10,
    },
    formLabel: {
        color: "#666666",
        fontSize:18,
        paddingLeft:20,
    },
    formInput: {
        width:"90%",
        backgroundColor: "#f6f6f6",
        color: "#363636",
        borderRadius:30,
        fontSize:15,
        paddingLeft:10,
        padding:20,
        margin:12,
        height:40,
        
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width:"90%",
        backgroundColor: "#FF0643",
        paddingTop: 14,
        marginLeft:12,
        paddingBottom: 14,
        margin: 15,
    },
    textButtonCalculator: {
        fontSize: 20,
        color: "#ffffff",        
    },
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    viewResultImc: {
        width: "100%",
        height: "27%",
    },
    historyResultImc: {
        fontSize:15,
        color: "#3f3f3f",
    }

});

export default styles