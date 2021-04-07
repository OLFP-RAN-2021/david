var my_button = document.getElementById('Mon_button');
let indice = 0;

const fetch_routine = function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            let Name_to_modify=document.getElementById("Nom")
            Name_to_modify.innerHTML=data[indice].name
            indice++;
            if (indice>9){indice=0;}
        }
        )
    .catch(console.log("Fetch erreur"))
    };
    
    my_button.addEventListener("click", fetch_routine);
