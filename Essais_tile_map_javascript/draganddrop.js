let Angle=0;
let canevas = document.getElementById('Canevas');
let context = canevas.getContext('2d');

let canvas_width=300;
let canvas_height=200;

console.log("Coucou ;")

console.log(canvas_width, canvas_height);

let left_button = document.getElementById("left");
let right_button = document.getElementById("right");

left_button.addEventListener("click", left_rotate);
right_button.addEventListener("click", right_rotate);

function left_rotate() {
    Angle=Angle+10;
    if (Angle>360)
    {
        Angle=Angle-360;
    }
    Do_the_rotation_yahoooo(Angle);
    console.log("Left button");
}

function right_rotate() {
    Angle=Angle-10;
    if (Angle<0)
    {
        Angle=Angle+360;
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

    img_prov= new Image();
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        img_prov.src = event.target.result;
    });

    reader.readAsDataURL(file);

    reader.addEventListener('load', (event) => {
        let canvas = document.getElementById('Canevas');
        let context = canvas.getContext('2d');

        context.drawImage(img_prov, 0, 0, 300, 200);
    });

}
function Do_the_rotation_yahoooo(degrees){
    console.log(degrees);
    context.clearRect(0,0,300,200);
    context.save();
    context.translate(150,100);
    context.rotate(degrees*Math.PI/180);
    context.drawImage(img_prov,-150,-100,300,200);
    context.restore();
}