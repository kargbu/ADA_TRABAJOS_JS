// Crear una tabla de multiplicar

for (var factor_uno = 0; factor_uno < 2; factor_uno++) {
   // Esto significa que el bucle for comienza con 0 y se detiene después de 1.
   for (var factor_dos = 0; factor_dos < 2; factor_dos++) {
    console.log(factor_uno + ' x ' + factor_dos + ' = ' + factor_uno * factor_dos);
    }
}
// Tabla para dividir. Hacer una tabla de división personalizada de números divisibles entre 10.
for (var i = 100; i > 10 ; i = i - 10 ) {
    for (var j = 10; j > 4 ; j = j -5) {
    console.log(i + ' dividido por ' + j + ' es igual a ' + i/j);
    }
}

// Muestra cubos con letras. No tengo el estilo
var cubes = 'ABCDEFG';

for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}



