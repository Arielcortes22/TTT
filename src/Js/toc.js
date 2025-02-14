const Reiniciar = document.getElementById("Reiniciar");

let isplayerOne = true;
let Cats = document.getElementsByClassName("Cat");

for (let index = 0; index < Cats.length; index++) {
Cats[index].addEventListener("click",function () {
        if (Cats[index].textContent!="") {
                console.log("No puedes");
                alert ("No puedes");
                
        } else{
            console.log(Cats[index]);
            Cats[index].textContent = "x"
            selector()
        }
     
});
  
}
function selector() {

    let CatsVacias=[];
    for(let index=0; index<Cats.length; index++) {
        if(Cats[index].textContent == "" ){
            CatsVacias.push(index);
        }
    }

    if (CatsVacias.length > 0) {
        const Catscons =
        CatsVacias[ Math.floor(Math.random()* CatsVacias.length)];
        Cats[Catscons].innerHTML = "o"
        
  
      
    }
 
               
        checkline(0, 1, 2);
        checkline(3, 4, 5);
        checkline(6, 7, 8);
        checkline(0, 3, 6);
        checkline(1, 4, 7);
        checkline(2, 5, 8);
        checkline(0, 4, 8);
        checkline(6, 4, 2);
    }


function checkline(c1, c2, c3) {
    if(
        Cats[c1].innerHTML.length &&
        Cats[c1].innerHTML === Cats[c2].innerHTML &&
        Cats[c2].innerHTML === Cats[c3].innerHTML 
      
    ){
        showWinner(Cats[c1].innerHTML);
    }
}

function showWinner(player) {
    document.getElementById("Resultado").innerHTML = player + "WIN"

    localStorage.setItem("winner", player);
} 

    Reiniciar.addEventListener("click", function() {

    for (let index = 0; index < Cats.length; index++) {
        Cats[index].textContent = "";
        document.getElementById("Resultado").innerHTML = "";
        console.log(Reiniciar);
    }  
    localStorage.removeItem("winner");
    })

    window.onload = function() {
        const winner = localStorage.getItem("winner");
        if (winner) {
            document.getElementById("Resultado").innerHTML = winner + " WIN";
        }
    }

    

   
   