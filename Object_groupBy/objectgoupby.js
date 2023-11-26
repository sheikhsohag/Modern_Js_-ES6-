require('core-js');
// import core-js

const languages = [
    {title: "JavaScript", type: "scripging"},
    {title: "java", type: "normal"},
    {title: "Python", type: "scripting"},
];

let scripgingLanguage = {};

scripgingLanguage = Object.groupBy(languages, (lang) => lang.type);
console.log(scripgingLanguage);


