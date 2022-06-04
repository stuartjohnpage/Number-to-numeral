function convertToRoman(remainingAmount) {
    let finalResult = '';
    const numberToNumeralMapping = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        3: 'III',
        2: 'II',
        1: 'I',
    }
    const sortedKeys = Object.keys(numberToNumeralMapping).sort((a, b) => {
        return Number(a) - Number(b);
    })

    if (remainingAmount in numberToNumeralMapping) {
        return numberToNumeralMapping[remainingAmount]
    } 
    
    if(remainingAmount > 1000) {
        while(remainingAmount > 1000){
            finalResult += 'M'
            remainingAmount -= 1000
        }
    }

    finalResult = finalResult + smallerThan(remainingAmount, sortedKeys, numberToNumeralMapping);
    
    return finalResult;
};

const smallerThan = (remainingAmount, sortedKeys, numberToNumeralMapping) => {
    let result = '';
    while (remainingAmount != 0) {
        let endLoop = false;
        sortedKeys.forEach((key, i) => {
            if(endLoop){
                return;
            }
            if (remainingAmount === 0) {
                endLoop = true;
                return;
            }
            if (remainingAmount in numberToNumeralMapping) {
                result = result + numberToNumeralMapping[remainingAmount]
                remainingAmount -= remainingAmount
                endLoop = true;
                return;
            }
            if (remainingAmount < key) {
                result = result + numberToNumeralMapping[sortedKeys[i - 1]]
                remainingAmount -= sortedKeys[i - 1]
                endLoop = true;
                return;
            };
        });
    };
    return result;
};

convertToRoman(36);