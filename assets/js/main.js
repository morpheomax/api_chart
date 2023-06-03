import { resultados } from "./api.js";
import { ciudadestabla } from "./countCiudades.js";
import { paistabla } from "./countPais.js";
import { genderstabla } from "./countGenders.js";
import { edadtabla } from "./countEdad.js";
import { estadostabla } from "./countEstados.js";
import { tabladatos } from "./tabladatos.js";

const qtyInput = document.getElementById("qty");
const country = document.getElementById("country");

qtyInput.addEventListener("change", ciudadestabla);
country.addEventListener("change", ciudadestabla);

qtyInput.addEventListener("change", paistabla);
country.addEventListener("change", paistabla);

qtyInput.addEventListener("change", genderstabla);
country.addEventListener("change", genderstabla);

qtyInput.addEventListener("change", edadtabla);
country.addEventListener("change", edadtabla);

qtyInput.addEventListener("change", estadostabla);
country.addEventListener("change", estadostabla);

qtyInput.addEventListener("change", estadostabla);
country.addEventListener("change", estadostabla);

qtyInput.addEventListener("change", tabladatos);
country.addEventListener("change", tabladatos);
