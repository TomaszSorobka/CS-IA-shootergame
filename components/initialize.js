function loadingTiles() {
    // A for loop responsible for loading the tiles. It loops through the values in the map array and loads corresponding tiles from the shoot.png file.
    for (let index = map.length -1; index > -1; -- index) {
        let value = map[index];
        let tile_x = (index % columns) * tile_size;
        let tile_y = Math.floor(index / columns) * tile_size;

        // This draws the chosen tiles on the buffer that is later drawn on the canvas.
        buffer.drawImage(tile_sheet, value * tile_size, 0, tile_size, tile_size, tile_x, tile_y,
        tile_size, tile_size);
    }}

// A function start() that is called at the beginning. It initiates the whole game. 
function start(event) {
    resize();
    loadingTiles();

    buffer.fillStyle = "rgba(0, 0, 0, 0.7)";
    buffer.fillRect(0, 0, width, height);

    let x = buffer.canvas.width/2-60;
    let y = buffer.canvas.height;
    let w = 120;
    let h = 40;
    // Drawing the menu and difficulty level options.
    buffer.fillStyle = "rgba(255, 0, 27, 0.7)";
    buffer.fillRect(x, y*0.75, w, h);
    buffer.fillStyle = "rgba(255, 159, 0, 0.7)";
    buffer.fillRect(x, y*0.45, w, h);
    buffer.fillStyle = "rgba(0, 140, 27, 0.7)";
    buffer.fillRect(x, y*0.15, w, h);
    buffer.fillStyle = "rgba(256, 256, 256, 0.7)";
    buffer.fillRect(x+10, y*0.77, w-20, h-10);
    buffer.fillRect(x+10, y*0.47, w-20, h-10);
    buffer.fillRect(x+10, y*0.17, w-20, h-10);

    buffer.font = "15px Calibri";
    buffer.fillStyle = "rgba(255, 0, 27, 0.7)";
    buffer.textAlign = "center";
    buffer.fillText("IB score:" + score , 220, 20);

    buffer.font = "25px Calibri";
    buffer.fillStyle = "rgba(0, 140, 27, 0.7)";
    buffer.fillText("EASY",128,y*0.26);
    buffer.fillStyle = "rgba(255, 159, 0, 0.7)";
    buffer.fillText("NORMAL",128,y*0.56);
    buffer.fillStyle = "rgba(255, 0, 27, 0.7)";
    buffer.fillText("HARD",128,y*0.86);
    context.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height, 0, 0,
        context.canvas.width, context.canvas.height);

    context.canvas.addEventListener("click", menu);
    };

    function restart(event) {
        let x = 68;
        let y = 256;
        let w = 120;
        let h = 40;
        if (pointer.x > x && pointer.x < x + w && pointer.y > y*0.75 && pointer.y < y*0.75 + h) {
            // removing the even listener from the RESTART button, so a new game is not influenced.
            context.canvas.removeEventListener("click", restart);
            // Setting the variables to their initial value.
            enabled = true;
            score = 0;
            ex = 0.3;
            ey = 0.1;
            // Restarting the enemies and the difficulty interval, so a new game is not influenced.
            enemiesCoordinates();
            clearInterval(difficulty);
            start();
    }}