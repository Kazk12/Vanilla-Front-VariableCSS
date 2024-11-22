let root = document.documentElement;

let blurRange = document.querySelector("input[name='blur']");
let spacing = document.querySelector("input[name='spacing']");
let color = document.querySelector("input[name='color']");

color.addEventListener("input", handleInputChangementCouleur);

function handleInputChangementCouleur(event) {
    root.style.setProperty('--color', event.target.value);
};

blurRange.addEventListener("change", handleChangeBlur);

function handleChangeBlur(event){
    root.style.setProperty('--blur', event.target.value + "vh")
}

spacing.addEventListener("change", handleChangeSpacing);

function handleChangeSpacing (event) {
    root.style.setProperty('--spacing', event.target.value + "vh")
}
