// let canevas = document.getElementById('Canevas');
let listefile = document.getElementById("liste")
let emailAdress = document.getElementById("email").value
let sendButton = document.getElementById("Send")

listefile.addEventListener("drop", affFiles)
listefile.addEventListener("dragover", affFiles)
sendButton.addEventListener("click", drop_manager)

document.body.addEventListener("dragover", e => e.preventDefault())
document.body.addEventListener("drop", e => e.preventDefault())

let formData = new FormData();
let flagfile = false;

function affFiles(ev) {
    ev.preventDefault();

    let myBr = document.createElement("br");

    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        var file = ev.dataTransfer.files[i];
        formData.append('files[]', file);

        listefile.append(file.name);
        listefile.append(myBr);
        console.log(file);
        flagfile = true;
    }
}

function drop_manager(ev) {
    ev.preventDefault();

    let emailAdress = document.getElementById("email").value

    messsageError("");   // Reinitialise le message d'erreur

    if (!emailIsValid(emailAdress)) {
        messsageError("Veuillez entrez un email valide");
    }
    else {

        if (flagfile == false) {
            messsageError("Veuillez entrez au moins 1 fichier");
        }
        else {
            formData.append('email', emailAdress)

            fetch("http://127.0.0.1/transfert/index.php", {
                method: "POST",
                body: formData
            })
                .then(response => {
                    if (response.status === 500) {
                        alert('Server error')
                    } else {
                        console.log(response.status)
                        console.log('Upload error')
                        return response.text()

                    }
                })
                .then(data => console.log(data))

        }
    }
}

function drag_over(ev) {
    // Sinon le navigateur se prend le droit d'ouvrir le document
    // car c'est un petit curieux
    ev.preventDefault();
}

function emailIsValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function messsageError(message) {
    document.getElementById('errorname').innerHTML = message;
}
