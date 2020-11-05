(function() {
    let facingForward = true;
    let position = 0;

    function moveForward(distance) {
        // increase position by distance
        if (facingForward) {
            position = position + distance;
        } else position = position - distance;
    } 
    
    function moveBackward(distance) {
        // increase position by distance
        if (facingForward) {
            position = position - distance;
        } else position = position + distance;
    }

    function turnAround() {
        // switch value of facingForward
        // facingForward = !facingForward;
        if (facingForward) {
            facingForward = false;
        } else facingForward = true;
    }

    function printLocation() {
        console.log(position);
    }

moveForward(5);
moveBackward(3);
printLocation();
turnAround();
moveForward(10);
moveBackward(5);
printLocation();

})()