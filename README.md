PROYECTO: Prueba para Desarrollador Junior - Node.js y MongoDB

Descripción

En este proyecto se realiza la conexión dentro de una base de datos de mongo db con nodesjs con su framework de express que permite la creación de aplicaciones web de manera sencilla, para el backend, donde se utilizo nodemon para la cual es una herramienta que facilita el desarrollo de aplicaciones ya que va actualizando constantemente mientras se va trabajando sobre el proyecto, donde el package.json se agrega un script para su ejecución y dentro del cmd se use el comando npm run dev. y al final de este proyecto permite la gestión de usuarios con operaciones CRUD (Crear, Leer, Actualizar, Eliminar) y cuenta con validaciones básicas.

Requisitos

Node.js (versión más reciente)

MongoDB (instancia local)

npm (administrador de paquetes de Node.js)

postman o thunderclient para la ejecucion de los metodos http

Configuración:

Clona el repositorio con el comando :

git clone https://github.com/JaimeFar94/Prueba_Mongodb.git.

instala las dependencias para poder trabajar el proyecto con el comando:

npm install




Rutas de la API
Método	Ruta	Descripción
POST	/usuarios	Crea un nuevo usuario
GET	/usuarios	Obtiene la lista de usuarios
GET	/usuarios/:id	Obtiene la información de un usuario por ID
PUT	/usuarios/:id	Actualiza la información de un usuario por ID
DELETE	/usuarios/:id	Elimina un usuario por ID
GET	/usuarios/buscar	Busca usuarios por ciudad (parámetro ?ciudad)






