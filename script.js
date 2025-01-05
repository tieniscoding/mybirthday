// Redirect user if they haven't entered the magic word
window.onload = function () {
    const storedName = localStorage.getItem("partnerName");
    const currentPage = window.location.pathname.split("/").pop();

    // Redirect to welcome if not unlocked yet
    if (!storedName && currentPage !== "welcome.html") {
        window.location.href = "/welcome.html";
    }

    // Display the saved name on each page
    if (storedName && document.getElementById("my")) {
        document.getElementById("my").textContent = storedName;
    }
};

// Check for the correct magic word
function checkMagicWord() {
    const magicWord = document.getElementById("magicWord").value.trim().toLowerCase();
    if (magicWord === "my") {
        localStorage.setItem("partnerName", "My Love");
        window.location.href = "/page2.html";
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
}

// Move to the next page with absolute path
function nextPage(pageUrl) {
    window.location.href = pageUrl;
}
