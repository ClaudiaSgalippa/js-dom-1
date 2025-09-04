const turnOff = document.querySelector("#spenta"); //Selezione lampadina spenta
console.log(spenta);

const turnOn = document.querySelector("#accesa"); //Selezione lampadina accesa
console.log(accesa);

let button = document.getElementById("bottone"); //Selezione bottone
console.log(bottone);

let spegniamoLaLampadina = true; //Impostazione valore booleano 

//Funzione bottone

button.addEventListener("click", //Impostazione evento "al premere il bottone"
    function onOff () {
        if (spegniamoLaLampadina) {
            turnOff.style.display = "none";
            turnOn.style.display = "block";
        }
    }
)
