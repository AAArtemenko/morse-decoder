const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {    
    let sentence = '';
    for (let i = 0; i < expr.length; i += 10) {
        let word = expr.slice(i, i + 10);        
        let char = '';
        if (word != '**********') {
            for (let j = 0; j < word.length; j += 2) {
                if (word[j] == '1') {
                    if (word[j+1] == '0') {
                        char += '.';
                    }
                    else if (word[j+1] == '1') {
                        char += '-';
                    }
                }
            }
            sentence += MORSE_TABLE[char];
        }
        else {sentence += ' ';}
    }
    return sentence;
}

module.exports = {
    decode
}