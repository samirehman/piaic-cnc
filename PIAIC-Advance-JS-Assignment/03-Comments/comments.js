var singleLineComment;
var multiLineComment;
var exampleComment;

singleLineComment = '// count = count + 1;';
multiLineComment  = `/* function myTestFunctin(param){
    return ...
 } */`;


exampleComment = `There are two types of comments
Single line comment e.g.
${singleLineComment}
Multiline Comment e.g.
${multiLineComment}
`;

console.log(exampleComment);
