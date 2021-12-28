'use strict';


const seqTest = (f) => {
    return (g) => {          
        return g*2 + f;       
}
}
console.log(seqTest(6)(9));

const seq = (f) => (g) => (typeof g === 'number' ? f(g) : seq((x) => f(g(x)))); 

let a = seq(x => x + 6)
   (x => x * 2)(9)    
console.log(a);


let b = seq(x => x + 6)
   (x => x * 2)('2')
console.log(b);

let c= seq(x => x + '6')
   (x => x * 2)(2)
console.log(c);


module.exports = { seq };