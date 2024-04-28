# Adminpro

Este proyecto lo creo con la version 17 de angular pero uso un curso de FH que esta basado en la versiones anteriores

Para lograr trabajar igual hay algunas cuestiones que tenemos que cambiar por ejemplo:

Crear el proyecto uso:
`ng new adminpro --no-standalone --routing=false`

Para crear un componente uso:
`ng g c shared/header --skip-tests --inline-style`

Para solucionar el problema de los iconos tanto de Material como de Awesome hice lo siguiente:
`buscar en el los archivos min.css la doble barra // y reemplazarla por una sola /`

# Nota:
Para este proyecto uso `npm`
