var myRover = {
  position: [0,0],
  direction: 'N'
};

var myArray = [
  ["a","b","c","d","e","f","g","h","i","j"];
  ["a","b","c","d","e","f","g","h","i","j"];
  ["a","b","c","d","e","f","g","h","i","j"];
  ["a","b","c","d","e","f","g","h","i","j"];
  ["a","b","c","d","e","f","g","h","i","j"];
  ["a","b","c","d","e","f","g","h","i","j"];
  ["a","b","c","d","e","f","g","h","i","j"];
  ["a","b","c","d","e","f","g","h","i","j"];
  ["a","b","c","d","e","f","g","h","i","j"];
  ["a","b","c","d","e","f","g","h","i","j"];
]

for (var i=0,  tot=myArray.length; i < tot; i++) {
  console.log(myArray[i]);
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
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

goForward(myRover);
