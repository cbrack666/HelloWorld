"using strict";

let startBtn = document.getElementById("");
let output = document.getElementByID("");













/*
Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@cbrack666 
cbrack666
/
HelloWorld
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
HelloWorld/BrackFibonacci/app.js /
@cbrack666
cbrack666 Add files via upload
Latest commit c3a627d on Jan 23
 History
 1 contributor
72 lines (53 sloc)  1.65 KB

"using strict";

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
        initValues();
	}
});

let num1 = document.getElementById("startFibo1");
let num2 = document.getElementById("startFibo2");
let next = document.getElementById("next");
let genbtn = document.getElementById("gennextnum");
let ratio = document.getElementById("ratio");
let clearseqbtn = document.getElementById("clearseq");

seqStrBase = "Sequence: ";
ratioStrBase = ratio.textContent;

initValues();


num1.addEventListener("change", () => {
    initValues();
});
num2.addEventListener("change", () => {
    initValues();
});

// Event handler for clear button
clearseqbtn.addEventListener("click", () => {
    // Clear the two text fields and reread initial values
    initValues();
});

function initValues() {
    prev1 = +num1.value;
    prev2 = +num2.value;

    start1 = prev1;
    start2 = prev2;

    // Set sequence text to label and first two values
    seqStr = `${seqStrBase} ${start1}, ${start2}`;
    next.textContent = seqStr;
    ratio.textContent = ratioStrBase;
}

// Evenmt handler to generate next fibo
genbtn.addEventListener("click", () => {

    // Compute next fibonacci number
    let nextFib = +(prev1 + prev2);

    //
    seqStr += (", " + nextFib);
    next.textContent = seqStr;

    // Set vars for next iteration
    prev1 = prev2;
    prev2 = nextFib;

    // Compute approximation to phi aka Golden Ratio aka Divine Ratio = (1+sqrt(5))/2
    if (Math.floor(prev1) != 0)
    {
        ratioNum = prev2 / prev1;
        ratio.textContent = `${ratioStrBase} ${ratioNum}`;
    }


});

*/
