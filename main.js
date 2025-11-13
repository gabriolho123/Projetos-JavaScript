const contadorDiv = document.querySelector('#contador');
const btnAdicionar = document.querySelector('#btn-adicionar');

function somar() {
   
    let total = +contadorDiv.textContent; 
    if (total < 10) {
      
        total = total + 1; 

        contadorDiv.textContent = total;
    } else {
       
    }
}

btnAdicionar.addEventListener('click', somar);