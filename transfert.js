let canevas = document.getElementById('Canevas');
let emailAdress = document.getElementById('email').value;
let sendButton = document.getElementById('Send');

// On installe nos 'ecouteurs'.
// canevas.addEventListener("drop", drop_manager)
// canevas.addEventListener("dragover", drag_over)

canevas.addEventListener("drop", affFiles)
canevas.addEventListener("dragover", affFiles)

sendButton.addEventListener("click", drop_manager)

// Merci a Eric 
document.body.addEventListener("dragover", e => e.preventDefault())
document.body.addEventListener("drop", e => e.preventDefault())

function affFiles(ev) {
    ev.preventDefault();

    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        var file = ev.dataTransfer.files[i];
        console.log(ev.dataTransfer.files[i].name)
    }

    canevas.append("")
}

function drop_manager(ev) {
    ev.preventDefault();

    document.getElementById('errorname').innerHTML = "";

    if (emailIsValid(emailAdress)) {
        document.getElementById('errorname').innerHTML = "Veuillez entrez un email valide";
    }
    else {
        document.getElementById('errorname').innerHTML = "";

        let formData = new FormData();

        for (var i = 0; i < event.dataTransfer.files.length; i++) {
            var file = ev.dataTransfer.files[i];
            formData.append('files[]', file)
            formData.append('email', emailAdress)   // Pour l'envoi de l'email
        }


        fetch("http://127.0.0.1/transfert/index.php", {
            method: "POST",
            body:formData
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
    }
}

function drag_over(ev) {
    // Sinon le navigateur se prend le droit d'ouvrir le document
    // car c'est un petit curieux
    ev.preventDefault();
}

function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email)
}
