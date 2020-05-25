function orcamento(event) {
    event.preventDefault();
    alert("Orçamento da entrega: R$20,00");

    document.getElementById("panel1").style.display = "none";
    document.getElementById("panel2").style.display = "block";

    setTimeout(() => {
        document.getElementById("panel2").style.display = "none";
        document.getElementById("panel3").style.display = "block";
    }, 3000);
}
