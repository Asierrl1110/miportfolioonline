// Elementos del html
const btnLinkedIn = document.getElementById("btnLinkedIn");
const btnGitHub = document.getElementById("btnGitHub");
const btnBrainboostClient = document.getElementById("btnBrainboostClient");
const btnBrainboostServer = document.getElementById("btnBrainboostServer");
const btnCajaRegistradora = document.getElementById("btnCajaRegistradora");
const btnDescargarCV = document.getElementById("btnDescargarCV");

function goTo(url) {
    window.open(url);
}

btnLinkedIn.addEventListener("click", () => goTo("https://www.linkedin.com/in/asierrodr%C3%ADguezlamas/"));
btnGitHub.addEventListener("click", () => goTo("https://github.com/Asierrl1110"));
btnDescargarCV.addEventListener("click", () => goTo("../assets/curriculum_Asier.pdf"));
btnBrainboostClient.addEventListener("click", () => goTo("https://github.com/Asierrl1110/BrainboostClient"));
btnBrainboostServer.addEventListener("click", () => goTo("https://github.com/Asierrl1110/BrainboostServer"));
btnCajaRegistradora.addEventListener("click", () => goTo("https://github.com/Asierrl1110/CajaRegistradoraDESIN"));