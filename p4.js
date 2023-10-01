function isPal(num) {
    let asString = "" + num;
    for(let c = 0; c < asString.length/2 +1; c++){
        if(asString[c] != asString[asString.length-1 - c]) {
            return false;
        }
    }
    return true;
}

let n1 = 999;
let n2 = 999;

while(!isPal(n1*n2) && n1*n2 > 0) {
    if((n1-1) * n2 > n1 * (n2-2)) {
        n1--;
    }else {
        n2--;
    }
    console.count("iteration")
}

console.log(`The largest palindrome made from the product of two three-digit numbers is ${n1} x ${n2}, ${n1*n2}`);

//This is not the right solution.

//https://euler.beerbaronbill.com/en/latest/solutions/4.html