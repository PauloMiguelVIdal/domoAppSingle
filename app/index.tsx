import { Background } from "expo-router/build/react-navigation/index.js";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useContext } from "react";
import { Link } from 'expo-router'
import { Context } from "../Context/ContextTheme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SectorCard from "../components/SectorCard";
import { ContextEconomy } from "../Context/ContextEconomy"

import ResultFinance from "../components/ResultFinance";

export default function Screnn() {
    const context = useContext(Context);


    const contextBank = useContext(ContextEconomy)




    const saldoBancario = contextBank?.economia.saldoBancario



    
    if (!context ) {
        throw new Error('Context não encontrado TEMA')
    }
    if (!contextBank ) {
        throw new Error('Context não encontrado BANK')
    }
    const { theme, setTheme } = context

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }


const setores = ['agricultura','teconologia','industria','comercio','imobiliário','energia']

    const cor = theme === 'light' ? '#6411D9' : '#350973'




    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#272724',
            justifyContent: "space-around",
            flexDirection: 'row'
        },
        containerScreen: {
            flex: 1,
            backgroundColor: cor,
            justifyContent: "space-between",
            alignItems: 'center'

        },
        textCentral: {
            backgroundColor: '#42423a',
            fontSize: 40,
        },
        textSaldo: {
            color: '#FFFFFF',
            fontSize: 40
        },
        btnRodada: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FF6F00',
            fontSize: 40,
            width: '80%',
            height: 50,
            borderRadius: 20,
            marginBottom: 20
        },
        btn: {
            backgroundColor: '#d1cb1a',
            fontSize: 20,
            justifyContent: "space-around",
        },
        imgLogo: {
            width: 60,
            height: 60,
            position: 'relative',
            right: 8
        },
        containerDarkLight: {
            width: 100,
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#333333',
            borderRadius: 20
        },
        containerTop: {
            width: '100%',
            margin: '20px',
            height: 50,
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: "space-between",
            backgroundColor: '#473636',
            borderRadius: 20
        },
        containerInternoTop: {
            width: '80%',
            flexDirection: "row",
            height: 50,
            alignItems: 'center',
            left: 0,
            backgroundColor: '#253992',

        },
    })


    return (
        <SafeAreaProvider style={styles.containerScreen}>
            <View style={styles.containerTop}>

                <View style={styles.containerInternoTop}>
                    <Image style={styles.imgLogo} source={require('../assets/DOMO LOGO SEM BG.png')} />
                    <Text style={styles.textSaldo}>{saldoBancario}</Text>
                </View>
                <Pressable style={styles.btn} onPress={toggleTheme}>
                    <Text style={styles.textCentral}>{theme}</Text>
                </Pressable>
            </View>
            {/* <Link href='/about' asChild>
                <Pressable style={styles.btn}>
                    <Text>Ir para sobre</Text>
                </Pressable>

            </Link> */}
            {/* <ResultFinance/> */}
           {    setores.map((_,index)=>{ return <SectorCard index={index}/>})       
}
            <Pressable style={styles.btnRodada}>
                <Text>Passar Rodada</Text>
              
            </Pressable>
        </SafeAreaProvider>
    )
}






