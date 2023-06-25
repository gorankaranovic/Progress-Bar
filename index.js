const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const steps = document.querySelectorAll(".step");

n=1;
next.addEventListener("click", () => {
    n++;
    if (n>steps.length){
        n = steps.length
    }
    updateSteps()
})
prev.addEventListener("click", () => {
    n--;
    if (n<1){
        n = 1;
    }
    updateSteps()
})



function updateSteps(){
    steps.forEach((step, index) => {
        if(index < n){
            step.classList.add("checked");
            step.innerHTML = `
                <i class="fa-solid fa-check"></i>
            <small>${
                index === 0 ? "Start"
                : index === steps.length -1 ? "Final"
                : "Step " + index
            }</small>
            `;
        }else{
            step.classList.remove("checked");
            step.innerHTML = `
            <i class="fa-solid fa-circle-xmark"></i>
            `;
        }
    })
    
}

const frontBar = document.querySelector(".frontBar");
const checkedStep = document.querySelectorAll("checked")

frontBar.style.width = ((checkedStep.length -1) / (steps.length -1)) * 100 + "%";
