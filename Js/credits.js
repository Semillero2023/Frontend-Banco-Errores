//Obtiene el cuerpo de la página
var canvas = document.getElementById("Cuerpo");
var ctx = canvas.getContext("2d");
//Pantalla completa
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//Clase balas
class BalaObjeto {
    constructor (yBala, xBala) {
        this.Cory = yBala;
        this.Corx = xBala;
        this.Bala = canvas.getContext("2d");
    }

}
//Arreglo de balas
var Balas = [];
var SuperBalas = [];
//Obtener las cordenadas
var x = canvas.width / 2;
var y =  canvas.height -30 ;  
var xBala = x;
var yBala =  y - 30;  
var carga = 0
var aumento = 1
//velocidades
var dx = 0;
var dy = -5;
//Controles 
var MoveDerecha = false;
var MoveIzquierda = false;
var Disparar = false;
//Listener del teclado
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
//Cmabiar los estados del teclado
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        MoveDerecha = true;
    }
    else if(e.keyCode == 37) {
        MoveIzquierda = true;
    }
    if(e.keyCode == 32) {
        Disparar = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        MoveDerecha = false;
    }
    else if(e.keyCode == 37) {
        MoveIzquierda = false;
    }
    if(e.keyCode == 32) {
        Disparar = false;
        aumento = 1;
        dibujarBalas();
    }
}

//Comenzar a dibujar
function DibujarObjetos (){
    //Begin y closePath sirven para iniciar y finalizar el dibujado
    //Dibujo de un triangulo
    ctx.beginPath();
    ctx.fillStyle =  "#fffffff5" ;
    ctx.moveTo(x, y-50);
    ctx.lineTo(x-30, y);
    ctx.lineTo(x+30, y);
    ctx.fill()
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(25, 50, carga, 25);
    ctx.fillStyle = "#fffffff5";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(25, 50, 200, 25);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
    ctx.stroke();
    ctx.closePath();

    MoverBalas();
}
function dibujarBalas(){
        NuevaBala = new BalaObjeto(yBala,xBala);
        Balas.push(NuevaBala);
}

function MoverBalas (){
    //Recorrer cada bala y moverla
    Balas.map((x) => {
        if (x.Cory > -50){
            x.Corx += dx;
            x.Cory += dy;  
        }       
        x.Bala.beginPath();
        x.Bala.rect(x.Corx, x.Cory, 5, 10);
        x.Bala.fillStyle =  "#fffffff5" ;
        x.Bala.fill();
        x.Bala.closePath();
    });
}

function MoverSuperBalas (){
    //Recorrer cada bala y moverla
    Balas.map((x) => {
        if (x.Cory > -50){
            x.Corx += dx;
            x.Cory += dy;  
        }       
        x.Bala.beginPath();
        x.Bala.rect(x.Corx, x.Cory, 5, 10);
        x.Bala.fillStyle =  "#fffffff5" ;
        x.Bala.fill();
        x.Bala.closePath();
    });
}

function dibujar(){
    //Limpiar el lienzo
    ctx.clearRect(0,0,canvas.width,canvas.height);
    DibujarObjetos();
    //Escucha rel teclado
    //Si esta a la derecha
    if(MoveDerecha) {
        x += 7;
        xBala = x;
    }
    //Si está a la izquierda
    else if(MoveIzquierda) {
        x -= 7;
        xBala = x;
    }
    if(Disparar && carga <= 200) {
        carga += 0.05*aumento;
        aumento += 0.1;
        console.log(carga)
    }
    else if (carga >= 200){
        while (carga  >= 0){
            carga =-1;
            setInterval(dibujarBalas,1000);
        }
    }
    
}
//Bucle para dibujar cada 10 milisegundos
setInterval(dibujar,10);