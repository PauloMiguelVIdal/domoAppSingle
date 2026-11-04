import { useState } from "react";
import { View, Text, Pressable } from "react-native";



const ResultFinance = () => {

    type economys = 'recessão' | 'declinio' | 'estavel' | 'progressiva' | 'aquecida'

    const economysArr: economys[] = ['recessão', 'declinio', 'estavel', 'progressiva', 'aquecida']
    const [valorRendido, setValorRendido] = useState(0)
    const economiaAtual = economysArr[2]

    const setoresStatus = [
        { id: "agricultura", despesas: 3, faturamento: 3, variacao: 2 },
        { id: "tecnologia", despesas: 3, faturamento: 3, variacao: 3 },
        { id: "industria", despesas: 2, faturamento: 2, variacao: 3 },
        { id: "comercio", despesas: 3, faturamento: 4, variacao: 4 },
        { id: "imobiliario", despesas: 2, faturamento: 2, variacao: 2 },
        { id: "energia", despesas: 1, faturamento: 1, variacao: 1 },
    ];
    const index = 0
    const nomeSetor = setoresStatus[index].id
    // const despesas = setoresStatus[index].despesas 
    // const faturamento = setoresStatus[index].faturamento 
    const variacao: number = setoresStatus[index].variacao



    const valorAplicado: number = 120000

    const faturamentoPerc = {
        1: 40,
        2: 50,
        3: 60,
    }

    const despesasPerc = {
        1: 30,
        2: 40,
        3: 50,
    }

    const variationPerc: Record<number, number> = {
        1: 10,
        2: 20,
        3: 30,
        4: 50,
    }


    const economiasPerc: Record<economys, number> = {

        'aquecida': 125,
        'progressiva': 110,
        'estavel': 100,
        'declinio': 80,
        'recessão': 40,

    }



    const varMin = 0
    const varMax: number = variationPerc[variacao]


    const getVariation = (valueMin: number, valueMax: number): number => {
        return Math.floor(Math.random() * (valueMax - valueMin) + valueMin)
    }
    const faturamentoEconomiaPerc = economiasPerc[economiaAtual]
    const faturamentoBase = valorAplicado * faturamentoPerc[1]

    const variationSelecionadaPerc = getVariation(varMin, varMax)
    const variationFinalFaturamento = faturamentoEconomiaPerc + variationSelecionadaPerc
    const mudarVariação = (): void => {

        const faturamentoFinal = Math.floor(faturamentoBase * (variationFinalFaturamento / 100))

        const formulaFinal = faturamentoFinal - (valorAplicado * despesasPerc[1])

        setValorRendido(formulaFinal)


    }







    const gerarVariação = (x: number, y: number): number => {
        return Math.abs(y - x)
    }





    return (
        <View>
            <Text>
                {faturamentoEconomiaPerc}
          
            </Text>
            <Text>
                 {variationSelecionadaPerc}
                 
            </Text>
            <Text>
        
                {variationFinalFaturamento}
            </Text>
            <Text>
                {faturamentoBase}
            </Text>
            <Text>
                {valorRendido}
            </Text>
            <Text>
                { valorAplicado * despesasPerc[1]}
            </Text>
            <Text>
                { valorRendido}
            </Text>
        
            <Pressable onPress={mudarVariação}>
                <Text>
                    oissssss
                </Text>
            </Pressable>
        </View>
    )
}

export default ResultFinance