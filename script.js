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


console.log('Qabayil Arabia Min Libya')

for (var t = 1; t <= 10; ++t) {
  switch (t) {
    case 1:
      console.log('Qabila: Jabbour x Qahtan 505 - Mintiqa: Barqa - Madina: Ajdabiya, LY')
    break;
    case 2:
      console.log('Qabila: Magarha x Banu Sulaym 515 - Mintiqa: Fezzan - Madina: Sabha, LY')
    break;
    case 3:
      console.log('Qabila: Gadhadfa x Anizza 501 - Minitiqa: Barqa - Madina: Sirte, LY')
    break;
    case 4:
      console.log('Qabila: Rajban x Al-Duwasir 506 - Mintiqa: Tripolitania - Madina: Rajban, LY')
    default:
      console.log(t)
  } 
}
