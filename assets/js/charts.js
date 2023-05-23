

const ctx= document.getElementById("myChart").getContext("2d");
        let myChart= new Chart(ctx,{
            type:"bar",
            data:{
                labels:['col1','col2','col3'],
                datasets:[{
                        label:'Num datos',
                        data:[10,9,12],
                        backgroundColor:[
                            'rgb(66, 134, 244,0.5)',
                            'rgb(74, 135, 72,0.5)',
                            'rgb(229, 89, 50,0.5)'
                        ]
                }]
            },
            options:{
                scales:{
                    // estas opciones se aplican a grafico de barra, ya que con beginAtZero indicamos que queremos que el grafico comience en 0 y no con el minimo valor que queremos graficar
                    yAxes:[{
                            ticks:{
                                beginAtZero:true
                            }
                    }]
                }
            },
            
        });