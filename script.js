document.addEventListener("DOMContentLoaded", function () {
    console.log("Alpha Dog website loaded successfully!");

    alert("🐺 Welcome to the official Alpha Dog website!");

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

    alert("✅ Contract address copied successfully!");
}
