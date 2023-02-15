import { alerta } from "./component/alerta.js";
import { buscarinmueble } from "./component/buscar.js";
import { guardarForm } from "./component/guardarForm.js";
import { listarinmueble } from "./component/listarinmueble.js";
import { inmueble } from './data/inmueble.js';





const inputs = document.querySelectorAll("form input");
const enviar = document.querySelector("#enviar");
const buscar = document.querySelector("#buscar");
const listar = document.querySelector("#listar");

alerta(inputs);
guardarForm( enviar, inmueble );
buscarinmueble(buscar,inmueble);
listarinmueble(listar,inmueble);

