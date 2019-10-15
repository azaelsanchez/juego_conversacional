//iniciamos habitacion
habitacion.iniciarDimensiones(5,5);
habitacion.rellenarMapaVacio();
//iniciamos personaje
personaje.iniciarPosicion(2,4);
objeto.iniciarPosicion(ajo(1,5), ajo(1,5));
habitacion.colocarElm(personaje.x,personaje.y,personaje.icono);
habitacion.colocarElm(objeto.x,objeto.y,objeto.icono);
habitacion.pintarMapa();

var accion="";
while(accion!="X"){
    accion=prompt();
    habitacion.moverJugador(accion,personaje);
    if(personaje.x == objeto.x && personaje.y == objeto.y){
        accion = "X";
        console.log("Me mori wei");
}else habitacion.pintarMapa();
    }
