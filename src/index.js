// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let exChange = {}, currencyTemp = currency;
    const h = 50;
    const q = 25;
    const d = 10;
    const n = 5;
    const p = 1;

    if ( currencyTemp <= 0 ) {
        return exChange;
    } else if (currencyTemp > 10000) {
        return exChange = {"error": "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        if(currencyTemp >= 50) {
            exChange["H"] = Math.floor(currencyTemp / h);
            currencyTemp-= Math.floor(currencyTemp / h) * 50;
        }

        if(currencyTemp >= 25) {
            exChange["Q"] = Math.floor(currencyTemp / q);
            currencyTemp-= Math.floor(currencyTemp / q) * 25;
        }

        if(currencyTemp >= 10) {
            exChange["D"] = Math.floor(currencyTemp / d);
            currencyTemp-= Math.floor(currencyTemp / d) * 10;
        }

        if(currencyTemp >= 5) {
            exChange["N"] = Math.floor(currencyTemp / n);
            currencyTemp-= Math.floor(currencyTemp / n) * 5;
        }

        if(currencyTemp >= 1) {
            exChange["P"] = Math.floor(currencyTemp / p);
            currencyTemp-= Math.floor(currencyTemp / p) * 1;
        }

        return exChange;   
    }
}
