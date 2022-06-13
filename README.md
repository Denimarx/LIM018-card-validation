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

La interfaz debe permitir al usuario:

* Insertar el número que queremos validar.
* Ver el resultado si es válido o no.


### UX (Diseño de experiencia de usuario)
Agregar un resumen del feedback recibido indicando las mejoras a realizar.

Prototipo 1:

url("./images/prototipo-final.jpg")

Prototipo 2:
![PROTOTIPO FINAL](https://github.com/Denimarx/LIM018-card-validation/blob/main/src/images/prototipo-final.jpeg?raw=true)




