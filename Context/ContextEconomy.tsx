import React, { createContext } from "react"
import { useState } from "react"
type EconomyContextType = {
    children: React.ReactNode
}

type operationsBankType = 'ADICIONAR' | 'DEBITAR' | 'EXTRATO'

type historyBankType =
    {
        operação: operationsBankType
        valor: number
    }




type SetoresId = 'agricultura' | 'tecnologia' | 'industria' | 'comercio' | 'imobiliario' | 'energia'

type EconomyContextProviderType = {

    saldoBancario: number
    valorAplicado: Record<SetoresId, number>
}

type EconomyGlobal = {
    economia: EconomyContextProviderType
}

type ActionBankType = {
    operação: operationsBankType
    value: number
}


export const ContextEconomy = createContext<EconomyGlobal | null>(null)

export function EconomyContext({ children }: EconomyContextType) {

    const [saldoAjustado, ActionBank] = useState(0)

    const actionBankFunction = () => {

    }

    //   const extrato:historyBankType[] = []

    //     const atualizarSaldo = ( operation:operationsBankType,valor:number):void => {

    //         if (operation === 'ADICIONAR' && saldoBancario !== undefined) {
    //              saldoBancario + valor
    //              extrato.push({operação:"ADICIONAR",valor})
    //         } else if (operation === 'DEBITAR' && saldoBancario !== undefined) {
    //             if (saldoBancario >= valor) {

    //                  saldoBancario - valor

    //                 extrato.push({operação:"DEBITAR",valor})
    //             }
    //             return
    //         }
    //     }

    // const ultimaOperação = atualizarSaldo('ADICIONAR',2000)



    const economia = {
        saldoBancario: 12100000,
        valorAplicado: {
            agricultura: 1200000,
            tecnologia: 1200000,
            industria: 1200000,
            comercio: 1200000,
            imobiliario: 1200000,
            energia: 1200000,
        }
    }


    const atualizarSaldo = (prev: number) => {
        prev + economia.saldoBancario
    }


    const AdicionarSaldo = (operation: operationsBankType, value: number): void => {
        if (operation === 'ADICIONAR'){
            
        }
if (operation === 'DEBITAR')
        atualizarSaldo(economia.saldoBancario - value)
}



return (
    <ContextEconomy.Provider value={{ economia }}>
        {children}
    </ContextEconomy.Provider>
)

}



