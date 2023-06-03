
export const genderUser = (data, container) =>{
   
    // console.log(container)
    // Card con dato
data.gender.forEach((el, index)=>{
container.innerHTML+= `
<div class="col-sm-4 mb-3 mb-sm-0">
    <div class="card" >
      <div class="card-body">
        <h5 class="card-title text-center">${el.toUpperCase()}</h5>
        <p class="card-text text-center">${data.cantidad[index]}</p>
        
      </div>
    </div>
  </div>
`


// console.log(data.gender)

// Grafico
const ctx = document.getElementById("chart-gender").getContext("2d");

let graficoGeneros = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: data.gender,
    datasets: [{
      label: 'Generos',
      data: data.cantidad,
      backgroundColor: [
        'rgb(255, 99, 132 )',
        'rgb(75, 192, 192)'
      ]
    }]
  }
})


})
}