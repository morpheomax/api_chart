const form = document.getElementById("form");
const qtyInput = document.getElementById("qty");
const country = document.getElementById("country");
// const button = document.getElementById("submit");

const linkApi = "https://randomuser.me/api/";

let datos = null; // Variable para almacenar los datos de usuarios

const getUsuarios = async (e) => {
  //   e.preventDefault();

  const qtyValue = qtyInput.value;
  const countryValue = country.value;
  const dataApi = `${linkApi}?nat=${countryValue}&results=${qtyValue}`;

  try {
    const data = await fetch(dataApi);
    datos = await data.json(); // Almacenar los datos en la variable datos

    // console.log(qtyValue);
    // console.log(countryValue);
    // console.log(datos);

    return datos;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// button.addEventListener("click", );

export const resultados = async () => {
  datos = await getUsuarios();

  if (datos) {
    return datos.results.map((resultado) => {
      return {
        imagen: resultado.picture.thumbnail,
        nombre: resultado.name.first,
        apellido: resultado.name.last,
        edad: resultado.dob.age,
        genero: resultado.gender,
        pais: resultado.location.country,
        ciudad: resultado.location.city,
        estado: resultado.location.state,
      };
    });
  } else {
    return [];
  }
};

qtyInput.addEventListener("change", resultados);
country.addEventListener("change", resultados);

// console.log(await resultados());

