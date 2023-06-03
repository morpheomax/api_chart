import { resultados } from "./api.js";

const tbody = document.querySelector("#resultados tbody");

export const tabladatos = async () => {
  tbody.innerHTML = "";
  try {
    const data = await resultados();

    data.forEach((resultado) => {
      const fila = document.createElement("tr");

      const imagen = document.createElement("td");
      imagen.innerHTML = `<img src="${resultado.imagen}" alt="${resultado.nombre}">`;
      fila.appendChild(imagen);

      const nombre = document.createElement("td");
      nombre.textContent = resultado.nombre;
      fila.appendChild(nombre);

      const apellido = document.createElement("td");
      apellido.textContent = resultado.apellido;
      fila.appendChild(apellido);

      const edad = document.createElement("td");
      edad.textContent = resultado.edad;
      fila.appendChild(edad);

      const genero = document.createElement("td");
      genero.textContent = resultado.genero;
      fila.appendChild(genero);

      const pais = document.createElement("td");
      pais.textContent = resultado.pais;
      fila.appendChild(pais);

      const ciudad = document.createElement("td");
      ciudad.textContent = resultado.ciudad;
      fila.appendChild(ciudad);

      const estado = document.createElement("td");
      estado.textContent = resultado.estado;
      fila.appendChild(estado);

      tbody.appendChild(fila);
    });
  } catch (error) {
    console.log(error);
  }
};
