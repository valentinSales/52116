# Analizador de Gramática

Tema 39568_17. 
Analizador e intérprete para un sub‑lenguaje de JavaScript, implementado con ANTLR4 y Node.js.

![image](https://github.com/user-attachments/assets/7da60821-452a-4892-9693-8a3b9004d827)


## Características de la Gramática

- **Sentencias**  
  - `do { … } while (expr);`  
  - Asignaciones: `identificador = expresión;`  
  - Logs: `console.log(expresión);`

- **Bloques**: `{ … }` (cero o más sentencias dentro)

- **Expresiones**  
  - Operadores aritméticos: `+`, `-`, `*`, `/`  
  - Paréntesis para agrupación: `( … )`  
  - Operandos:  
    - Identificadores: letras, dígitos, guión bajo (p.ej. `mi_var1`)  
    - Números enteros positivos (p.ej. `123`)

- **Comentarios**  
  - De línea: `// …`  
  - De bloque: `/* … */`


## Requisitos

1. Node.js (v16+)
2. npm (incluido con Node.js)
3. Java Runtime (JRE) para ANTLR4
4. Visual Studio

## Configuración Inicial
Estas instrucciones se pueden ejecutar en cualquiera de los siguientes entornos de línea de comandos:

- **Terminal de Linux o macOS** (Bash, Zsh, etc.)
- **Windows PowerShell**
- **Símbolo del sistema (CMD) en Windows**
- **Terminal integrada de Visual Studio Code**
- **GitBash**

### Pasos

1. Primero clonamos el repositorio dentro de una carpeta cualquiera (en el caso del ejemplo una llamada "prueba"):

    git clone https://github.com/valentinSales/52116.git

2. Después nos dirigimos al directorio del proyecto:

     cd 52116

3. Y por ultimo abrimos el visual studio para trabajar con el comando:

    code . (<---- no olvidar el punto, es importante sin el nos abrira visual studio sin los archivos clonados)

![image](https://github.com/user-attachments/assets/b2d54c3e-bda9-4ae2-b50a-b5d0b2a6e866)

En caso de no seleccionar una carpeta nueva y clonar el repositorio dentro de la misma como en el ejemplo, normalmente el proyecto se encontrara dentro de la carpeta "C:\Users\(usuario en cuestión)" del usuario que lo este ejecutando.

Ahora deberia estar adentro de visual studio con el proyecto abierto

## Uso Básico
1. Modificar el input
   
![image](https://github.com/user-attachments/assets/51bf3783-2aea-4d8f-b672-68c86c2734d5)

Edita el archivo input.txt con tu código:(Ejemplo)

x = 19;

do {

console.log(x);

x = x - 1;

} while (x > 0);

Así deberia quedar:

![image](https://github.com/user-attachments/assets/d3cfc69e-cca3-433e-aa4a-c9a2fa11351d)


2. Una vez ya tenemos el `input.txt` con el ejemplo deseado ejecutamos el programa con Node.js desde la terminal de vs code (Ir a **Terminal > Nuevo terminal** en la barra superior) dentro de la terminal colocamos:

   node index.js

   ![image](https://github.com/user-attachments/assets/657bdb61-1299-48c5-bb8a-7649ffb11592)


El programa mostrará:

1.Tokens reconocidos con su lexema, tipo y línea.

2.Errores de sintaxis (si existen)

2.Árbol de derivación.

3.Los resultados que devuelve dados por el intérprete.

4.La tabla de símbolos (variables con sus valores, tipos y líneas).

5.El array de salida final con todos los resultados acumulados por el intérprete.


Ejemplo de como debería salir:

![image](https://github.com/user-attachments/assets/bd0d4095-cfc7-4ca3-933b-29e33c2235c6)

![image](https://github.com/user-attachments/assets/1bd06511-4a06-4e95-bcec-6179608316c3)

![image](https://github.com/user-attachments/assets/95406119-015f-41a0-ac91-fd8ecae6463e)

![image](https://github.com/user-attachments/assets/e6df79d4-3746-42f0-8c4c-e9594269ad4a)


Puedes probar otros códigos válidos como:

x = 5;

do {

console.log(x);

x = x - 1;

} while (x > 0);

------------------------------------
x = 3;

y = 2;

do {

console.log(x * y);

x = x - 1;

} while (x > 0);

----------------------------------

Puedes probar otros códigos inválidos como:

x = 5

y == 10;

console(x + y;

do {

x = x + 1

} while (x < 10

---------------------------------

do {

console.log(x);

x = x - 1;

} while (x > 0);


## Comentarios Finales

Este proyecto fue desarrollado para la materia de Sintaxis y Semántica de los Lenguajes por el alumno Valentin Sales (legajo 52116)

El repositorio contiene los archivos necesarios para compilar y ejecutar el proyecto, junto con pasos que nos permiten la correcta ejeccucion del mismo.

Gracias por su tiempo.
