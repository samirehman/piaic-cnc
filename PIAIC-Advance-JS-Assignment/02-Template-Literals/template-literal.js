var coverLetter ;
var userName;
var date;
var addressCountry;

date = Date();
userName = 'Sami Rehman';
addressCountry = 'Pakistan';
designation = 'Software Engineer';
expertise = 'HTML \nJAVA \nAdvance JAVA \nRact \n';


coverLetter = `This is ${userName}. I am based in ${addressCountry} and working as a ${designation}.
My core exeprtise are:
${expertise}
I will try to learn more.
Kind Regards
${userName}.
${date}
`;

console.log(coverLetter);
