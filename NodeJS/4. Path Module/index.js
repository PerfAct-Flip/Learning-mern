import path, { normalize } from "path";

console.log(path.basename("c:\\nodejs\\app.html"));
console.log(path.basename("c:\\nodejs\\app.html", ".js"));
console.log(path.dirname("c:\\nodejs\\app.html"));
console.log(path.extname("c:\\nodejs\\app.html"));
console.log(path.join("c:", "flip-fol", "courses", "redux-toolkit"));

// Going up a level 
console.log(path.join("c:", "flip-fol", "courses", "redux-toolkit", ".."));

console.log(path.normalize("c:\\courses\\reux\\store\\features\\"));

console.log(path.parse("c:\\nodejs\\app.html"));

console.log(path.parse("c:\\nodejs\\app.html").base);

console.log(path.parse("c:\\nodejs\\app.html").name);


console.log(path.parse("c:\\nodejs\\app.html").dir);