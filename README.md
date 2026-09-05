
# Servicio Web con Node.js

<!--
============================================================
 PLANTILLA DE README.md PARA LOS ENTREGABLES (REPOSITORIOS)
 DE LAS TAREAS Y PRÁCTICAS DEL CURSO
 Sustituye los campos entre [ ] y elimina estos comentarios
 antes de entregar el repositorio.
============================================================
-->

## Datos académicos

| Campo | Detalle |
|---|---|
| **Universidad** | Universidad Autónoma de Chihuahua |
| **Facultad** | Facultad de Ingeniería |
| **Carrera** | Ingeniería en Computación |
| **Materia** | Desarrollo de Aplicaciones Web |
| **Docente** | Matro. Luis Antonio Ramirez Martinez |
| **Actividad** | Tarea 3. Desarrollo de servicios web con Node.js |
| **Alumno** | Osvaldo Hernandez Juarez |
| **Matrícula** | 385493 |
| **Fecha de entrega** | 04/09/2026 |

## Descripción

Aplicación web de gestión de tareas (TODO List) desarrollada con Node.js y Express.
Permite administrar una colección de tareas —crearlas, consultarlas, modificarlas y
eliminarlas— donde cada tarea cuenta con un identificador, un título y un estado que
indica si está pendiente o completada. La información se almacena en memoria durante
la ejecución, sin necesidad de una base de datos.

La aplicación expone las mismas funcionalidades a través de dos interfaces distintas:
una API REST y un servicio SOAP. Ambas consumen una única capa de lógica de negocio
(`taskService`), de modo que el comportamiento es idéntico sin importar el protocolo
utilizado. Esto permite comparar en la práctica dos estilos de comunicación entre
sistemas sobre una misma base de código.

El proyecto integra además herramientas propias del flujo de desarrollo en Node.js:
registro de eventos con Log4js, reinicio automático durante el desarrollo con Supervisor,
análisis estático de código con ESLint y pruebas unitarias con Jest.

## Objetivo

Desarrollar una aplicacion web basica para gestionar tareas (TODO List) utilizando Node.js,
NPM y Express, permitiendo aplicar conceptos fundamentales de la administracion de paquetes y exponer funcionalidades
de la aplicacion mediante servicios SOAP y Rest.

## Tecnologías utilizadas

*Lista el lenguaje, framework(s), librerías y herramientas principales utilizados en el proyecto.*

- [Node.js -Entorno de ejecucion del lado del servidor]
- [NPM -Manejo de dependencias]
- [Express -Framework para la aplicacion y el API REST]
- [Jest -Pruebas unitarias]
- [log4js -Registro de logs y loggins en consola]
- [ESLint -Quality code y analisis estatico]
- [Postman -Herramienta para forzar los metodos HTTP, endpoints REST y operaciones SOAP]
- [supervisor -Refresco en caliente, reinicia el servidor automaticamente al detectar cambios]
- [soap -Publicacion del servicio soap a traves de un contrato WSDL]

## Requisitos previos

-Node.js 18 o superior
-NPM 9 o superior, ya incluido en la instalacion de Node.js
-Git, para clonar el repositorio

## Instalación

Se clona limpiamente el repositorio remoto de git con estos comandos:

```bash
git clone <https://github.com/OsvaExe/Actividad-1-DAW>
cd <Actividad-1-DAW>
[npm install]
```

## Ejecución

Para iniciar el servidor:

```bash
[npm run dev]
```
El servidor se encuentra en `http://localhost:3000`
| Interfaz | Dirección |
|---|---|
| API REST | `http://localhost:3000/api/tasks` |
| Servicio SOAP | `http://localhost:3000/wsdl` |
| Contrato WSDL | `http://localhost:3000/wsdl?wsdl` |


## Scripts / comandos disponibles

*(Sección opcional — inclúyela si el proyecto define scripts o comandos reutilizables, por ejemplo en `package.json`, `Makefile`, etc.)*

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor mediante Supervisor, reiniciándolo de forma automática ante cualquier cambio en el código fuente. Pensado para el desarrollo. |
| `npm test` | Ejecuta las pruebas unitarias con Jest sobre la lógica de administración de tareas. |
| `npm run lint` | Ejecuta ESLint sobre el proyecto para detectar errores y problemas de estilo en el código. |


## Funcionalidades / uso

La aplicacion administra las tareas creadas y guardadas en memoria mediante dos interfaces que reutilizan la misma logica de `taskService`: *REST* y *SOAP*.

### API REST
 
| Método | Endpoint | Descripción | Cuerpo de la petición |
|---|---|---|---|
| `GET` | `/api/tasks` | Devuelve la lista completa de tareas. | — |
| `GET` | `/api/tasks/:id` | Devuelve una tarea específica por su identificador. | — |
| `POST` | `/api/tasks` | Crea una nueva tarea y devuelve la tarea creada. | `{ "title": "..." }` |
| `PUT` | `/api/tasks/:id` | Modifica el título, el estado o ambos de una tarea existente. | `{ "title": "...", "completed": true }` |
| `DELETE` | `/api/tasks/:id` | Elimina una tarea y devuelve la tarea eliminada. | — |
 
**Prueba con Postman.** Configura las peticiones con el encabezado
`Content-Type: application/json` y el cuerpo en formato *raw / JSON*. Por ejemplo,
para crear una tarea:
 
```
POST http://localhost:3000/api/tasks
Content-Type: application/json
 
{ "title": "Estudiar Node.js" }
```
 
La respuesta será la tarea creada con código de estado `201 Created`. En el `PUT`
pueden enviarse únicamente los campos que se desean modificar; los campos ausentes
conservan su valor anterior.
 
### Servicio SOAP
 
El servicio SOAP reutiliza la misma lógica de negocio que la API REST y se define
mediante el contrato `src/soap/taskService.wsdl`. Expone dos operaciones:
 
| Operación | Descripción |
|---|---|
| `GetTasks` | Devuelve la lista completa de tareas. |
| `AddTask` | Crea una nueva tarea a partir de un título y devuelve la tarea creada. |
 
**Prueba con Postman.** Envía una petición `POST` a `http://localhost:3000/wsdl` con
el encabezado `Content-Type: text/xml` y el cuerpo en formato *raw / XML*.

Dado que ambas interfaces comparten la capa `taskService`, una tarea creada mediante
SOAP aparece inmediatamente al consultar `GET /api/tasks`, y viceversa.

### Registro de eventos
 
La aplicación utiliza Log4js en lugar de `console.log()`. Los eventos se escriben
simultáneamente en la consola y en el archivo `logs/app.log`, que se genera de forma
automática en la primera ejecución. Se registran el inicio del servidor, la creación,
modificación y eliminación de tareas, las operaciones SOAP y las rutas no encontradas.


## Pruebas

Las pruebas unitarias se implementaron con Jest sobre `taskService`, que concentra la
lógica de administración de tareas compartida por REST y SOAP. Para ejecutarlas:
 
```bash
npm test
```
 
Se cubren las cuatro operaciones principales:
 
| Prueba | Verifica |
|---|---|
| Crear una tarea | Que la tarea se cree con el título indicado, con `completed` en `false` y con un identificador asignado. |
| Consultar las tareas | Que la lista devuelta contenga las tareas registradas. |
| Modificar una tarea | Que el cambio de estado se aplique correctamente sobre la tarea solicitada. |
| Eliminar una tarea | Que la tarea se retire de la colección. |
 
Antes de cada prueba se reinicia el módulo con `jest.resetModules()`, de modo que cada
caso comience con una colección de tareas vacía y las pruebas no se afecten entre sí.


## Análisis de calidad de código

El proyecto utiliza ESLint con la configuración definida en `eslint.config.js`, basada
en las reglas recomendadas de `@eslint/js`. La configuración declara los globales de
CommonJS para el código fuente, añade los globales propios de Jest para los archivos de
`tests/` y excluye del análisis las carpetas `node_modules/` y `logs/`.
 
```bash
npm run lint
```

## Estructura general del proyecto

```text
Actividad-1-DAW/
|-- logs/
|-- src/
|   |-- routes/
|   |   `-- tasks.js
|   |-- services/
|   |   `-- taskService.js
|   |-- soap/ 
|   |   `-- taskService.wsdl
        |-- taskSoap.js
|   `-- utils/
|       `-- logger.js
    |-- app.js
|-- tests/
|   `-- taskService.test.js
|-- .gitignore
|-- eslint.config.js
|-- package-lock.json
|-- package.json
`-- README.md
```

## Autor

Osvaldo Hernández Juárez — *385493*
