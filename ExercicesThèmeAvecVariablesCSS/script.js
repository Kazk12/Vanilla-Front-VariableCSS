// Définir la variable permettant de récupérer l'input de type color


/* A cette variable, appliquer la méthode (addEventListener) écoutant l'événement de type change et jouant la fonction permettant d'ajouter une propriété de style (SetProperty) au document :
- le nom de la propriété est la variable CSS --main-color 
- La valeur est définie par la valeur de l'input
*/

// const mySelect = document.getElementById("chooser");
// mySelect.addEventListener("input", colorSelected);

// let root = document.documentElement;

// function colorSelected(event) {
//     console.log(event)
//     root.style.setProperty('--MainColor', event.target.value);
// }

const root = document.querySelector(":root");

root.addEventListener("input", handleInputChangeColor);

function handleInputChangeColor(event){
    root.style.setProperty('--MainColor', event.target.value)
}