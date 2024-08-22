const numeroSolicitado = () => {
    let numero = prompt("ingrese un numero entre 1 y 20");
    numero = parseInt(numero);
    
    if (numero >= 1  && numero <=20 ) {

        calculoFactorial(numero);


    }
    else {
        console.log("ingrese un numero solamente entre 1 y 20");
    }



}

const calculoFactorial= (num) => {

   

    for(let i =1; i <= num; i++) {

        let factorial = 1;

        console.log(`${i} x ${num} = ${i * num}`);

        for(let j = 1; j <= i; j++) {
        
            factorial *= j;
            
        }
        console.log(`el factorial de ${i} es: ${factorial}`); 

    }
}




numeroSolicitado();

