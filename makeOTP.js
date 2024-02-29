var globalkey = [];

/*
This will only make an otp based alphabetical charcters.
a better implementation would use binary charcters
*/
function oneTimePad(message, key, decrypt = false) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'æ', 'ø', 'å'];

    let result = '';

    // if it should encrypt, generate a key
    if (decrypt !== true ) {
        key = [];
        for (let i = 0; i < message.length; i++) {
            const char = message[i];
             // Check if the character is alphanumeric
            if (/[a-zA-Z]/.test(char)) {
                const randomIndex = Math.floor(Math.random() * alphabet.length);
                key.push(randomIndex)  
            } else {
                // For non-alphanumeric characters, just append them as they are
                key.push(" ");
            }
        }

        globalkey = key;
        console.log(key)
    }

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
                newIndex = (index - key[i] + alphabet.length) % alphabet.length;
            } else {
                // Encrypting: shift forwards
                newIndex = (index + key[i]) % alphabet.length;
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


let encrypted = oneTimePad("Systemopdateringer er vigtige!!!");
console.log("Encrypted:", encrypted);

let decrypted = oneTimePad(encrypted, globalkey, true);
console.log("Decrypted:", decrypted);