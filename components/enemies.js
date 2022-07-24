function enemiesCoordinates() {
    enemiesRight = [ {"id":"enemy1","x":300,"y":80,"w":14,"h":13, "t": 6},
                         {"id":"enemy2","x":260,"y":165,"w":12,"h":12, "t": 8 },
                         {"id":"enemy3","x":290,"y":120,"w":10,"h":11, "t": 7},
                         {"id":"enemy4","x":-30,"y":80,"w":12,"h":12, "t": 8},
                         {"id":"enemy5","x":-60,"y":165,"w":10,"h":11, "t": 7},
                         {"id":"enemy6","x":-10,"y":120,"w":14,"h":13, "t": 6},
    
                         //Wave 2
                         {"id":"enemy7","x":360,"y":80,"w":12,"h":12, "t": 8},
                         {"id":"enemy8","x":330,"y":165,"w":14,"h":13, "t": 6},
                         {"id":"enemy9","x":370,"y":120,"w":10,"h":11, "t": 7},
                         {"id":"enemy10","x":-90,"y":80,"w":14,"h":13, "t": 6},
                         {"id":"enemy11","x":-100,"y":165,"w":12,"h":12, "t": 8},
                         {"id":"enemy12","x":-60,"y":120,"w":10,"h":11, "t": 7},
                         
                         //Wave 3
                         {"id":"enemy13","x":400,"y":80,"w":14,"h":13, "t": 6},
                         {"id":"enemy14","x":390,"y":165,"w":10,"h":11, "t": 7},
                         {"id":"enemy15","x":430,"y":120,"w":12,"h":12, "t": 8},
                         {"id":"enemy16","x":-150,"y":80,"w":10,"h":11, "t": 7},
                         {"id":"enemy17","x":-180,"y":165,"w":14,"h":13, "t": 6},
                         {"id":"enemy18","x":-120,"y":120,"w":12,"h":12, "t": 8},
    
                         //Wave 4
                         {"id":"enemy19","x":490,"y":80,"w":12,"h":12, "t": 8},
                         {"id":"enemy20","x":460,"y":165,"w":10,"h":11, "t": 7},
                         {"id":"enemy21","x":510,"y":120,"w":14,"h":13, "t": 6},
                         {"id":"enemy22","x":-240,"y":80,"w":14,"h":13, "t": 6},
                         {"id":"enemy23","x":-270,"y":165,"w":12,"h":12, "t": 8},
                         {"id":"enemy24","x":-200,"y":120,"w":10,"h":11, "t": 7},
    
                         //Wave 5
                         {"id":"enemy25","x":600,"y":80,"w":10,"h":11, "t": 7},
                         {"id":"enemy26","x":570,"y":165,"w":12,"h":12, "t": 8},
                         {"id":"enemy27","x":630,"y":120,"w":14,"h":13, "t": 6},
                         {"id":"enemy28","x":-360,"y":80,"w":12,"h":12, "t": 8},
                         {"id":"enemy29","x":-330,"y":165,"w":14,"h":13, "t": 6},
                         {"id":"enemy30","x":-350,"y":120,"w":10,"h":11, "t": 7},
    
                         //Wave 6
                         {"id":"enemy31","x":740,"y":80,"w":14,"h":13, "t": 6},
                         {"id":"enemy32","x":700,"y":165,"w":10,"h":11, "t": 7},
                         {"id":"enemy33","x":700,"y":120,"w":12,"h":12, "t": 8},
                         {"id":"enemy34","x":-500,"y":80,"w":12,"h":12, "t": 8},
                         {"id":"enemy35","x":-500,"y":165,"w":14,"h":13, "t": 6},
                         {"id":"enemy36","x":-520,"y":120,"w":10,"h":11, "t": 7},
    
                         //Wave 7
                         {"id":"enemy37","x":860,"y":80,"w":10,"h":11, "t": 7},
                         {"id":"enemy38","x":870,"y":165,"w":14,"h":13, "t": 6},
                         {"id":"enemy39","x":840,"y":120,"w":12,"h":12, "t": 8},
                         {"id":"enemy40","x":-620,"y":80,"w":12,"h":12, "t": 8},
                         {"id":"enemy41","x":-670,"y":165,"w":10,"h":11, "t": 7},
                         {"id":"enemy42","x":-690,"y":120,"w":14,"h":13, "t": 6},
    
                         //Wave 8
                         {"id":"enemy43","x":900,"y":80,"w":14,"h":13, "t": 6},
                         {"id":"enemy44","x":900,"y":165,"w":10,"h":11, "t": 7},
                         {"id":"enemy45","x":900,"y":120,"w":12,"h":12, "t": 8} 
                      ];
                    }
// A method that renders the enemies. Because of multiple if statements, every enemy goes towards the player, regardless of the location.
function renderEnemies() {
for(let i = 0; i < enemiesRight.length; i++) {
    //When the enemy's x coordinates are greater than player's x coordinates
    if (enemiesRight[i].x > (player.x + 5) && check ) {
        buffer.drawImage(tile_sheet, (enemiesRight[i].t*16), 0, tile_size, tile_size, enemiesRight[i].x-=ex, enemiesRight[i].y,
        tile_size, tile_size);
    }//When the enemy's x coordinates are smaller than player's x coordinates
    else if (enemiesRight[i].x < (player.x - 5) && check) {
        buffer.drawImage(tile_sheet, (enemiesRight[i].t*16), 0, tile_size, tile_size, enemiesRight[i].x+=ex, enemiesRight[i].y,
        tile_size, tile_size);
    } //When the enemy's x coordinates are within the player's x coordinates+5 and coordinates-5
    else if (enemiesRight[i].x <= (player.x + 5) && enemiesRight[i].x >= (player.x - 5)  && check) {
        if (enemiesRight[i].x >= player.x && enemiesRight[i].y < player.y  ) {
            buffer.drawImage(tile_sheet, (enemiesRight[i].t*16), 0, tile_size, tile_size, enemiesRight[i].x-=ex, enemiesRight[i].y+=ey,
            tile_size, tile_size);
        }//When the enemy's x coordinates are greater than player's x coordinates AND the enemy's y coordinates are greater than player's y coordinates
        else if (enemiesRight[i].x >= player.x && enemiesRight[i].y > player.y ) {
        uffer.drawImage(tile_sheet, (enemiesRight[i].t*16), 0, tile_size, tile_size, enemiesRight[i].x-=ex, enemiesRight[i].y-=ey,
                                    tile_size, tile_size);
        }//When the enemy's x coordinates are smaller than player's x coordinates AND the enemy's y coordinates are smaller than player's y coordinates 
        else if (enemiesRight[i].x <= player.x && enemiesRight[i].y < player.y ) {
            buffer.drawImage(tile_sheet, (enemiesRight[i].t*16), 0, tile_size, tile_size, enemiesRight[i].x+=ex, enemiesRight[i].y+=ey,
            tile_size, tile_size);
        } else  {
            buffer.drawImage(tile_sheet, (enemiesRight[i].t*16), 0, tile_size, tile_size, enemiesRight[i].x+=ex, enemiesRight[i].y-=ey,
            tile_size, tile_size);
        }
        deathDetect(this.enemiesRight[i], i);
  }
 }
}