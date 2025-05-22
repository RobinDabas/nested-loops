for (var i = 1; i <= 10; ++i) {
  for (var j = 1; j <= 10; ++j) {
    console.log(i + ' x ' + j + ' = ' + (i * j))
  }
} console.log('Vos sos lo máximo habibi. ¡Seguí pa llante!')


var cubes = 'QAHTAN.505.LIBYA';

for (var i = 0; i <= 16; ++i) {
  var styles = 'font-size: 40px; border-radius: 10px, border: 10px solid black; background: #ff0000; color: white'
  console.log('%c' + cubes[i], styles)
}

for (var i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log('Medalla de Oro - Vos Sos el Ganador')
  } else if (i == 2) {
    console.log('Medalla de Plata - Vos hiciste bien') 
  } else if (i == 3) {
    console.log('Medalla de Bronce - Seguí pa llante')
  } else {
    //este bloque se ejecutará si no coincide ninguna condición
    console.log(i)
  }
} 

console.log('Separación')

for (var k = 1; k <= 10; ++k)
switch (k) {
  case 1:
    console.log('Medalla de Oro - Vos Sos el Ganador')
    break;
  case 2:
    console.log('Medalla de Plata - Vos hiciste bien')
    break;
  case 3:
    console.log('Medalla de Bronce - Seguí pa llante')
  default:
    console.log(k)
}