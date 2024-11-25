// let root = document.documentElement;

// let blurRange = document.querySelector("input[name='blur']");
// let spacing = document.querySelector("input[name='spacing']");
// let color = document.querySelector("input[name='color']");

// color.addEventListener("input", handleInputChangementCouleur);

// function handleInputChangementCouleur(event) {
//     root.style.setProperty('--color', event.target.value);
// };

// blurRange.addEventListener("change", handleChangeBlur);

// function handleChangeBlur(event){
//     root.style.setProperty('--blur', event.target.value + "vh")
// }

// spacing.addEventListener("change", handleChangeSpacing);

// function handleChangeSpacing (event) {
//     root.style.setProperty('--spacing', event.target.value + "vh")
// }


const spacingInput = document.querySelector('input[name="spacing"]');
// console.log(spacingInput);

const inputBlur = document.querySelector('input[name="blur"]');
// console.log(inputBlur);

const inputColor = document.querySelector('input[name="color"]');

spacingInput.addEventListener("input", handleInputSpacing);
inputBlur.addEventListener("input", handleInputBlur);
inputColor.addEventListener("input", handleInputColor);

let root = document.documentElement;

function handleInputSpacing(event) {
  root.style.setProperty("--spacing", event.target.value + event.target.dataset.sizing);
}

function handleInputBlur(event) {
  root.style.setProperty("--blur", event.target.value + event.target.dataset.sizing); 
}    
// Le event?target.dataset.sizing permet de recupèrer la valeur de l'event par exemple ici c'est vh.

function handleInputColor(event) {
  root.style.setProperty("--color", event.target.value);
}
