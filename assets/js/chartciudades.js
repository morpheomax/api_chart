export const renderCiudad =(datos) =>{

  const colores = datos.ciudades.map((el)=>{
return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},0.5)`})

// console.log(colores)

const ctx = document.getElementById("chart-Ciudades").getContext("2d");
let myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: datos.ciudades,
    datasets: [
      {
        label: 'Ciudades',
        data: datos.cantidad,
        backgroundColor: colores
      },
    ],
  },
  options: {
    scales: {
      // estas opciones se aplican a grafico de barra, ya que con beginAtZero indicamos que queremos que el grafico comience en 0 y no con el minimo valor que queremos graficar
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
})
}

