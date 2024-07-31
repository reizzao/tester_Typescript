// auxiliar : acumula em unica var os dados
function auxAccumulator(initial, item) {
  return initial += item;
}

// myReduce para uso
export const useREDUCE = (list, opAccumulators, opFinal, initial) => {
  try {
    const arr = list;
    let operacao = initial;

    for (let i = initial; i < arr.length; i++) {
      operacao = auxAccumulator(operacao, opAccumulators(arr[i]));
    }
    const opFinalaposAcumulados = opFinal(operacao);

    return opFinalaposAcumulados;
  } catch (e) {
    throw e;
  }
};