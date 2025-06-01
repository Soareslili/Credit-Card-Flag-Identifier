import { identifyCardFlag } from './cardIdentifier';

const testCards = [
    '4111111111111111', // Visa
    '5500000000000004', // MasterCard
    '340000000000009',  // American Express
    '6011000000000004', // Discover
    '1234567890123456'  // Desconhecido
];

testCards.forEach(card => {
    const flag = identifyCardFlag(card);
    console.log(`Número: ${card} | Bandeira: ${flag}`);
});