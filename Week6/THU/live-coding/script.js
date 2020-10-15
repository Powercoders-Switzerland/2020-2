/** first declare variables for the DOM elements you need access to / to manipulate */
const bodyGradient = document.body;
const colors = document.querySelectorAll("input");
const textOutput = document.querySelector("p");

/** set default values on colors */
colors[0].value="#4aff4a";
colors[1].value="#ff0000";

/** define event listener to catch when color changes */
colors.forEach(color => {
    color.addEventListener("input",changeBG);
});

/** declare function changeBG */
function changeBG(){
    let newGradient = `rgba(0,0,0,0) linear-gradient(to right, ${convertHex2RGB(colors[0].value)}, ${convertHex2RGB(colors[1].value)}) repeat scroll 0% 0%`;
    bodyGradient.style.background = newGradient;
    textOutput.textContent = newGradient;
}

function convertHex2RGB(hex){
    /** for hex to rgb conversion the radix / base of the numeral system has to be changed to 16 */
    let rgb = `rgb(${parseInt(hex.slice(1,3),16)},${parseInt(hex.slice(3,5),16)},${parseInt(hex.slice(5,7),16)})`;
    return rgb; 
}
