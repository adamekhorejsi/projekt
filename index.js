document.addEventListener("DOMContentLoaded", function () {

    let mainElement = document.querySelector("main");
    let header = document.querySelector("header");
    let tlacitkoOdstranit = document.createElement("button.odstranit");
    let tlacitkoVratit = document.createElement("button.vratit");
    tlacitkoOdstranit.textContent = "Odstranit";
    tlacitkoVratit.textContent = "Vratit";
    tlacitkoOdstranit.style.color = "red";
    tlacitkoVratit.style.color = "green";
    mainElement.children.style.display = "flex";
    header.appendChild(tlacitkoOdstranit);
    header.appendChild(tlacitkoVratit);

    let odstraneneElementy = [];
    tlacitkoOdstranit.addEventListener("click", function odstranitElementy() {

        odstraneneElementy = Array.from(mainElement.children); // Uložíme odstraněné elementy do pole
        for (const element of odstraneneElementy) {
            mainElement.removeChild(element); // Odstraníme elementy z hlavního elementu
        }
    }
    );


    tlacitkoVratit.addEventListener("click", function vratElementyZpet() {

        for (const element of odstraneneElementy) {
            mainElement.appendChild(element[0]); // Vrátíme elementy zpět do hlavního elementu
        }
    }
    );





});