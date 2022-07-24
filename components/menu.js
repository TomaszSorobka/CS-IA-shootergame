function menu(event) {
// Variables responsible for the x and y coordinates width and height of the level difficulty tiles. 
    let x = 68;
    let y = 256;
    let w = 120;
    let h = 40;
    console.log("mouse" + pointer.x);
    // Checks whether the pointer's coordinates are within the EASY level tile.
    if (pointer.x > x && pointer.x < x + w && pointer.y > y*0.15 && pointer.y < y*0.15 + h) {
        context.canvas.removeEventListener("click", menu);
        loop();
        level = "easy";
        console.log("EASY MODE ON");
        addx = 0.01;
        addy = 0.005;
        difficulty = setInterval(event => {ex+=addx; ey+=addy}, 5000);
    
    }  // Checks whether the pointer's coordinates are within the NORMAL level tile.
    else if (pointer.x > x && pointer.x < x + w && pointer.y > y*0.45 && pointer.y < y*0.45 + h){
        context.canvas.removeEventListener("click", menu);
        level = "normal";
        console.log("NORMAL MODE ON");
        loop();
        addx = 0.1;
        addy = 0.05;
        difficulty = setInterval(event => {ex+=addx; ey+=addy}, 5000);
       
    } // Checks whether the pointer's coordinates are within the HARD level tile. 
    else if (pointer.x > x &&
        pointer.x < x + w
        &&
        pointer.y > y*0.75 &&
        pointer.y < y*0.75 + h) {
        context.canvas.removeEventListener("click", menu);
        level = "hard";
        console.log("HARD MODE ON");
        loop();
        addx = 0.3;
        addy = 0.15;
        // The difficulty interval. Every 5 seconds the targets' velocity increases by a corresponding value to the chosen difficulty level. 
        difficulty = setInterval(event => {ex+=addx; ey+=addy}, 5000);
    }
 }

 function endScreen(result) {
    let x = buffer.canvas.width/2-60;
            let y = buffer.canvas.height;
            let w = 120;
            let h = 40;

    // All the drawings for the ending screen.
    buffer.fillStyle = "rgba(0, 140, 255, 0.7)";
    buffer.font = "25px Calibri";
    buffer.fillRect(x, y*0.75, w, h);
    buffer.fillStyle = "rgba(256, 256, 256, 0.7)";
    buffer.fillRect(x+10, y*0.77, w-20, h-10);
    buffer.fillStyle = "rgba(0, 140, 255, 0.7)";
    buffer.fillText("RESTART",128,y*0.86);

    buffer.fillStyle = "rgba(0, 0, 0, 0.5)";
    buffer.fillRect(10, 30, buffer.canvas.width-20, 150);
    buffer.fillStyle = "rgba(256, 256, 256, 0.4)";
    buffer.fillRect(20, 40, buffer.canvas.width-40, 130);
    buffer.font = "40px Calibri";
    buffer.fillStyle="black";
    buffer.fillText(result, 128, 80);
    buffer.font = "20px Calibri";
    buffer.fillStyle="black";
    buffer.fillText("difficulty:", 65, 120);
    // Depending on the level of difficulty chosen before, appropriate ending screen will generate.
    if (level == "easy") {
        buffer.fillStyle = "rgba(0, 140, 27, 0.7)";
        buffer.fillRect(108, 95, w, h);
        buffer.fillStyle = "rgba(256, 256, 256, 0.7)";
        buffer.fillRect(118,100,w-20,h-10);
        buffer.font = "25px Calibri";
        buffer.fillStyle = "rgba(0, 140, 27, 0.7)";
        buffer.fillText("EASY",167,123);
    } else if (level =="normal") {
        buffer.fillStyle = "rgba(255, 159, 0, 0.7)";
        buffer.fillRect(108, 95, w, h);
        buffer.fillStyle = "rgba(256, 256, 256, 0.7)";
        buffer.fillRect(118,100,w-20,h-10);
        buffer.font = "25px Calibri";
        buffer.fillStyle = "rgba(255, 159, 0, 0.7)";
        buffer.fillText("NORMAL",167,123);
    } else {
        buffer.fillStyle = "rgba(255, 0, 27, 0.7)";
        buffer.fillRect(108, 95, w, h);
        buffer.fillStyle = "rgba(256, 256, 256, 0.7)";
        buffer.fillRect(118,100,w-20,h-10);
        buffer.font = "25px Calibri";
        buffer.fillStyle = "rgba(255, 0, 27, 0.7)";
        buffer.fillText("HARD",167,123);
    };
    buffer.fillStyle = "rgba(255, 0, 27, 0.7)";
            buffer.font = "15px Calibri";
            buffer.fillText("You have scored: " + score + "/45 IB points",128,157);
}