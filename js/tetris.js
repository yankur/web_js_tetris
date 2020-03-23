var playground = createPlayground();

console.log(playground);

// will add object positions to the emply playground array
function renderPositions() {
  objects.forEach( object => {
    object.position.forEach( ([rowIndex, cellIndex]) => {
      playground[rowIndex][cellIndex] = TYPE_COLORS[object.type]
    })
  });
}

function moveDown(obj) {
  console.log('moving down');
  let currentObject = getCurrentObject();
  console.log(objects);

  let tr = true;
  while (tr) {
    let pos = currentObject.position;

    for (let i = 0; i < pos.length; i++) {
      if (pos[i][0] <= 0 || (playground[pos[i][0]-1][pos[i][1]]) && !pos.includes([pos[i][0]-1, pos[i][1]])) {currentObject.state = 'static'; tr = false;}
    }

    pos.forEach(position => (position[0] -= 1));
    tr = false;
  }

  console.log(objects);
  playground = createPlayground();
  renderPlayground()
}

function moveRight(obj) {
  console.log('moving right');
  let currentObject = getCurrentObject();

  console.log(objects);

  let tr = true;
  while (tr) {
    let pos = currentObject.position;

    for (let i = 0; i < pos.length; i++) {
      if (pos[i][1] >= (playground[0].length - 1) || (playground[pos[i][0]][pos[i][1] + 1] && !pos.includes([pos[i][0], pos[i][1] + 1]))) {
        tr = false;
      }
    }

    pos.forEach(position => (position[1] += 1));
    tr = false;
  }

  console.log(objects);
  playground = createPlayground();
  renderPlayground();
}

function moveLeft(obj) {
  console.log('moving left');
  let currentObject = getCurrentObject();
  console.log(objects);

  let tr = true;
  while (tr) {
    let pos = currentObject.position;

    for (let i = 0; i < pos.length; i++) {
      if (pos[i][1] <= 0 || (playground[pos[i][0]][pos[i][1] - 1] && !pos.includes([pos[i][0], pos[i][1] - 1]))) {
        tr = false;
      }
    }

    pos.forEach(position => (position[1] -= 1));
    tr = false;
  }

  console.log(objects);
  playground = createPlayground();
  renderPlayground()
}

function pauseGame() {
  console.log('pausing the game');
  clearInterval(gameInterval);
}

function runGame() {
  // renderPlayground();
  // var gameInterval = setInterval(() => {
  //   moveDown();}, 4000);
}

// function createObj() {}

// Events
// 1. move to bottom
// 2. move right
// 3. move left
// 4. pause
// 5. game over
// 6. (re)render playground

renderPlayground();

// interval 1 second
var gameInterval = setInterval(() => {
  moveDown();
}, 4000);