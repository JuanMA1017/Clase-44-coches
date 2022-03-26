class Menu {
    constructor(){
        this.title=createElement("h1")
        this.nuevacarrera=createButton("Nuevo Trayecto")
        this.continuar=createButton("Continuar")
        this.salir=createButton("Salir")
    }
    hide(){
        this.title.hide()
        this.nuevacarrera.hide()
        this.continuar.hide()
        this.salir.hide()
    }
    display(){
        this.title.html("Corriendo por la Gloria")
        this.title.position(width/2, height/8)
        this.nuevacarrera.position(width/2, height/3)
        this.continuar.position(width/2, height/2)
        this.salir.position(width/2, height/1.3)

        this.nuevacarrera.mousePressed(()=>{
            this.title.hide()
            this.nuevacarrera.hide()
            this.continuar.hide()
            this.salir.hide()
            jugador1.start()
        })
    }
}