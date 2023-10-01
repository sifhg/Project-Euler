const N = 600851475143;
let n = N;
let f = 1;
let factors = [];

while(f < n) {
    f++;
    if(n % f == 0) {
        factors.push(f);
        n = n/f;
    }
    console.count("iterations")
}
console.log(factors);
console.log(`Largest prime factor of ${N} is ${factors[factors.length-1]}`);
//To prevent going through N number of iterations, I divide the number each time I find a prime factor.