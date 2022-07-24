const Bullet = function (x, y, d, vx) {
    this.x = x; this.y = y; this.d = d; this.vx = 5 *d + vx;
};

Bullet.prototype = {
    updatePosition:function() {
        // Adding the velocity along the x-axis to the bullet's coordinates.
        this.x += this.vx; 
    }
}
