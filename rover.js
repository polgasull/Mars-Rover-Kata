var myRover = {
  position: [0,0],
  direction: 'N'
};
var marsGrid = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
  ];

for (var i=0; i < marsGrid.length; i++) {
  console.log(marsGrid[i]);
}

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
      default:
      console.log('Veo que no te enteras, elige una de las letras');
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


function moveRover(rover) {
  var rover1 = document.getElementById("goRover").value
  switch(rover1) {
    case 'F':
    goForward(rover);
    break;
    case 'B':
    goBackward(rover);
    break;
    case 'L':
    goLeft(rover);
    break;
    case 'R':
    goRight(rover);
    break;
    default:
    console.log('Rover no responde y empieza a re calentarse');
  }

}

// moveRover(myRover);

document.getElementById("goRover").value;
