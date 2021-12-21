
var box = document.getElementById("box");
var container = document.getElementById("container");
var time = document.getElementById("time");
var left2 = 0;
var down2 = 0;
var currectDirect = 1;
var current_rotation = -90;
var facingImg = document.querySelector("#droneImg");


function report() {
  var details = document.getElementById("details");
  let directionActual;

  if (currectDirect == 1) {
    directionActual = "East";
  }

  if (currectDirect == 2) {
    directionActual = "North";
  }

  if (currectDirect == 3) {
    directionActual = "West";
  } else if (currectDirect == 4) {
    directionActual = "South";
  }

  details.innerHTML = left2 + ", " + down2 + ", " + directionActual;
}

function place() {
  let x = document.getElementById("input_id1").value;
  let y = document.getElementById("input_id2").value;
  let direction = document.getElementById("input_id3").value;

  let directionArr = ["EAST", "NORTH", "WEST", "SOUTH"];

  if (x && y && direction) {
    if((x < 10 && x >= 0) && (y < 10 && y >= 0) && directionArr.includes(direction.toUpperCase()) ){

        if (direction.toUpperCase() == "EAST") {
     
      currectDirect = 1;
      current_rotation = -90;
      facingImg.style.transform = 'rotate(' + current_rotation + 'deg)';
    }

    else if (direction.toUpperCase() == "NORTH") {
      currectDirect = 2;
      current_rotation = -180;
      facingImg.style.transform = 'rotate(' + current_rotation + 'deg)';
    }

    else if (direction.toUpperCase() == "WEST") {
      currectDirect = 3;
      current_rotation = 90;
      facingImg.style.transform = 'rotate(' + current_rotation + 'deg)';
    } 
    
    else if(direction.toUpperCase() == "SOUTH") {
      currectDirect = 4;
      current_rotation = 0;
      facingImg.style.transform = 'rotate(' + current_rotation + 'deg)';
    }

    left2 = parseInt(x);
    down2 = parseInt(y);
    box.style.left = 10 * left2 + "%";
    box.style.top = 10 * down2 + "%";
    }  

  }
}

function move(isAttack) {
  if (currectDirect == 1) {
    right(isAttack); //East
  } else if (currectDirect == 2) {
    up(isAttack); //North
  }

  if (currectDirect == 3) {
    left(isAttack); //west
  }

  if (currectDirect == 4) {
    down(isAttack); //south
  }
}

function up(isAttack) {
  if ((isAttack && down2 > 1) || (!isAttack && down2 > 0)) {
    if (isAttack) {
      down2 = down2 - 2;
    } else {
      down2--;
    }
    box.style.top = 10 * down2 + "%";
  }
}

function left(isAttack) {
  if ((isAttack && left2 > 1) || (!isAttack && left2 > 0)) {
    if (isAttack) {
      left2 = left2 - 2;
    } else {
      left2--;
    }
    box.style.left = 10 * left2 + "%";
  }
}

function right(isAttack) {
  if ((isAttack && left2 < 8) || (!isAttack && left2 < 9)) {
    if (isAttack) {
      left2 = left2 + 2;
    } else {
      left2++;
    }
    box.style.left = 10 * left2 + "%";
  }
}

function down(isAttack) {
  if ((isAttack && down2 < 8) || (!isAttack && down2 < 9)) {
    if (isAttack) {
      down2 = down2 + 2;
    } else {
      down2++;
    }
    box.style.top = 10 * down2 + "%";
  }
}


function decideDirection(direct) {
  if (direct == "right") {
    currectDirect--;
    current_rotation += 90;
    if (currectDirect < 1) {
      currectDirect = 4;

    }
  } else {
    currectDirect++;
    current_rotation -= 90;
    if (currectDirect > 4) {
      currectDirect = 1;
    }
  }

  facingImg.style.transform = 'rotate(' + current_rotation + 'deg)';
}
