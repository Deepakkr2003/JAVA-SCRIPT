//          javascript execution context

// { } global EC

// Global Execution Context
// Function Execution Context
// Eval Execution Context

// {} -> Memory creation phase
//    ->execution phase

// 1-Global execution

// 2-Memory phase
//val1-undefined
//val2-undefined
//addnum-defination
//result1-undefined
//result2-undefined


// 3-execution phase
// val1-10
// val2-5
// addnum-new variable environment+execution thread
// for addnum again memory phase and execution phase will run
// Memory phase for addnum
// val1-undefined
// val2-undefined
// total-undefined
// execution context for addnum and it will delete after execution
// num1-10
// num2-5
// total - 15


