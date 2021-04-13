let Angle = 0;
let cnv_w = 0;
let cnv_h = 0;
let canevas = document.getElementById('Canevas');
let context = canevas.getContext('2d');

let left_button = document.getElementById("left");
let right_button = document.getElementById("right");

console.log("coucou !");

// Plus 2 pour les bordures

Console_les_size()


left_button.addEventListener("click", left_rotate);
right_button.addEventListener("click", right_rotate);


function left_rotate() {
    Angle = Angle + 10;
    if (Angle > 360) {
        Angle = Angle - 360;
    }
    Do_the_rotation_yahoooo(Angle);
    console.log("Left button");
}

function right_rotate() {
    Angle = Angle - 10;
    if (Angle < 0) {
        Angle = Angle + 360;
    }
    Do_the_rotation_yahoooo(Angle);
    console.log("Right button");
}


function dropHandler(ev) {
    ev.preventDefault();

    console.log(ev.dataTransfer.files[0].name);
    let Img_file = ev.dataTransfer.files[0];

    Read_and_display_image(Img_file);

}

function dragOverHandler(ev) {
    // Sinon le navigateur se prend le droit d'ouvrir le document
    // car c'est un petit curieux
    ev.preventDefault();
}

function Read_and_display_image(file) {
    // Protection special Mathieu, seulement prendre les MIME image
    if (!file.type.startsWith('image/')) {
        console.log("Ah ben bravo !");
        return;
    }

    img_prov = new Image();
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        img_prov.src = event.target.result;
    });

    reader.readAsDataURL(file);

    reader.addEventListener('load', (event) => {
        context.drawImage(img_prov, 0, 0, cnv_w, cnv_h);

        Console_les_size()
    });

}
function Do_the_rotation_yahoooo(degrees) {

    console.log(degrees);
    context.clearRect(0, 0, cnv_w, cnv_h);
    context.save();
    context.translate(cnv_w / 2, cnv_h / 2);
    context.rotate(degrees * Math.PI / 180);
    context.drawImage(img_prov, -(cnv_w / 2), -(cnv_h / 2), cnv_w, cnv_h);
    context.restore();

    Console_les_size()

}

function Console_les_size()
{
    cnv_h = canevas.clientHeight + 2;
    cnv_w = canevas.clientWidth + 2;
    console.log(cnv_w, cnv_h);
   
}