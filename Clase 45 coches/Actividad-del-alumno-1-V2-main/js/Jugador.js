class Jugador{
    constructor(){
        this.index=0
        this.name=null
    }
    nombre(Max){
        console.log(Max)
        var playerindex="player "+this.index
        database.ref("Jugador/Nombre").set({
            name: this.name
        })
    }

    informacion(){

    }
}