let limpa;
function mostrarTela(valor){
  
    if(limpa == 1 && (valor == '*' || valor == '-' || valor == '+' || valor == '/') ){
        res = document.getElementById('res').innerHTML += valor
        limpa = 2
   
    }
    if(limpa == 1){
        acaoCe() 
          
    }
   console.log(limpa)
  if (!((limpa == 2) && (valor == '*' || valor == '-' || valor == '+' || valor == '/')) ) {
    res = document.getElementById('res').innerHTML += valor
    limpa = undefined
  } 
   
}

function acaoCe(){
    document.getElementById('res').innerHTML = ''
}

function acaoDel(){
    let  res = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = res.substring(0, res.length -1)
        
}

function acaoI(){
    let  res = document.getElementById('res').innerHTML;
    limpa = 1
    if(res){
        document.getElementById('res').innerHTML = eval(res)
    }
    console.log(limpa)
    return limpa

}

