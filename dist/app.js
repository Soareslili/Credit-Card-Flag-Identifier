"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cardIdentifier_1 = require("./cardIdentifier");
const testCards = [
    '4111111111111111', // Visa
    '5500000000000004', // MasterCard
    '340000000000009', // American Express
    '6011000000000004', // Discover
    '1234567890123456' // Desconhecido
];
testCards.forEach(card => {
    const flag = (0, cardIdentifier_1.identifyCardFlag)(card);
    console.log(`Número: ${card} | Bandeira: ${flag}`);
});
