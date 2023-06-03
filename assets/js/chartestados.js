export const estadosUsers = (data, container) => {

  const colores = data.estado.map((el) => {
    return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)},0.5)`;
  });
//   console.log(colores)
  // Card con dato
  data.estado.forEach((el, index) => {
    // console.log(data.estado)

    // Grafico
    const ctx = document.getElementById("chart-estados").getContext("2d");

    let graficoEdades = new Chart(ctx, {
        type: "bar",
        data: {
            labels: data.estado,
              datasets: [{
                label: 'Estados',
                data: data.cantidad,
                backgroundColor: colores
              }]
        },
      })
      })
    }