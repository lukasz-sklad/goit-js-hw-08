'use strict'
    // Zadeklarowana funkcja formatMessage(message, maxLength)
function formatMessage(message, maxLength) {
    // Spr, czy długość wiadomości jest mniejsza lub równa maxLength
    if (message.length <= maxLength) {
        return message; // Zwróć oryginalną wiadomość
    } else {
        return message.slice(0, maxLength) + '...'; // Skróć wiadomość i dodaj "..."
    }
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
