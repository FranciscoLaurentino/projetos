const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const titulo = document.getElementById('titulo');
const dia = document.getElementById('dia')
const mês = document.getElementById('mês')
const ano = document.getElementById('ano')


const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();
    let d = dateToday.getDate();
    let m = dateToday.getMonth();
    let a = dateToday.getFullYear();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;


    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
    titulo.textContent = hr + " : " + min +" : " + seg;
    dia.textContent = d;
    mês.textContent = m + 1
    ano.textContent = a
})