import { View, Pressable, StyleSheet, Text, Image } from "react-native"
import { useContext } from "react"
import { ContextEconomy } from "../Context/ContextEconomy"

type SetoresId = 'agricultura' | 'tecnologia' | 'industria' | 'comercio' | 'imobiliario' | 'energia'



type SectorProps = {
    index: number
}





const SectorCard = ({ index }: SectorProps) => {

    const context = useContext(ContextEconomy)


    const saldoBancario = context?.economia.saldoBancario
    




//         if (context) { throw new Error('context não está funcionando') }



        const setores: {
            id: SetoresId,
            cor1: string,
            cor2: string,
            cor3: string,
            cor4: string,
        }[] = [
                { id: "agricultura", cor1: "#003816", cor2: "#4CAF50", cor3: "#0C9123", cor4: "#4CAF50" },
                { id: "tecnologia", cor1: "#A64B00", cor2: "#D45A00", cor3: "#FF6F00", cor4: "#FF8C42" },
                { id: "industria", cor1: "#1A1A1A", cor2: "#4D4D4D", cor3: "#808080", cor4: "#B3B3B3" },
                { id: "comercio", cor1: "#660000", cor2: "#A31919", cor3: "#E60000", cor4: "#FF4D4D" },
                { id: "imobiliario", cor1: "#000066", cor2: "#1A1A8C", cor3: "#3333CC", cor4: "#6666FF" },
                { id: "energia", cor1: "#665200", cor2: "#A37F19", cor3: "#E6B800", cor4: "#FFD966" },
            ]


        const imageSetores: Record<SetoresId, number> = {
            agricultura: require('../assets/setores/agricultura.png'),
            tecnologia: require('../assets/setores/tecnologia.png'),
            industria: require('../assets/setores/industria.png'),
            comercio: require('../assets/setores/comercio.png'),
            imobiliario: require('../assets/setores/imobiliario.png'),
            energia: require('../assets/setores/energia.png'),
        }





        return (

            <View style={[styles.containerSetores, { backgroundColor: setores[index].cor1 }]} >
                <View style={[styles.containerSetoresIcon, { backgroundColor: setores[index].cor3 }]} >
                    <Image style={styles.imgLogo} source={imageSetores[setores[index].id]} />

                </View>
                <View style={[styles.containerSetoresInterno, { backgroundColor: setores[index].cor2 }]}>
                    <View style={[styles.containerSetoresInternoText, { backgroundColor: 'transparent' }]}>

                    </View>
                    <View style={[styles.containerSetoresInterno2, { backgroundColor: 'transparent' }]} >

                        <Pressable style={[styles.containerSetoresEdit, { backgroundColor: setores[index].cor3 }]} >
                        </Pressable>
                        <Pressable style={[styles.containerSetoresRemove, { backgroundColor: setores[index].cor1 }]} >
                        </Pressable>
                    </View>
                </View>
            </View>
        )
    }


    const styles = StyleSheet.create({
        containerSetores: {
            width: '80%',
            flexDirection: "row",
            height: 100,
            alignItems: 'center',
            justifyContent: 'space-around',
            left: 0,
            gap: 3,
            // backgroundColor: '#7c83a0',
            borderRadius: 20,
            marginBottom: 2,
            padding: 5
        },
        containerSetoresIcon: {
            width: 95,
            height: 95,
            alignItems: 'center',
            justifyContent: 'center',

            // backgroundColor: '#393f57',
            borderRadius: 10
        },
        containerSetoresInterno: {
            flex: 1,
            gap: 3,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            // backgroundColor: '#1114d3',
            borderRadius: 10
        },
        containerSetoresInterno2: {
            flex: 1,
            gap: 3,
            height: 40,
            padding: 2,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            // backgroundColor: '#656e62',
            borderRadius: 10
        },
        containerSetoresInternoText: {
            width: '100%',
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: '#303c6d',
            borderRadius: 10
        },
        containerSetoresEdit: {
            flex: 1,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',

            // backgroundColor: '#393f57',
            borderRadius: 10
        },
        containerSetoresRemove: {
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',

            // backgroundColor: '#393f57',
            borderRadius: 10
        },
        imgLogo: {
            width: 60,
            height: 60,

        },
    })


    export default SectorCard