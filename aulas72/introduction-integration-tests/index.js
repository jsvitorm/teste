function aplicarDesconto(valor, desconto){
    if(desconto > valor) return 0;
    return valor - desconto;
 }
 
 function calcularIdade(dataNascimento) {

    var data = new Date()
    console.log(data)
    var anoAtual = data.getFullYear();
    console.log(anoAtual);

    var dataNasc = new Date(dataNascimento,0,1);
    console.log(dataNasc)
    var anoNasc = dataNasc.getFullYear()
    console.log(anoNasc)
    return Number(anoAtual) - Number(anoNasc);
  }

function verificarMaiorDeIdade(idade) {
    return idade >= 18;
  }

 module.exports = { aplicarDesconto, calcularIdade, verificarMaiorDeIdade }
