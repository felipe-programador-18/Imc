const imc = (peso, altura) => {
 return peso / (altura *altura)
}


const Clear = valor => {
    return parseFloat(valor).toFixed(1)
}




module.exports= {
  imc,
  Clear
}