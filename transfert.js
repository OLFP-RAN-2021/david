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

    document.getElementById('errorname').innerHTML="";  
    console.log(emailAdress);
    if (!emailIsValid(emailAdress))
    {
    document.getElementById('errorname').innerHTML="Veuillez entrez un email valide"; 
;

    let formData = new FormData();

    for (var i = 0; i < event.dataTransfer.files.length; i++) {
        //  console.log(ev.dataTransfer.files[i].name);
        var file = ev.dataTransfer.files[i];
        formData.append('files[]', file)
        formData.append('Coucou','hibou')   // Pour l'envoi de l'email
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

// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
function emailIsValid (email) {
    return /\S+@\S+\.\S+/.test(email)
  }
