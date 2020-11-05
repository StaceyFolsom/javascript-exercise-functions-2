(function() {
    let facing = "N";
    let xPos = 0;
    let yPos = 0;

    function moveForward(distance) {
        if (facing === "E") {
            xPos = xPos + distance;
        } else if (facing ==="W") {
            xPos = xPos - distance;
        } else if (facing === "N") {
            yPos = yPos + distance;
        } else yPos = yPos - distance;
    }
    
    function moveBackward(distance) {
        if (facing === "E") {
            xPos = xPos - distance;
        } else if (facing === "W") {
            xPos = xPos + distance;
        } else if (facing === "N") {
            yPos = yPos - distance;
        } else yPos = yPos + distance;
    }

    function turnLeft() {
        if (facing === "N") {
            facing ="W";
        } else if (facing === "W") {
            facing = "S";
        } else if (facing === "S") {
            facing = "E";
        } else facing = "N";
    }

    function turnRight() {
         if (facing === "N") {
            facing = "E";
        } else if (facing === "E") {
            facing = "S";
        } else if (facing === "S") {
            facing = "W";
        } else facing = "N";
    }

    function printLocation() {
        console.log(`${yPos}N, ${xPos}E, Currently Facing ${facing}`);
    }

moveForward(5);
turnRight();
printLocation();

})()