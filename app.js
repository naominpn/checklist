var listItems = document.querySelectorAll('ul li');
var lightBtn = document.querySelector(".light-btn");
var darkBtn = document.querySelector(".dark-btn");
var resetBtn = document.querySelector(".reset-btn");

function handleClick(event){
    debugger
    var item = event.target

    // item.classList.toggle("completed");
    if (item.classList.contains("completed")){
        item.classList.remove('completed');
    } else {
        item.classList.add('completed');
    }
}


for (var j = 0; j < listItems.length; j++){
    listItems[j].addEventListener("click", handleClick);
};



//1. Dark mode - toggle color scheme
function handleToDark(){
    var theButText = document.querySelector(".dark-btn")
    if(theButText.textContent === "dark mode"){
        document.querySelector("body").classList.add("toDark");
        document.querySelector(".dark-btn").textContent = "light mode";
    } else {
        document.querySelector("body").classList.remove("toDark");
        document.querySelector(".dark-btn").textContent = "dark mode";
    }
    
}

darkBtn.addEventListener("click", handleToDark);


// function toLight(){
//     document.querySelector("body").classList.remove("toDark");
// }

// lightBtn.addEventListener("click", toLight)



//2. reset button - reset all items
function reset(){
    for (var k = 0; k < listItems.length; k++){
        listItems[k].classList.remove("completed");
    };
}

resetBtn.addEventListener("click", reset);



