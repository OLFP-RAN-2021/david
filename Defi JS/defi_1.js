const myBtn = document.getElementById('myBtn') ;
const cntClic = document.getElementById('cntClic');

myBtn.addEventListener("click", addone);

var nbClic = 0;

function addone()
{
    nbClic=nbClic+1;
    console.log(nbClic);
}
