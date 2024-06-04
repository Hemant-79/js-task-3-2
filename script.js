const names = [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya" ]; 
var i = 0;
document.querySelector(".previous").addEventListener('click', () => {
    if(i>0){
        i--;
    }
    document.querySelector('h1').innerHTML = names[i];
});

document.querySelector(".next").addEventListener('click', () => {
    if(i<(names.length-1)){
        i++;
    }
    console.log("hello?")
    document.querySelector("h1").innerHTML = names[i];
});
