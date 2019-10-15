var habitacion={
    mapa:[],
    altoMapa:6,
    anchoMapa:11,
    padSup:1,
    padIzq:3,
    padDrc:2,
    posMapa:0,
    iniciarDimensiones(ancho,alto){
        this.anchoMapa=ancho+this.padIzq+this.padDrc+1;
        this.altoMapa=alto+this.padSup;
    },
    rellenarCelda(elem){
        this.mapa[this.posMapa]=elem;
        this.posMapa++;
        if((this.posMapa)>(this.altoMapa*this.anchoMapa)){
            return false;
        }else{
            return true;
        }
    },
    rellenarMapaVacio:function(){
        //pintamos numeros de referencia
        this.rellenarCelda(" ");
        this.rellenarCelda(" ");
        this.rellenarCelda(" ");
        for (let i = 1; i < this.anchoMapa-5; i++) {
            this.rellenarCelda(i);
        }
        this.rellenarCelda(" ");
        this.rellenarCelda(" ");
        //pintamos resto de mapa
        let finMapa=true;
        let posFila=1;
        let posColumna=1;
        while (finMapa) {
            if(posFila==1){
                finMapa=this.rellenarCelda(posColumna);
                posFila++;
            }else if(posFila==2){
                finMapa=this.rellenarCelda("|");
                posFila++;
            }else if(posFila==3){
                finMapa=this.rellenarCelda(" ");       
                posFila++;
            }else if(posFila==(this.anchoMapa-2)){
                finMapa=this.rellenarCelda(" ");
                posFila++;
            }else if(posFila==(this.anchoMapa-1)){
                finMapa=this.rellenarCelda("|");
                posColumna++;
                posFila=1;
            }
            else{
                finMapa=this.rellenarCelda("-");
                posFila++;
            }
        }
    },
    pintarMapa:function(){
        let posFila=1;
        let fila="";
        for (const celda of this.mapa) {
            if(posFila==(this.anchoMapa-1)){
                fila=fila+celda;
                console.log(fila);
                fila="";
                posFila=1;
            }else{
                fila=fila+celda;
                posFila++;
            }
        }
    },
    colocarElm:function(x,y,icono){
        this.mapa[(x+this.padIzq-1)+(y*(this.anchoMapa-1))]=icono;
    },
    moverJugador(mov,jug){
        switch (mov) {
            case "N":
                if(jug.y!=1){
                    this.colocarElm(jug.x,jug.y,"-");
                    jug.y=jug.y-1;
                    this.colocarElm(jug.x,jug.y,jug.icono);
                }
              break;
            case "S":
                if(jug.y!=(this.altoMapa-1)){
                    this.colocarElm(jug.x,jug.y,"-");
                    jug.y=jug.y+1;
                    this.colocarElm(jug.x,jug.y,jug.icono);
                }             
              break;
            case "E":
                if(jug.x!=(this.anchoMapa-this.padIzq-this.padDrc-1)){
                    this.colocarElm(jug.x,jug.y,"-");
                    jug.x=jug.x+1;
                    this.colocarElm(jug.x,jug.y,jug.icono);
                }                 
                break;
            case "O":
                if(jug.x!=1){
                    this.colocarElm(jug.x,jug.y,"-");
                    jug.x=jug.x-1;
                    this.colocarElm(jug.x,jug.y,jug.icono);
                }                 
                break;             
              break;
            default:
              
              break;
        };
    }
}