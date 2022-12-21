const sumAll = function(nb1, nb2) {
    let i = 0;
    if (nb1 > nb2) {
            i += nb1;
        } else {
            i += nb2;
    }
    let sum = 0; 
    
    if (((nb1 || nb2) < 0) || !(typeof(nb1) === typeof(nb2))) {
        return 'ERROR'
    } else {
        for (i; i >= 0; i--) {
        sum += i;
    }
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
