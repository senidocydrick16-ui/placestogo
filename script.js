const rating = 4.5;
let ratingLabel = "";

if (rating >= 4) {
    ratingLabel = "Highly recommended";
} else if (rating >= 2.5 && rating <= 3.9) {
    ratingLabel = "Worth a visit";
} else {
    ratingLabel = "Only if you're nearby";
}

const budgetOk = true;
const isOpen = true;
const budgetResult = (budgetOk && isOpen) ? "Good option right now" : "Maybe another time";

const isNear = true;
const distanceResult = isNear ? "Walking distance" : "Better to commute";

const asideEl = document.querySelector("aside");
if (asideEl) {
    const decisionBox = document.createElement("div");
    decisionBox.className = "place-detail-card";
    decisionBox.style.marginTop = "15px";
    decisionBox.innerHTML = `
        <h3 style="color: var(--brand); margin-bottom: 8px;">Quick Decider</h3>
        <p><strong>Rating:</strong> ${rating} &rarr; ${ratingLabel}</p>
        <p><strong>Status:</strong> ${budgetResult}</p>
        <p><strong>Distance:</strong> ${distanceResult}</p>
    `;
    asideEl.appendChild(decisionBox);
}
