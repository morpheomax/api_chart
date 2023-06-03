### Conexión API desde Javascript

__En este ejemplo se realizó una conexión API utilizando JavaScript Fetch y manejar errores utilizando try-catch. 
__Utilizamos la API de usuarios de "Random User" como ejemplo. Aquí hay un resumen de los pasos principales:

1. Utilizamos el método Fetch para realizar una solicitud a la API, pasando la URL correspondiente y cualquier parámetro necesario.

2. Utilizamos la palabra clave `await` para esperar la respuesta de la solicitud y luego la convertimos en formato JSON utilizando el método `response.json()`.

3. Capturamos cualquier error que pueda ocurrir durante la solicitud utilizando el bloque `catch`.

4. Para visualizar los resultados, utilizamos la biblioteca Chart.js. Creamos un gráfico de barras que muestra información sobre los usuarios.

5. Definimos las etiquetas y los datos del gráfico utilizando los datos obtenidos de la API.

6. Mostramos el gráfico en una página HTML utilizando un elemento `<canvas>` con un identificador único.

Recuerda incluir el archivo JavaScript de Chart.js en tu proyecto y asegurarte de incluir el código necesario en tu página HTML para mostrar el gráfico.

¡Ahora estás listo para crear conexiones API y visualizar los resultados utilizando JavaScript Fetch y Chart.js!
