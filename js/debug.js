//iniciamos habitacion
habitacion.iniciarDimensiones(5,5);
habitacion.rellenarMapaVacio();
//iniciamos personaje
personaje.iniciarPosicion(2,4);
objeto.iniciarPosicion(3,1);
habitacion.colocarElm(personaje.x,personaje.y,personaje.icono);
habitacion.colocarElm(objeto.x,objeto.y,objeto.icono);
habitacion.pintarMapa();

var accion="";
while(accion!="X"){
    accion=prompt();
    habitacion.moverJugador(accion,personaje);
    if(personaje.x == objeto.x && personaje.y == objeto.y){
        console.log("Has muerto");
        accion = "X";
}else habitacion.pintarMapa();
    }
