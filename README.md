# VALIDACIÓN DE TARJETA
Se construyó una aplicación web que le permita a un
usuario validar el número de una tarjeta de crédito. 


## 1. Preámbulo

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)


### Definición del producto

* Quiénes son los principales usuarios de producto.
Los principales usuarios de la aplicación web son consumidores de comida rápida por aplicativo; 
y para poder hacer pedidos deben validar los datos de su tarjeta.

* Cuáles son los objetivos de estos usuarios en relación con tu producto.
Una vez validado el numero de su tarjeta, el usuario podrá hacer pagos por el aplicativo web con su tarjeta validada.

* Cómo crees que el producto que estás creando está resolviendo sus problemas.
El aplicativo web responderá con un mensaje donde informará al usuario
si la tarjeta ingresada es válida o inválida, de esa manera el usuario podra tomar la decisión de ingresar otra tarjeta.

### Interfaz de usuario (UI)

La interfaz permite al usuario:

* Insertar el número que queremos validar.
* Ver el resultado si es válido o no.


### UX (Diseño de experiencia de usuario)
Al ser un aplicativo web para validar tarjeta y poder realizar compras de fast food se buscó un fondo relacionado al tema de comida rápida.
Se realizó una presentación  a las compañeras y coaches para recibir retroalimentacion, las princiaples recomendaciones fueron mejorar la visibilidad de las letras  de la página.  

Prototipo 1:

![PROTOTIPO Inicial](https://github.com/Denimarx/LIM018-card-validation/blob/main/src/images/prototipo-inicial.jpeg?raw=true)


Prototipo 2:

![PROTOTIPO FINAL](https://github.com/Denimarx/LIM018-card-validation/blob/main/src/images/prototipo-final.jpeg?raw=true)

3. Objetivos de aprendizaje
Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

HTML
 
HTML semántico(https://curriculum.laboratoria.la/es/topics/html/02-html5/02-semantic-html)
Semantics - MDN Web Docs Glossary (https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)


CSS
 
Uso de selectores de CSS
Intro a CSS(https://curriculum.laboratoria.la/es/topics/css/01-css/01-intro-css)
CSS Selectors - MDN(https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
 

Modelo de caja (box model): borde, margen, padding

Box Model & Display(https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display)
The box model - MDN(https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
Introduction to the CSS box model - MDN(https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
CSS display - MDN(https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
display - CSS Tricks(https://css-tricks.com/almanac/properties/d/display/)


Web APIs
 Uso de selectores del DOM

Links
Manipulación del DOM
Introducción al DOM - MDN
Localizando elementos DOM usando selectores - MDN
 Manejo de eventos del DOM (listeners, propagación, delegación)

Links
Introducción a eventos - MDN
EventTarget.addEventListener() - MDN
EventTarget.removeEventListener() - MDN
El objeto Event
 Manipulación dinámica del DOM

Links
Introducción al DOM
Node.appendChild() - MDN
Document.createElement() - MDN
Document.createTextNode()
Element.innerHTML - MDN
Node.textContent - MDN
JavaScript
 Tipos de datos primitivos

Links
Valores primitivos - MDN
 Strings (cadenas de caracteres)

Links
Strings
String — Cadena de caracteres - MDN
 Variables (declaración, asignación, ámbito)

Links
Valores, tipos de datos y operadores
Variables
 Uso de condicionales (if-else, switch, operador ternario, lógica booleana)

Links
Estructuras condicionales y repetitivas
Tomando decisiones en tu código — condicionales - MDN
 Uso de bucles/ciclos (while, for, for..of)

Links
Bucles (Loops)
Bucles e iteración - MDN
 Funciones (params, args, return)

Links
Funciones (control de flujo)
Funciones clásicas
Arrow Functions
Funciones — bloques de código reutilizables - MDN
 Pruebas unitarias (unit tests)

Links
Empezando con Jest - Documentación oficial
 Módulos de ECMAScript (ES Modules)

Links
import - MDN
export - MDN
 Uso de linter (ESLINT)

 Uso de identificadores descriptivos (Nomenclatura y Semántica)

Control de Versiones (Git y GitHub)
 Git: Instalación y configuración

 Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)

 GitHub: Creación de cuenta y repos, configuración de llaves SSH

 GitHub: Despliegue con GitHub Pages

Links
Sitio oficial de GitHub Pages
user-centricity
 Diseñar un producto o servicio poniendo a la usuaria en el centro
product-design
 Crear prototipos de alta fidelidad que incluyan interacciones

 Seguir los principios básicos de diseño visual


