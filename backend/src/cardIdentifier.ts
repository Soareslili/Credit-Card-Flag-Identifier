// src/cardIdentifier.ts
import { CardFlag } from './types';

export function identifyCardFlag(cardNumber: string): CardFlag {
    const sanitized = cardNumber.replace(/\D/g, '');

    if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(sanitized)) {
        return 'Visa';
    }
    if (/^5[1-5][0-9]{14}$/.test(sanitized)) {
        return 'MasterCard';
    }
    if (/^3[47][0-9]{13}$/.test(sanitized)) {
        return 'American Express';
    }
    if (/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(sanitized)) {
        return 'Discover';
    }
    return 'Desconhecido';
}