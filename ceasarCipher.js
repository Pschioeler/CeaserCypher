function caesarCipher(message, key, decrypt = false) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'æ', 'ø', 'å'];

    let result = '';

    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        let index = alphabet.indexOf(char.toLowerCase());

        if (index === -1) {
            // Character is not in the alphabet
            result += char;
        } else {
            let newIndex;
            if (decrypt) {
                // Decrypting: shift backwards
                newIndex = (index - key + alphabet.length) % alphabet.length;
            } else {
                // Encrypting: shift forwards
                newIndex = (index + key) % alphabet.length;
            }
            // Preserve original case
            if (char === char.toUpperCase()) {
                result += alphabet[newIndex].toUpperCase();
            } else {
                result += alphabet[newIndex];
            }
        }
    }

    return result;
}

// Example usage:
let encrypted = caesarCipher("Hello World!", 3);
console.log("Encrypted:", encrypted); // Outputs: "Khoor Zruog!"

let decrypted = caesarCipher(encrypted, 3, true);
console.log("Decrypted:", decrypted); // Outputs: "Hello World!"