document.getElementById("readMoreBtn").addEventListener("click", readMore);

function readMore() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("readMoreBtn")
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Läs mer"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Läs mindre"; 
      moreText.style.display = "inline";
    }
}

window.addEventListener("load", onLoad)