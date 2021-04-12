let load_flag = false;

var canevas = document.getElementById('Canevas');
var context = canevas.getContext('2d');

let left_button = document.getElementById("left");
let right_button = document.getElementById("right");

left_button.addEventListener("click", left_rotate);
right_button.addEventListener("click", right_rotate);

function left_rotate() {
    console.log("Left button");
    context.rotate(90 * Math.PI / 180);
    context.drawImage(img_to_display, 0, 0, 100, 100);
}

function right_rotate() {
    console.log("Right button");
}


function dropHandler(ev) {
    ev.preventDefault();

    console.log(ev.dataTransfer.files[0].name);
    let Img_file = ev.dataTransfer.files[0];
    let img_to_display = document.getElementById("img_to_display")

    readImage(Img_file);

    document.getElementById("img_to_display").height = "100";
    document.getElementById("img_to_display").width = "100";

    // var canevas = document.getElementById('Canevas');
    // var context = canevas.getContext('2d');

    //     ctx.rotate(45 * Math.PI / 180);

    let imgwidth = img_to_display.offsetWidth;
    let imgheight = img_to_display.offsetHeight;
    canvas.width = imgwidth;
    canvas.height = imgheight;
    console.log(load_flag);
    context.drawImage(img_to_display, 0, 0, 100, 100);

}

function dragOverHandler(ev) {
    // Sinon le navigateur se prend le droit d'ouvrir le document
    // car c'est un petit curieux
    ev.preventDefault();
}

function readImage(file) {
    // Protection special Mathieu, seulement prendre les MIME image
    if (!file.type.startsWith('image/')) {
        return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        img_to_display.src = event.target.result;
    })

    reader.readAsDataURL(file);
    reader.addEventListener('load', (event) => {
        let canvas = document.getElementById('Canevas');
        console.log(canvas);
        let context = canvas.getContext('2d');

        let imgwidth = img_to_display.offsetWidth;
        let imgheight = img_to_display.offsetHeight;
        canvas.width = imgwidth;
        canvas.height = imgheight;
        console.log(load_flag);
        context.drawImage(img_to_display, 0, 0, 100, 100);
        console.log("Data as url end");
    })


    reader.onloadend = function () {
        console.log('fini', reader.readyState);
        let height = img_to_display.height;
        let width = img_to_display.width;

        console.log(height);
        console.log(width);
        load_flag = true;

        // document.getElementById("img_to_display").height = "100";
        // document.getElementById("img_to_display").width = "100";

        // let canvas = document.getElementById('Canevas');
        // console.log(canvas);
        // let context = canvas.getContext('2d');

        // let imgwidth = img_to_display.offsetWidth;
        // let imgheight = img_to_display.offsetHeight;
        // canvas.width = imgwidth;
        // canvas.height = imgheight;
        // console.log(load_flag);
        // context.drawImage(img_to_display, 0, 0, 100, 100);

    };
}
