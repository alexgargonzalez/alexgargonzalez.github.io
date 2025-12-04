import { UI } from "./UI.js";


export class Simon {

  constructor(UI) {
    //Genero una lista para el Juego y el Jugador, aqui se va a meter la secuencia que se va a mostrar por pantalla
    this.listaJugadores = [];
    this.listaJuego = [];
    this.UI = UI;
    this.btn = UI.btn;
  }

  iniciarJuego() {
    //Inicializo la lista deL JUEGO y JUGADOR a VACIA para que cada vez que empiece el juego empiece de nuevo
    this.listaJuego = [];
    this.listaJugadores = [];
    this.genenarSecuencia();
    this.reproducirSecuencia();
  }

  genenarSecuencia() {
    //Genero una secuencia aleatoria y se la voy añadiendo a la lista del JUEGO segun el indice de la lista de botones.
    let indiceAleatorio = Math.floor(Math.random() * this.btn.length);
    this.listaJuego.push(this.btn[indiceAleatorio]);
    this.listaJugadores = []
  }


  async reproducirSecuencia() {
    //Aqui bloqueo los eventos de los botones añadiendo la clase bloq que tiene "pointer-events: none;"
    this.UI.bloquearBotones();

    //Aqui recorro cada boton de la lista "ListaJuego" que es la que se genera aleatoriamente, y voy iluminando uno a uno los elementos de la lista
    for (const elemento of this.listaJuego) {

      await this.UI.iluminar(elemento);

    // Y aqui entre cada elemento me espero 0.3s para cada iteraccion para que no se ejecute de nuevo automaticamente.
      await new Promise((resolve) => {
        setTimeout(resolve, 300);
      });
    }
    // Aqui quito la clase "bloq" para poder interaccion 
    this.UI.desbloquearBotones();
  }


  continuarJuego() {
    this.genenarSecuencia();
    this.reproducirSecuencia();
  }

  comprobarSecuenciaFinal() {
    for (let index = 0; index < this.listaJuego.length; index++) {
      if (this.listaJuego[index] != this.listaJugadores[index]) {
        alert("Has perdido");
        return;
      }
    }
    UI.rondas.innerHTML = this.listaJugadores.length;
    this.continuarJuego();
  }
}
