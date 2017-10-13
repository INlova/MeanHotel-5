var fileName = "index.js";

var hello = function(name) {
    console.log("hello " + name);
};

var intro = function(){
  console.log("I'm a node file called " + fileName);  
};

module.exports = {
    hello : hello,
    intro : intro,
};