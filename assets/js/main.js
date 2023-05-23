import { resultados } from "./api.js";

// Mostrar resultados en la consola
//console.log(resultados);

/*
   &  muestro los datos sin formato en HTML
  const divResultados = document.getElementById("resultados1");

  resultados.forEach((resultado) => {
    const p = document.createElement("p");
    p.innerHTML = `Nombre: ${resultado.nombre} ${resultado.apellido}, Email: ${resultado.email}, Ciudad: ${resultado.ciudad}`;
    divResultados.appendChild(p);
  });
*/

// muestro los datos en formato tabla HTML

const tbody = document.querySelector("#resultados tbody");

resultados.forEach((resultado) => {
  const tr = document.createElement("tr");
  const tdImagen = document.createElement("td");
  const img = document.createElement("img");
  const tdNombre = document.createElement("td");
  const tdApellido = document.createElement("td");
  const tdEdad = document.createElement("td");
  const tdGenero = document.createElement("td");
  const tdPais = document.createElement("td");
  const tdCiudad = document.createElement("td");
  const tdEstado = document.createElement("td");

  img.src = resultado.imagen;
  tdImagen.appendChild(img);
  tdNombre.textContent = resultado.nombre;
  tdApellido.textContent = resultado.apellido;
  tdEdad.textContent = resultado.edad;
  tdGenero.textContent = resultado.genero;
  tdPais.textContent = resultado.pais;
  tdCiudad.textContent = resultado.ciudad;
  tdEstado.textContent = resultado.estado;

  tr.appendChild(tdImagen);
  tr.appendChild(tdNombre);
  tr.appendChild(tdApellido);
  tr.appendChild(tdEdad);
  tr.appendChild(tdGenero);
  tr.appendChild(tdPais);
  tr.appendChild(tdCiudad);
  tr.appendChild(tdEstado);
  tbody.appendChild(tr);
});

// & cantidad de personas por pais

let countPais = {};
resultados.forEach((item) => {
  if (countPais[item.pais]) {
    countPais[item.pais]++;
  } else {
    countPais[item.pais] = 1;
  }
});
//console.log(countPais);

// & Muestro en HTML
const paisTbody = document.querySelector("#datos tbody");
for (const pais in countPais) {
  const paises = `
<tr>
<td>${pais}</td>
<td>${countPais[pais]}</td>
</tr>
`;
  paisTbody.innerHTML += paises;
}

// & cantidad de personas por genero

let countGenders = {};
resultados.forEach((item) => {
  if (countGenders[item.genero]) {
    countGenders[item.genero]++;
  } else {
    countGenders[item.genero] = 1;
  }
});
//console.log(countGenders);

// & Muestro en HTML

const genderTbody = document.querySelector("#gender tbody");
for (const genero in countGenders) {
  const generos = `
<tr>
<td>${genero}</td>
<td>${countGenders[genero]}</td>

</tr>
`;
  genderTbody.innerHTML += generos;
}

// & cantidad de personas por edad

let countEdades = {};
resultados.forEach((item) => {
  if (countEdades[item.edad]) {
    countEdades[item.edad]++;
  } else {
    countEdades[item.edad] = 1;
  }
});
// console.log(countEdades);

// & Muestro en HTML

const edadTbody = document.querySelector("#edades tbody");
for (const edad in countEdades) {
  const edades = `
<tr>
<td>${edad}</td>
<td>${countEdades[edad]}</td>
</tr>
`;
  edadTbody.innerHTML += edades;
}

// & cantidad de personas por ciudad

let countCiudades = {};
resultados.forEach((item) => {
  if (countCiudades[item.ciudad]) {
    countCiudades[item.ciudad]++;
  } else {
    countCiudades[item.ciudad] = 1;
  }
});
// console.log(countCiudades);

// & Muestro en HTML

const ciudadTbody = document.querySelector("#ciudades tbody");
for (const ciudad in countCiudades) {
  const ciudades = `
<tr>
<td>${ciudad}</td>
<td>${countCiudades[ciudad]}</td>
</tr>
`;
  ciudadTbody.innerHTML += ciudades;
}

// & cantidad de personas por Estados

let countEstados = {};
resultados.forEach((item) => {
  if (countEstados[item.estado]) {
    countEstados[item.estado]++;
  } else {
    countEstados[item.estado] = 1;
  }
});
// console.log(countEstados);

// & Muestro en HTML

const estadoTbody = document.querySelector("#estados tbody");
for (const estado in countEstados) {
  const estados = `
<tr>
<td>${estado}</td>
<td>${countEstados[estado]}</td>
</tr>
`;
  estadoTbody.innerHTML += estados;
}
