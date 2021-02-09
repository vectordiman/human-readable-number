module.exports = function toReadable (number) {
    let words = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }

    let string = '';
    let digit = 0;

    if ((digit = Math.floor(number / 100)) > 0) {
        string += words[digit] + ' hundred';
        number %= 100;
    }

    if(number >= 11 && number <= 20)
    {
        string += string === '' ? words[number] : ' ' + words[number];
        return string;
    }

    if ((digit = Math.floor(number / 10)) > 0) {
        string += string === '' ? words[digit * 10] : ' ' + words[digit * 10];
        number %= 10;
    }

    if (string.length > 0 && number !== 0) {
        string += string === '' ? words[number] : ' ' + words[number];
        return string;
    }

    if(string.length === 0 && number >= 0 && number <= 9)
    {
        string += string === '' ? words[number] : ' ' + words[number];
        return string;
    }
    return string;
}
