const Player = function(x, y, d) {
    this.x = x; this.y = y; this.d = d;
    this.source_x = 64;
    this.jumping = true;
    this.vx = 0; this.vy = 0;
};

Player.prototype = {
    
    jump:function() {
        if(!this.jumping) {
        this.jumping = true;
        this.vy = -20;
        }
    },
    updatePosition: function(x, y) {

        this.vx = (x - this.x) * 0.03;

        // Adding the velocity along the x and y axis to the player's coordinates.
        this.x += this.vx;
        this.y += this.vy;

        // Checks which direction the player should be facing and applies appropriate texture.
        if(this.vx < 0) { this.d = -1; this.source_x = 64; }
        else { this.d = 1; this.source_x = 80;}

        // Multiplying the velocity along the x and y axis by 0.9 makes it decrease over time, 
        // which simulates the gravity and different forces, such as friction, etc.
        this.vx *= 0.9;
        this.vy *= 0.9;
    }
} 

// A method that draws the player on the buffer.
function drawPlayer() {
    buffer.drawImage(tile_sheet, player.source_x, 0, tile_size, tile_size, player.x, player.y,
        tile_size, tile_size);
}