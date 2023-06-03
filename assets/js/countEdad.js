import { resultados } from "./api.js";
import {edadesUsers} from "./chartedades.js"

// & cantidad de personas por edad


const edadTbody = document.querySelector("#countEdad tbody");

export const edadtabla = async () => {

  const formatData = {
    name:'edades',
    edad: [],
    cantidad:[]
  };

 
  
  let countEdades = {};
  
  const qtypersonas = await resultados();
  qtypersonas.forEach((item) => {
    if (countEdades[item.edad]) {
      countEdades[item.edad]++;
    } else {
      countEdades[item.edad] = 1;
    }
  });

  edadTbody.innerHTML = "";
  Object.entries(countEdades).forEach(([key, value]) => {

    formatData.edad.push(key)
    formatData.cantidad.push(value)
    // console.log(key);
    // console.log(value);
    // gendersTbody.innerHTML += `
    // <tr>
    // <td>${key}</td>
    // <td>${value}</td>
    // </tr>
    // `;
    // console.log(gendersTbody);
  });
 
  edadesUsers(formatData)
};
