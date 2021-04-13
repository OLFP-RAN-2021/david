let Angle = 0;

let canevas = document.getElementById('Canevas');
let context = canevas.getContext('2d');

let left_button = document.getElementById("left");
let right_button = document.getElementById("right");

// On installe nos 'ecouteurs'.
canevas.addEventListener("drop", drop_manager)
canevas.addEventListener("dragover", drag_over)
left_button.addEventListener("click", left_rotate);
right_button.addEventListener("click", right_rotate);

// Recupere la taille du canevas, +2 pour la bordure
let cnv_h = canevas.clientHeight + 2;
let cnv_w = canevas.clientWidth + 2;


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


function drop_manager(ev) {
    ev.preventDefault();

    console.log(ev.dataTransfer.files[0].name);
    let Img_file = ev.dataTransfer.files[0];

    Read_and_display_image(Img_file);

}

function drag_over(ev) {
    // Sinon le navigateur se prend le droit d'ouvrir le document
    // car c'est un petit curieux
    ev.preventDefault();
}

function Read_and_display_image(file) {
    // ev.preventDefault();

    // console.log(ev.dataTransfer.files[0].name);
    // let Img_file = ev.dataTransfer.files[0];

    // Protection special Mathieu, seulement prendre les MIME image
    if (!file.type.startsWith('image/')) {
        console.log("Ah ben bravo !");
        return;
    }
    img_prov = new Image();
    reader = new FileReader();

    reader.onload = function(event){
        img_prov.onload = function(){
            context.drawImage(img_prov,0,0,cnv_w,cnv_h);
        }
        img_prov.src = event.target.result;
    }
    reader.readAsDataURL(file);    

}

function Do_the_rotation_yahoooo(degrees) {

    console.log(degrees);
    context.clearRect(0, 0, cnv_w, cnv_h);
    context.save();
    context.translate(cnv_w / 2, cnv_h / 2);
    context.rotate(degrees * Math.PI / 180);
    context.drawImage(img_prov, -(cnv_w / 2), -(cnv_h / 2), cnv_w, cnv_h);
    context.restore();

}

function Console_les_size() {
    cnv_h = canevas.clientHeight + 2;
    cnv_w = canevas.clientWidth + 2;
    console.log(cnv_w, cnv_h);

    cnv_h = canevas.height;
    cnv_w = canevas.width;
    console.log(cnv_w, cnv_h);

}