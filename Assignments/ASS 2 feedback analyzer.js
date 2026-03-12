//  Multi-Section Feedback Analyzer

const form = document.getElementById("feedbackForm");
const container = document.getElementById("feedbackContainer");
const countDisplay = document.getElementById("count");
const msg = document.getElementById("msg");

let count = 0;
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const type = document.getElementById("type").value;
    const text = document.getElementById("text").value.trim();
}
