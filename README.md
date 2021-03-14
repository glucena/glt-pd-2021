# Antes de empezar:
- Para reportar tu trabajo debes crear un repositorio GIT público.

- Crea tantos commits como consideres necesario. Parte de nuestra evaluación se basa en como afrontas los problemas y la única forma que tenemos de verlo es mediante commits. Esta parte puede ser más decisiva que la calidad de la entrega.
- En el comentario del commit especifica los cambios que has realizado, así como explicaciones o aportaciones que consideres importante comentar. Valoraremos especialmente que los commits estén bien documentados
- En caso de que surjan dudas intenta buscar alternativas y justifícalas en el mensaje de commit.

# Tasks.

1.  RE-Estructura el proyecto como mejor consideres. 
    1.  Como mínimo se debe crear un modulo a parte para la autenticación y registro.
    2.  Implementa Interficies  o clases  para los tipos de datos que consideres.
2. Implementa un sistema de login/registro que persista los datos correctamente.
   1. Puedes utilizar:
      1. LocalStorage, 
      2. Alguna api externa
      3. Implementar servicio propio con Nodejs.
3. Implementa el patron de diseño redux para la gestion del listado de naves.
   1. No es necesario implementar redux para todo el aplicativo, solo para la gestión de naves.
4.  Implementa la carga de multiples "páginas" en el apartado de ships.
    1.   Actualmente solo carga una página de la api.
    2.   Revisar la API para saber como consumir el resto de páginas. https://swapi.dev/
5.  Implementa test unitarios para el modulo de login/registro.
6.  Añade imágenes a las CARDS de naves: Puedes usar esta api  'https://starwars-visualguide.com/assets/img/starships/' + ID_DE NAVE -->  https://starwars-visualguide.com/assets/img/starships/5.jpg
7.  Suponiendo que esta página tiene un numero elevado de usuarios simultáneos, implementa las mejoras que consideres oportunas para evitar la saturación del servidor.
    1.  Si alguna de las medidas no es de código, comentalas a continuación en este Readme.


# Getting Started 

`npm i`  for install
Run `npm run start` for a dev server. 
Navigate to `http://localhost:4200/`.


# Notas del desarrollador:
He decidido utilizar el inglés como idioma para los commits y comentarios de código.

He empezado refactorizando la estructura de proyecto para enfocarla en una estructura por funcionalidad ("feature based architecture"). De esta forma, es más sencillo escalar la aplicacion añadiendo nuevos modulos que aporten funcionalidades y dividir módulos complejos en submodulos mas sencillos y fáciles de mantener. 

La carga de módulos se realizara a demanda (lazy load) lo que permite al build de angular dividir el aplicativo en trozos (chunks) que aligeran la carga inicial y mejoran el rendimiento apreciado por el usuario.

Para el registro y autenticación he creado un microservicio disponible en https://github.com/glucena/glt-pd-backend-2021.git. El servicio inicializa los usuarios contenidos en assets/json/users.json y registra en memoria los nuevos usuarios. El servicio no tiene base de datos por lo que los usuarios persisten sólo durante el tiempo de ejecución.

En cuanto a la implementación del patrón redux, por motivos de tiempo he optado por un diseño simplificado con los elementos básicos. Con más tiempo se podría modelar con más detalle.

## Performance
Desde el punto de vista del rendimiento, he decidido montar una cache sencilla para las llamadas al API. La he implementado empleando un interceptor de Http que almacena y recupera datos desde un servicio de caché.

Como alternativa a esta implementación de la cache se podría considerar la implementación de un Service Worker, convirtiendo la aplicación en una Web Progresiva. Una de las características del Service Worker es la de hacer de caché. Sin embargo al ser algo más compleja, habría que valorar temas de compatibilidad y funcionalidades para decidirse por su implementación.

En cuanto a las medidas adicionales a las de implementación, la primera que me viene a la mente es la de la monitorización. Conociendo cual es el uso de la aplicación de pueden identificar áreas de mejora y tomar medidas tales como: cache en lado servidor, API management tools, despliegue de multiples nodos a demanda... 


