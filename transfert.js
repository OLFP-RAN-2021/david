let canevas = document.getElementById('Canevas');
let emailAdress = document.getElementById('email').value;

// On installe nos 'ecouteurs'.
canevas.addEventListener("drop", drop_manager)
canevas.addEventListener("dragover", drag_over)

// Merci a Eric 
document.body.addEventListener("dragover", e => e.preventDefault())
document.body.addEventListener("drop", e => e.preventDefault())

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


        // fetch("http://127.0.0.1/transfert/index.php", {
        //     method: "POST",
        //     body:formData
        // })
        //     .then(response => {
        //         if (response.status === 500) {
        //             alert('Server error')
        //         } else {
        //             console.log(response.status)
        //             return response.text()

        //         }
        //     })
        //     .then(data => console.log(data))
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
