/*
CONSEGNA
- Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
- Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

BONUS

Facciamo accendi e spegni:
- Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
- Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
- E così via...

Per fare questo bonus potremmo aver bisogno di del metodo string.includes() 😉

Buon Lavoro e buon divertimento!  💡 */


const turnOff = document.querySelector("#spenta"); //Selezione lampadina spenta
console.log(spenta);

const turnOn = document.querySelector("#accesa"); //Selezione lampadina accesa
console.log(accesa);

let button = document.getElementById("bottone"); //Selezione bottone
console.log(bottone);

let spegniamoLaLampadina = true; //Impostazione valore booleano 

//Funzione bottone

const backgroundPage = document.getElementById("onlyForTheBackground"); //Bonus

button.addEventListener("click", //Impostazione evento "al premere il bottone"
    function onOff () {
        if (spegniamoLaLampadina) {
            turnOff.style.display = "none"; //L'immagine della lampadina spenta sparisce
            turnOn.style.display = "block"; //L'immagine della lampadina accesa compare
            backgroundPage.style.backgroundColor = "white"; //Cambio sfondo 
            button.textContent = "Spegni"; //Il testo del bottone cambia //Bonus
        } else { //Bonus
            //spegniamoLaLampadina = true;
            //turnOff.style.display = "block"; //L'immagine della lampadina spenta compare //Bonus
            //turnOn.style.display = "none"; //L'immagine della lampadina accesa sparisce //Bonus
            //backgroundPage.style.backgroundColor = "black"; //Ritorna lo sfondo originale //Bonus
            //button.textContent = "Accendi"; //Il testo del bottone cambia //Bonus
        }
    }
)
