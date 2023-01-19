console.log("Hello, World!");

// ? prints name of current directory
console.log(__dirname);

// ? prints name of current file
console.log(__filename);

/* // ! will print every 1 sec infinite loop
setInterval(() => {
  console.log("This will print after 1 sec");
}, 1000);
*/

// * Modules
// ? Modules - Encapsulated Code (Only share minimum)
// ! Node is built upon commonJS, every file is module
// ! CommonJS is a project with the goal to establish conventions on the module ecosystem for JavaScript outside of the web browser.
const names = require("./test-module-1");
console.log(names);
const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};
sayHi(names.randomPerson1);
sayHi(names.randomPerson2);
