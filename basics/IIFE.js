// Immediately Invoked Function Expressions(IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// IIFE used to removed global scope pollution

(() => {
    console.log(`DB CONNECTED TWO`);
})()