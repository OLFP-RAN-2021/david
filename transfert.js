// let canevas = document.getElementById('Canevas');
let listefile = document.getElementById("liste")
let emailAdress = document.getElementById("email").value
let sendButton = document.getElementById("Send")

listefile.addEventListener("drop", affFiles)
listefile.addEventListener("dragover", affFiles)

// listefile.addEventListener("drop", drop_manager)
// listefile.addEventListener("dragover", drop_manager)

sendButton.addEventListener("click", drop_manager)

document.body.addEventListener("dragover", e => e.preventDefault())
document.body.addEventListener("drop", e => e.preventDefault())

// console.log("coucou");

let formData = new FormData();

function affFiles(ev) {
    ev.preventDefault();

    let myBr = document.createElement("br");
    // console.log('aff files');

    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        var file = ev.dataTransfer.files[i];
        formData.append('files[]', file)
        listefile.append(file.name);
        listefile.append(myBr)
        console.log(file);
    }
}

function drop_manager(ev) {
    ev.preventDefault();

    document.getElementById('errorname').innerHTML = "";

    // if (emailIsValid(emailAdress)) {
    //     document.getElementById('errorname').innerHTML = "Veuillez entrez un email valide";
    // }
    // else {
    //     document.getElementById('errorname').innerHTML = "";

    emailAdress = "gt-turbo@jagware.org"

    formData.append('email', emailAdress)

    // console.log(emailAdress);

    // let formData = new FormData();

    // for (var i = 0; i < ev.dataTransfer.files.length; i++) {
    //     var file = ev.dataTransfer.files[i];
    //     formData.append('files[]', file)
    //     formData.append('email', emailAdress)   // Pour l'envoi de l'email
    //     console.log(file);
    // }

    fetch("http://127.0.0.1/transfert/index.php", {
        method: "POST",
        body: formData
    })
        .then(response => {
            if (response.status === 500) {
                alert('Server error')
            } else {
                console.log(response.status)
                return response.text()

            }
        })
        .then(data => console.log(data))
    // }
}

function drag_over(ev) {
    // Sinon le navigateur se prend le droit d'ouvrir le document
    // car c'est un petit curieux
    ev.preventDefault();
}

function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email)
}

function messsageError(message) {

}
