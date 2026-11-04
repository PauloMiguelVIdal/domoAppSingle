




type economys = 'recessão'| 'declínio'| 'estável'| 'progressiva' | 'aquecida'

const economysArr = ['recessão', 'declínio', 'estável', 'progressiva', 'aquecida']

// const economiaAtual = economys[2]

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
const variacao:number = setoresStatus[index].variacao



const valorAplicado:number = 120000

const faturamento = {
    1:40,
    2:50,
    3:60,
}

const despesas = {
    1:30,
    2:40,
    3:50,
}

const variation: Record<number,number>= {
    1:10,
    2:20,
    3:30,
    4:50,
}






const varMin = 0
const varMax:number = variation[variacao]


const getVariation = (valueMin:number,valueMax:number):number => {
return Math.floor(Math.random() * (valueMax - valueMin) + valueMin ) 
}

 const valorTeste = getVariation(varMin,varMax)

const chamarVariação = () => {
     const valorTeste = getVariation(varMin,varMax)
     alert(valorTeste)
}


const gerarVariação = (x:number,y:number):number =>{
    return Math.abs(y-x)
} 






const formulaFinal = (valorAplicado * faturamento[1]) - (valorAplicado * despesas[1])



// const mult = (economysArr) =>{
//         'recessão': 0.4,
//     'declínio': 0.8,
//     'estável': 1,
//     'progressiva': 1.1,
//     'aquecida': 1.25
// } 


// console.log(mult)