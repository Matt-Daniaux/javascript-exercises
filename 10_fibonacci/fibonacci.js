const fibonacci = function(number) {
    if(number > 0) {
    let fibos = [1, 1];    
    let i = number;

    for (i; i >= 3; i--) {
        let fiboA = fibos[fibos.length - 1]
        let fiboB = fibos[fibos.length - 2]
        fibos.push(
                fiboA + fiboB 
                    )
    }

    let fibo = fibos.slice(length - 1).toString()
    
    let finalNumber = parseInt(fibo)
    
    return finalNumber
    } else {
        return 'OOPS'
    }

};


// Do not edit below this line
module.exports = fibonacci;


