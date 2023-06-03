import { resultados } from "./api.js";
import { paises } from "./chartpais.js";

const container = document.getElementById("cards-gender");

// & cantidad de personas por pais

const paisTbody = document.querySelector("#countPais tbody");
export const paistabla = async () => {
  const formatData = {
    name: "paises",
    pais: [],
    cantidad: [],
  };

  container.innerHTML = "";

  let countPais = {};

  const qtypersonas = await resultados();
  qtypersonas.forEach((item) => {
    if (countPais[item.pais]) {
      countPais[item.pais]++;
    } else {
      countPais[item.pais] = 1;
    }
  });

  paisTbody.innerHTML = "";
  Object.entries(countPais).forEach(([key, value]) => {
    formatData.pais.push(key);
    formatData.cantidad.push(value);
    // console.log(key);
    // // console.log(value);
    // paisTbody.innerHTML += `
    // <tr>
    // <td>${key}</td>
    // <td>${value}</td>
    // </tr>
    // `;
    // console.log(paisTbody);
  });
  paises(formatData, container);
};
