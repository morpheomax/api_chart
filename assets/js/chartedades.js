
export const edadesUsers = (data, container) =>{
   

    const colores = data.edad.map((el)=>{
        return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},0.5)`})   
    // console.log(colores)
    // Card con dato
data.edad.forEach((el, index)=>{

// console.log(data.edad)

// Grafico
const ctx = document.getElementById("chart-edades").getContext("2d");

let graficoEdades = new Chart(ctx, {
  type: 'line',
  data: {
    labels: data.edad,
    datasets: [{
      label: 'Edades',
      data: data.cantidad,
      
      backgroundColor: colores,
      borderColor: colores,
      borderWidth:1
    }]
  },
  options:{
    scales:{
        y:{
            beginAtZero: true
        }
    }
  }
})


})
}