const accountId=15543
let accEmail="dk13432@google.com"
var accPassword="12345"
accCity="Bhagalpur"

// accountId=2 //not allowed
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId,accEmail,accPassword,accCity])