// Load header HTML and set IDs
function loadHeader() {
    fetch("../common/header.html")
        .then(res => res.text())
        .then(html => {
            const container = document.getElementById("header-container");
            container.innerHTML = html;

            const { visitorId, accountId } = getOrGenerateIds();
            document.getElementById("visitor-id").textContent = `Visitor ID: ${visitorId}`;
            document.getElementById("account-id").textContent = `Account ID: ${accountId}`;
        });
}

// Load header on DOM ready
window.addEventListener("DOMContentLoaded", loadHeader);