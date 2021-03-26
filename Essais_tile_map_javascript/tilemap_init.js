
var canvas = document.getElementById('tile_map_canvas');
var ctx = canvas.getContext('2d');
console.log(ctx);
// ctx.fillRect(25, 25, 100, 100);
var tab = [
2,2,2,2,2,2,2,2,2,2,
2,1,1,1,1,1,1,1,1,2,
2,1,2,2,2,2,1,1,1,2,
2,1,1,1,2,1,1,1,1,2,
2,1,1,2,1,1,1,1,1,2,
2,1,1,1,1,1,2,1,1,2,
2,2,2,1,1,2,1,1,1,2,
2,1,1,1,1,1,1,2,2,2,
2,1,1,1,1,1,1,1,1,2,
2,2,2,2,2,2,2,2,2,2,
    ];

var background_tab = [

1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,
  ];

var img = new Image();
img.src = 'tile_map2.png';

var tile_size_x = 32;
var tile_size_y = 32;
var cnt = 0;

img.addEventListener('load', function () {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            ctx.drawImage(img, background_tab[cnt] * tile_size_x, 0, tile_size_x, tile_size_y, j * tile_size_x, i * tile_size_y, tile_size_x, tile_size_y);
            cnt = cnt + 1;
        }
    }
});


// ctx.fillRect(0, 0, 200, 200);  
var cnt1=0;
img.addEventListener('load', function () {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            ctx.drawImage(img,tab[cnt1] * tile_size_x, 0, tile_size_x, tile_size_y, j * tile_size_x, i * tile_size_y, tile_size_x, tile_size_y);
            cnt1 = cnt1 + 1;
        }
    }
}); 