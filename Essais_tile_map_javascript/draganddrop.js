function dropHandler(ev) {
    ev.preventDefault();

    console.log(ev.dataTransfer.files[0].name);
    let Img_file = ev.dataTransfer.files[0];
    let img_to_display = document.getElementById("img_to_display")

    readImage(Img_file);



}

function dragOverHandler(ev) {
    // Sinon le navigateur se prend le droit d'ouvrir le document
    // car c'est un petit curieux
    ev.preventDefault();
}

function readImage(file) {
    if (file.type && !file.type.startsWith('image/')) {
        return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        img_to_display.src = event.target.result;
    });

    reader.readAsDataURL(file);

reader.onloadend = function () {
    console.log('Done', reader.readyState);
    let height = img_to_display.height;
    let width = img_to_display.width;

    console.log(height);
    console.log(width);
  };
}