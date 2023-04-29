//declaro las variables
const linkApi = "https://randomuser.me/api/?results=";
const qty = 20;
const dataApi = `${linkApi}${qty}`;

//creo la funcion Fetch Try Catch
const apiLink = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//recupero la los datos de la base de datos
const url = dataApi;
const datos = await apiLink(url);

/* // TODO -  ahora los puedo usar como lo necesite, muestro los datos ordenado por nombre asc

// Creo una constante que contenga los datos de la clave 'name' ordenados

const nombres = document.querySelector("#datos");

const nombresOrdenados = datos.results
  .map((resultado) => resultado.name.first.toLocaleLowerCase())
  .sort((nombreA, nombreB) =>
    nombreA < nombreB ? -1 : nombreA > nombreB ? 1 : 0
  );

nombres.innerHTML = nombresOrdenados.join(", ");


// MAP de Datos

/* 
! Extrae todos los campos
const datos1 = datos.results.map((resultDatos1) => {
    return {
      resultDatos1
    };
  });
  
  // Mostrar resultados en la consola
  console.log(datos1);
*/

// !extrae solo los campos necesarios
const resultados = datos.results.map((resultado) => {
  return {
    imagen: resultado.picture.thumbnail,
    nombre: resultado.name.first,
    apellido: resultado.name.last,
    edad: resultado.dob.age,
    genero: resultado.gender,
    pais: resultado.location.country,
  };
});

// Mostrar resultados en la consola
console.log(resultados);

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

  img.src = resultado.imagen;
  tdImagen.appendChild(img);
  tdNombre.textContent = resultado.nombre;
  tdApellido.textContent = resultado.apellido;
  tdEdad.textContent = resultado.edad;
  tdGenero.textContent = resultado.genero;
  tdPais.textContent = resultado.pais;

  tr.appendChild(tdImagen);
  tr.appendChild(tdNombre);
  tr.appendChild(tdApellido);
  tr.appendChild(tdEdad);
  tr.appendChild(tdGenero);
  tr.appendChild(tdPais);
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
console.log(countPais);

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
console.log(countGenders);

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
