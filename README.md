![image](https://user-images.githubusercontent.com/79814537/227503253-efff5b8d-79b8-4a2b-9e76-79800998b4d5.png)

# Programación Web Avanzada 2024 - Grupo 12 - Trabajo Práctico N°2 React


### 👥Integrantes
- Pamich, Gabriel 
- Padilla, Francisco
- Paredes, Paulina

## Objetivo del proyecto
Desarrollar una aplicación web que muestre una lista de elementos en forma de cards/
tarjetas en la página de inicio y permita al usuario ver detalles adicionales al hacer click
en un elemento, utilizando React, llamadas fetch a archivos locales y Tailwind para
estilos.
### Dominio: LoL - League of Legends
Es una aplicación web que muestra un lista de cards de todos los campeones LoL
 con su imagen correspondiente, el nombre y una breve descripción + un botón que redirige
una página de detalles donde se muestran las particularidades de cada campeón y la opción para descargar en un pdf toda la información.

## ‼️ Información relevante
### Utilización de una API para obtener datos
Nuestra aplicación se conecta a la API de Riot Games para obtener información actualizada de los campeones en vez de realizar llamadas a un archivo json mockeado. 
Pueden encontrar más información en esta URL: https://developer.riotgames.com/docs/lol#data-dragon

Para obtener los JSON de la misma, creamos el hook useChampions dentro de la carpeta hooks, donde se realizan las llamadas usando la API fetch que provee JS de forma nativa.
Esto nos permite obtener los datos de forma segura y eficiente. La aplicación no almacena los datos de la API de forma permanente,
sino que los recupera cada vez que se necesitan.

Utilizamos la API  para obtener la lista de elementos que se muestran en la página de inicio y en la página de detalles. 
La API nos proporciona una lista de objetos JSON que contienen información sobre cada campeón . 
Luego, procesamos estos datos y los utilizamos para renderizar los elementos en la página.



## 🖥️ Previsualización


## Instalación
1) Clonar el repo y ejecutar ```npm install```
2) Crear un archivo .env  con variables de entorno por fuera de src y copiar la siguiente linea de codigo:
   
     VITE_RIOT_URL_DDRAGON_VER = https://ddragon.leagueoflegends.com/cdn/14.8.1
   
     VITE_RIOT_URL_DDRAGON = https://ddragon.leagueoflegends.com/cdn
   
   ![creacion archivo  env](https://github.com/thadek/pwa-2024-tp2/assets/86857679/9783ee36-fe93-4c07-b119-e7161674acbc)

4) Ejecutar ```npm run dev``` para visualizar la aplicación en version de desarrollo.


## 🚀 Tecnologías
HTML, CSS, TypeScript, React, React-Router, framer-motion, viteJs, Tailwind,  JavaScript.
