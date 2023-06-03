export const paises = (data, container) =>{

  // console.log(container)
  // Card con dato
data.pais.forEach((el, index)=>{
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
})
}