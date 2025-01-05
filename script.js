// Redirect user if they haven't entered the magic word
window.onload = function () {
    const storedName = localStorage.getItem("partnerName");
    const currentPage = window.location.pathname.split("/").pop();

    if (!storedName && currentPage !== "welcome.html" && currentPage !== "index.html") {
        window.location.href = "welcome.html";
    }

    if (storedName && document.getElementById("my")) {
        document.getElementById("my").textContent = storedName;
    }
};

function checkMagicWord() {
    const magicWord = document.getElementById("magicWord").value.trim().toLowerCase();
    if (magicWord === "my") {
        localStorage.setItem("partnerName", "My Love");
        window.location.href = "page2.html";
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
}

function nextPage(pageUrl) {
    window.location.href = pageUrl;
}
