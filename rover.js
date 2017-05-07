var myRover = {
  position: [0,0],
  direction: 'N'
};

// En teoria esto es el grid 10 x 10 pero no se como LINKEARLO a las funciones de movimiento

// var marsGrid = [
//   ['a','a','a','a','a','a','a','a','a','a'],
//   ['a','a','a','a','a','a','a','a','a','a']
//   ];
//
// for (var i=0; i < marsGrid.length; i++) {
//   console.log('Mars Rover dentro del Grid: ' + marsGrid[i]);
  if (myRover.position[0] > 10) {
    myRover.position[0] = 0;
  }
  if (myRover.position[1] > 10) {
    myRover.position[1] = 0;
  }


// Funciones adelante, atrás, derecha, izquierda

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;

  }

  console.log("Nueva posicion del rover: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

goForward(myRover);

function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
    rover.position[0]--
    break;
    case 'E':
    rover.position[1]--
    break;
    case 'S':
    rover.position[0]++
    break;
    case 'W':
    rover.position[1]++
    break;
  }
  console.log("Nueva posicion del rover: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

goBackward(myRover);

function goLeft(rover) {
  switch(rover.direction) {
    case 'N':
    rover.direction = 'W'
    break;
    case 'E':
    rover.direction = 'N'
    break;
    case 'S':
    rover.direction = 'E'
    break;
    case 'W':
    rover.direction = 'S'
    break;
  }
  console.log("Nueva posicion del rover: [" + rover.position[0] + ", " + rover.position[1] + "]" +' Giro a la izquierda completado, iniciando nuevo rumbo a: [' + rover.direction + ']' );
}

goLeft(myRover);

function goRight(rover) {
  switch(rover.direction) {
    case 'N':
    rover.direction = 'E'
    break;
    case 'E':
    rover.direction = 'S'
    break;
    case 'S':
    rover.direction = 'W'
    break;
    case 'W':
    rover.direction = 'N'
    break;
  }
  console.log("Nueva posicion del rover: [" + rover.position[0] + ", " + rover.position[1] + "]" + ' Giro a la derecha completado, iniciando nuevo rumbo a: [' + rover.direction + ']');
}

goRight(myRover);

// Aquí quiero conseguir que apretando f,b,l o r el rover se mueva.
// También me gustaría que funcionaran las secuencias tipo fffbbblllrrr

function moveRover(rover) {
  var rover1 = document.getElementById("goRover").value
  var commands = rover1.split("");
  for (i = 0; i < commands.length; i++) {

  switch(commands[i]) {
    case 'f':
    goForward(rover);
    break;
    case 'b':
    goBackward(rover);
    break;
    case 'l':
    goLeft(rover);
    break;
    case 'r':
    goRight(rover);
    break;
    default:
    console.log('Rover no responde y empieza a re calentarse');
    }
  }
}

// moveRover(myRover);

document.getElementById("goRover").value;
