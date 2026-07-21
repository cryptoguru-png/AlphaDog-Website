document.addEventListener("DOMContentLoaded", function () {
    console.log("Alpha Dog website loaded successfully!");

    

    const buttons = document.querySelectorAll("a");

    buttons.forEach(button => {
        button.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
        });

        button.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
function copyContract() {
    const contract = document.getElementById("contractAddress");

    contract.select();
    contract.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(contract.value);

    
}
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});
