//  example : 7


if (true) {
    // userName is in the global scope because of the 'var' keyword
    var userName = 'Ameen Alam';
    console.log(userName); // output 'Ameen Alam'
    // age is in the local scope because of the 'let' keyword
    let age = 20;
    console.log(age); // output 20
    // skills is in the local scope because of the 'const' keyword
    const skills = 'JavaScript';
    console.log(skills); // output 'JavaScript'
 }
 console.log(userName); // output 'Ameen Alam'
 console.log(age); // Uncaught ReferenceError: age is not defined
 console.log(skills); // Uncaught ReferenceError: skills is not defined

