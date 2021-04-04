//  Hosting Example


x = 1;
y = 2;

//console.log(x+y+z); // uncaught Reference: z is not defined
z = x + y;

console.log(w+" "+z); // undefined 3 // only z value is displaed as JS hosting only declaration
var w = x+y+z;
