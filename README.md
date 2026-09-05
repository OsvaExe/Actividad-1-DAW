
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

- [Tecnología / lenguaje 1]
- [Tecnología / framework 2]
- [Librería o herramienta 3]
- [...]

## Requisitos previos

*Enumera lo que debe tener instalado o configurado quien vaya a ejecutar el proyecto.*

- [Software 1 (versión mínima)]
- [Software 2]
- [Cuenta / herramienta externa, si aplica]

## Instalación

*Indica, paso a paso, cómo obtener el proyecto y dejarlo listo para ejecutarse a partir de una clonación limpia del repositorio.*

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
[comando(s) de instalación de dependencias]
```

## Ejecución

*Indica el o los comandos necesarios para poner en marcha el proyecto y cómo acceder a él una vez iniciado (por ejemplo, puerto, URL local o forma de uso).*

```bash
[comando de ejecución]
```

## Scripts / comandos disponibles

*(Sección opcional — inclúyela si el proyecto define scripts o comandos reutilizables, por ejemplo en `package.json`, `Makefile`, etc.)*

| Comando | Descripción |
|---|---|
| `[comando 1]` | [Qué hace] |
| `[comando 2]` | [Qué hace] |

## Funcionalidades / uso

*Describe las funcionalidades principales del proyecto y, si aplica, cómo probarlas (interfaces, endpoints, operaciones, pantallas, etc., según corresponda al tipo de práctica).*

## Pruebas

*(Sección opcional — inclúyela si la práctica requiere pruebas.)* Describe cómo ejecutar las pruebas y qué cubren.

## Análisis de calidad de código

*(Sección opcional — inclúyela si la práctica requiere herramientas de análisis estático.)* Describe cómo ejecutarlo.

## Estructura general del proyecto

*Presenta brevemente cómo está organizado el código fuente.*

```text
proyecto/
|-- [carpeta o archivo]
|-- [carpeta o archivo]
`-- README.md
```

## Autor

[Nombre completo del alumno] — [Matrícula]
