function dropHandler(ev) {
    ev.preventDefault();

    console.log(ev.dataTransfer.files[0].name);
    let Img_file = ev.dataTransfer.files[0];
    let img_to_display = document.getElementById("img_to_display")

    readImage(Img_file);

    document.getElementById("img_to_display").height = "100";
    document.getElementById("img_to_display").width = "100";

    let canvas = document.querySelector('canvas');
    console.log(canvas);
    let context = canvas.getContext('2d');

    let imgwidth = img_to_display.offsetWidth;
    let imgheight = img_to_display.offsetHeight;
    canvas.width = imgwidth;
    canvas.height = imgheight;
    context.beginPath();
    context.arc(75, 75, 50, 0, 2 * Math.PI);
    context.stroke();
    // context.drawImage(img_to_display, 0, 0);
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
    });

    reader.readAsDataURL(file);

    reader.onloadend = function () {
        console.log('fini', reader.readyState);
        let height = img_to_display.height;
        let width = img_to_display.width;

        console.log(height);
        console.log(width);
    };
}