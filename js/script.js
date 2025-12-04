import { Simon } from "./Simon.js";
import { UI } from "./UI.js"


 UI.init({
      verde: "verde",
      rojo: "rojo",
      azul: "azul",
      amarillo: "amarillo",
      rondas: "rondas",
});

let simon = new Simon(UI);

UI.añadirEventos(simon)
simon.iniciarJuego()