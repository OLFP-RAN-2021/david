let canevas = document.getElementById('Canevas');

// On installe nos 'ecouteurs'.
canevas.addEventListener("drop", drop_manager)
canevas.addEventListener("dragover", drag_over)

// Merci a Eric 
document.body.addEventListener("dragover", e => e.preventDefault())
document.body.addEventListener("drop", e => e.preventDefault())

function drop_manager(ev) {
    ev.preventDefault();

    for (var i = 0; i < event.dataTransfer.files.length; i++) {
    console.log(ev.dataTransfer.files[i].name);
    var imgFile = ev.dataTransfer.files[i];
    var pathFile = ev.dataTransfer.files[i].path;
    // console.log(imgFile);
    // console.log(pathFile);
    }

    let data = new FormData();
    data.append("lulu", "Yeah !!");
    data.append("key", "ev.dataTransfer.files[0].name");


    fetch("http://127.0.0.1/transfert/index.php", {
        method: "POST",
        body:data
    })
    .then(response => {
        if(response.status === 500){
            alert('Server error')
        } else {
            console.log('Sended')
            response.text()
        }
    })
    .then (data => console.log(data))

}

function drag_over(ev) {
    // Sinon le navigateur se prend le droit d'ouvrir le document
    // car c'est un petit curieux
    ev.preventDefault();
}

