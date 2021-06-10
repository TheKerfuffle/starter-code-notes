// For words that begin with consonant sounds, 
// all letters before the initial vowel are placed at the end of the word sequence. 
// Then, "ay" is added, as in "pig" = "igpay"

// TO DO - NOT DONE!!!
// When words begin with consonant clusters (multiple consonants that form one sound), 
// the whole sound is added to the end when speaking or writing.
// "trash" = "ashtray"

// For words that begin with vowel sounds, the vowel is left alone, and most commonly 
// 'ay' is added to the end. 
// "eat" = "eatay"

const translateToPigLatin = string => {
    let result = string;

    if (string.length === 0) {
        return result;
    }

    let firstCharacter = string[0];
    if (!isVowel(firstCharacter)) {
        // remove first character from result 
        result = string.substring(1, string.length) + firstCharacter + 'ay';
    } else if (isVowel(firstCharacter)) {
        result = string + 'ay';
    }




    return result;
}


// TO DO - should probably be in it's own module with it's own unit tests
const isVowel = (character) => {
    let lowerC = character.toLowerCase();
    if (lowerC == 'a' || lowerC == 'e' || lowerC == 'i' || lowerC == 'o' || lowerC == 'u') {
        return true;
    }
    return false;
}

module.exports = translateToPigLatin;