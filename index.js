const displayValorAnterior=document.getElementById('valor-anterior');
const displayValorActual=document.getElementById('valor-actual');
const botonesNumeros=document.querySelectorAll('.numero');
const botonesOperadores=document.querySelectorAll('.operador');
 
const display= new Display(displayValorAnterior,displayValorActual);
//pasaje de valores de los botones
botonesNumeros.forEach(boton=>{
    boton.addEventListener('click',()=>{
    display.agregarnumero(boton.innerHTML)
    });
});

botonesOperadores.forEach(boton =>{
    boton.addEventListener('click',()=>
        display.computar(boton.value))
})