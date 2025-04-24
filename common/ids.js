const companyData = {
    "Nour Tech": ["Ali", "Leila", "Hassan", "Noor"],             // Middle Eastern
    "Shinobi Systems": ["Hiroshi", "Satoshi", "Yoko", "Akira"],  // Japanese
    "IndiCore": ["Raj", "Avi", "Neel", "Tia"],                  // Indian
    "ÉlanTech": ["Émile", "Chloé", "Léa", "Rémi"]               // French
};

function getRandomKey(obj) {
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random() * keys.length)];
}

function getOrGenerateIds() {
    let visitorId = localStorage.getItem('visitorId');
    let accountId = localStorage.getItem('accountId');

    if (!visitorId || !accountId) {
        accountId = getRandomKey(companyData);
        const visitorNames = companyData[accountId];
        visitorId = visitorNames[Math.floor(Math.random() * visitorNames.length)];

        localStorage.setItem('visitorId', visitorId);
        localStorage.setItem('accountId', accountId);
    }

    return { visitorId, accountId };
}

function resetIds() {
    localStorage.removeItem('visitorId');
    localStorage.removeItem('accountId');
    location.reload();
}
