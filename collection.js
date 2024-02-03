var slidenavbar=document.querySelector(".slide-navbar")

function slidenav(){
    slidenavbar.style.left="0%"
}
function cancelslidenav()
{
    slidenavbar.style.left="-42%"
}

var enteredtext = ""
var elements = document.querySelector(".collections")
var elementvalues = elements.querySelectorAll("div")

function check(event){
    enteredtext = event.target.value.toUpperCase()
    for(var i = 0; i < elementvalues.length; i++)
    {
        if(elementvalues[i].textContent.toUpperCase().indexOf(enteredtext) < 0)
        {
            elementvalues[i].style.display="none"
        }

        else{
            elementvalues[i].style.display="block"
        }
    }
}