    // A method that checks whether the pointer's y coordinates are above the player y coordinates. If so, the player jumps.
    function pointerAbove() {
        if (pointer.down) {
            pointer.down = false;
            if (pointer.y < player.y) player.jump();
        }
    }
    // When the spacebar is clicked, the value of space.down is set to true, so the code in the if statement is executed.
    function spaceDown() {
        if (space.down) {
            space.down = false;
            // Pushing a new bullet into the bullet array.
            bullets.push(new Bullet(player.x + tile_size * 0.5 - 2 + player.d * 4, player.y + 8, player.d, player.vx));
        }
    }