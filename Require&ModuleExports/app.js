require('./instantHello');
var goodBye = require('./talk/goodBye');
var talk = require('./talk');
var question = require('./talk/question');


goodBye();
talk.intro();
talk.hello("Israel");
var answer = question.ask("What is the meaning of life?");
console.log(answer);