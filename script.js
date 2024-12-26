let elements = document.getElementsByClassName("normal");
let display = "";

function bgc() {
    this.classList.add('clicked');

    const value = this.textContent;

    if (value === 'AC') {
        display = ""; 
    }
    else if (value === "DE") {
        display+=""
        display = display.slice(0, -1);
    }
    else if (value === '=') {
        try {
            display = eval(display); 
        } catch (e) {
            display = "Error"; 
        }
    } else {
        display += value; 
    }
    document.querySelector("input").value = display;

    setTimeout(() => {
        this.classList.remove('clicked');
    }, 200);
}

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", bgc);
}
