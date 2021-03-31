var myBtn = document.getElementById("myBtn");
var result = document.getElementById("result");
let de=0;
myBtn.addEventListener("click", random);

function random(){
    de=Math.floor(Math.random() *10 );

    if (de<5)
    {result.innerText ="head" ;}

else
{result.innerText ="tail" ;}

// console.log(de);
}