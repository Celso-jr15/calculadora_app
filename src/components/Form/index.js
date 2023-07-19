import React, { useState } from "react";
import { View, Text, TextInput, Vibration, TouchableOpacity, FlatList } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./styles";

export default function Form (){
    
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc ] = useState("Preencha o Peso e a Altura")
    const [imc, setImc] = useState(null)
    const [TextButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErroMessage] = useState(null)
    const [imcList, setImcList] = useState([])

    function imcCaculator(){
        let heightFormat = height.replace(",",".")
        let totalImc = (weight/(heightFormat*heightFormat)).toFixed(2);
        setImcList ((arr) => [...arr, {id: new Date().getTime(), imc:totalImc}])
        setImc(totalImc)
    }   

    function verificarionImc(){
        if (imc == null){
           Vibration.vibrate();
           setErroMessage("Campo Obrigatório*")
        }
    }

function ValidationImc(){
    if (weight != null && height != null){
        console.log()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual a:")
        imcCaculator()
        setTextButton("Calcular novamente")
        setErroMessage(null)
        
    } 
    else {
        verificarionImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha a Altura e o Peso")
    }
    
}

    return (
        <View style={styles.formContext}>
            {imc == null ?  
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput 
                        style={styles.formInput}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="Escreva o Peso Ex. 1.75"
                        keyboardType="numeric">
                    </TextInput>

                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="Escreva o Peso. Ex 75.50"
                        keyboardType="numeric">
                    </TextInput>

                    <TouchableOpacity 
                        style={styles.buttonCalculator}
                        onPress={() => {ValidationImc()}}
                    >
                        <Text style={styles.textButtonCalculator}>{TextButton}</Text>
                    </TouchableOpacity>
                </View>
            : 
                <View style={styles.viewResultImc}>
                    <ResultImc messageResultImc={messageImc} resultImc={imc}/>
                    <TouchableOpacity 
                        style={styles.buttonCalculator}
                        onPress={() => {ValidationImc()}}
                    >
                        <Text style={styles.textButtonCalculator}>{TextButton}</Text>
                    </TouchableOpacity>
                </View>
            }
           
            
            <FlatList 
            style={styles.listImcs}
            data={imcList.reverse()}
            renderItem={({item})=>{
                return(
                    <Text style={styles.historyResultImc}>
                        Resultado do IMC = {item.imc}
                    </Text>
                )
            }}
            keyExtractor={(item) => {item.id}}
            >

            </FlatList>
        </View>
    )
}