const cronometro = document.querySelector('.cronometro');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const reiniciar = document.querySelector('.reiniciar');
let segundos = 0;
let timer;


function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        cronometro.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}


 iniciar.addEventListener('click', function (event){  
    cronometro.classList.remove('pausado')
     clearInterval(timer)
    iniciaRelogio(); });

 pausar.addEventListener('click', function (event){
     clearInterval(timer);
     cronometro.classList.add('pausado')

 });

 reiniciar.addEventListener('click', function (event){
     clearInterval(timer);
     cronometro.innerHTML = '00:00:00'
     segundos = 0;
 });


