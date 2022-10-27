estado = true
function valor(n){
    let valor = n
    if(valor == "X"){ 
        valor = "*"
    }
    if(valor == ","){ 
        valor = "."
    }
    let res = document.getElementById('res')
    switch (estado){
        case true:
            res.innerHTML += valor 
            break;
        
        case false:
            if((valor == "+") || (valor == "*") || (valor == "/") || (valor == "-")){
                res.innerHTML += valor 
            }else{
                AC()
                res.innerHTML += valor 
            }
            estado = true
            break;
    }
       
}
function DEL(){
    let res = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = res.substring(0, res.length -1)

}

function AC(){
    document.getElementById('res').innerHTML = ""
   
}
function igual(){
    switch (estado) {
        case true:
            let res = document.getElementById('res').innerHTML
            document.getElementById('res').innerHTML = eval(res)
            estado = false
            break
    }  
   
}

