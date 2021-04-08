var my_button = document.getElementById('Mon_button');
let indice = 0;

const fetch_routine = function () {
    fetch('https://jsonplaceholder.typicode.com/users'+indice)
        .then(response => response.json())
        .then(data => {
            let Name_to_modify=document.getElementById("Nom")
            // Name_to_modify.innerHTML=data[indice].name
            // Name_to_modify.innerHTML=data.name
            indice++;
            if (indice>9){indice=0;}
        }
        )
        .catch(function(error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
          });
    // . catch (error, console.error(error);
    };
    
    my_button.addEventListener("click", fetch_routine);
