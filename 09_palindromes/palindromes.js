const palindromes = function (string) {
    const palindromes = string
                            .split('')
                            .filter(letter => letter !== ',')
                            .filter(letter => letter !== '.')
                            .filter(letter => letter !== '!')
                            .filter(letter => letter !== ' ')
                            .reverse()
                            .join('')
                            .toString()
                            .toLowerCase()

        
    const originalString = string
                            .split('')
                            .filter(letter => letter !== ',')
                            .filter(letter => letter !== '.')
                            .filter(letter => letter !== '!')
                            .filter(letter => letter !== ' ')
                            .join('')
                            .toString()
                            .toLowerCase()

    //console.log(palindromes)
    //console.log(originalString)                      
    
    if (originalString === palindromes) {
        return true;
    } else {
        return false;
    }
    
};

//console.log(palindromes('les patates'))

//Do not edit below this line
module.exports = palindromes;
