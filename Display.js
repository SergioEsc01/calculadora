class Display{
    constructor(displayValorAnterior,displayValorActual){
        this.displayValorActual=displayValorActual;
        this.displayValorAnterior=displayValorAnterior;
        this.calculadora=new Calculadora();
        this.tipooperacion=undefined;
        this.valorActual='';
        this.valorAnterior='';
        this.signos={
            suma:'+',
            division:'/',
            multiplicacion:'x',
            resta:'-',
            exp:'∧',

        }

    }
    borrar(){
        this.valorActual=this.valorActual.toString().slice(0,-1);
        this.imprimirvalores();
    }

    borrarc(){
        this.valorActual='';
        this.valorAnterior='';
        this.tipooperacion=undefined;
        this.imprimirvalores();
    }
    
    computar(tipo){
this.tipooperacion !=='igual' && this.calcular();
this.tipooperacion=tipo;
this.valorAnterior=this.valorActual || this.valorAnterior;
this.valorActual='';
this.imprimirvalores();

    }
    agregarnumero(numero){
        if(numero===',' && this.valorActual.includes(','))return
this.valorActual=this.valorActual.toString() +numero.toString();
this.imprimirvalores();
    }
    imprimirvalores(){
        this.displayValorActual.textContent= this.valorActual;
        this.displayValorAnterior.textContent= `${this.valorAnterior} ${this.signos[this.tipooperacion] || ''} ` ;
    }
    calcular(){
        const valorAnterior=parsefloat(this.valorAnterior);
        const valorActual=parsefloat(this.valorActual);
        if(isNaN(valorActual || valorAnterior))return
        this.valorActual=this.calculadora[this.tipooperacion](valorAnterior,valorActual);
    }
}