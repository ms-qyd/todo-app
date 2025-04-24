function generateId(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getOrGenerateIds() {
    let visitorId = localStorage.getItem('visitorId');
    let accountId = localStorage.getItem('accountId');

    if (!visitorId || !accountId) {
        visitorId = generateId(100, 300);
        accountId = generateId(10, 20);
        localStorage.setItem('visitorId', visitorId);
        localStorage.setItem('accountId', accountId);
    }

    return { visitorId, accountId };
}

function resetIds() {
    localStorage.removeItem('visitorId');
    localStorage.removeItem('accountId');
    location.reload(); // Refresh to reinitialize everything
}
