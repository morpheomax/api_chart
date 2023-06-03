import { resultados } from "./api.js";
import {estadosUsers} from "./chartestados.js"

// & cantidad de personas por Estado

const estadoTbody = document.querySelector("#countEstado tbody");
export const estadostabla = async () => {

  const formatData = {
    name:'estados',
    estado: [],
    cantidad:[]
  };

  let countEstados = {};
  const qtypersonas = await resultados();
  qtypersonas.forEach((item) => {
    if (countEstados[item.estado]) {
      countEstados[item.estado]++;
    } else {
      countEstados[item.estado] = 1;
    }
  });

  estadoTbody.innerHTML = "";
  Object.entries(countEstados).forEach(([key, value]) => {

    formatData.estado.push(key)
    formatData.cantidad.push(value)
    // console.log(key);
    // console.log(value);
    // estadoTbody.innerHTML += `
    // <tr>
    // <td>${key}</td>
    // <td>${value}</td>
    // </tr>
    // `;
    // console.log(estadoTbody);
  });
  estadosUsers(formatData)
};
