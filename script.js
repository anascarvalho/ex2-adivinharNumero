/*let num = 34;
let adivinha = 0;
let validar = 0;

while (validar == 0) {
    adivinha = prompt("Tente adivinhar o número!");
    
    if(adivinha < 0 || adivinha > 50){
        alert("ERRO! DIGITE UM VALOR ENTRE 0 E 50")
    } else if(adivinha == num){
        alert("Parabéns! Você acertou.")
        validar = 1;
    }else if(adivinha < num){
        alert("Errado! Tente um número maior.")
    }else{
        alert("Errado! Tente um número menor.")
        
    }
    
}*/







let num = [];
let sorteado =0;
let adivinha = 0;
let validar = 0;

function num_aleatorio(){
    for(i=0;i<50;i++){
        num.push(Math.floor((Math.random() * 50) + 1));
    }
}

num_aleatorio();

sorteado = num[2];

console.log(num + "\n" + sorteado);

while (validar == 0) {
    adivinha = prompt("Tente adivinhar o número!");
    
    if(adivinha < 0 || adivinha > 50){
        alert("ERRO! DIGITE UM VALOR ENTRE 0 E 50")
    } else if(adivinha == sorteado){
        alert("Parabéns! Você acertou.")
        validar = 1;
    }else if(adivinha < sorteado){
        alert("Errado! Tente um número maior.")
    }else{
        alert("Errado! Tente um número menor.")
        
    }
    
}
