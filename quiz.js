
var readlineSync=require("readline-sync");
const chalk =require('chalk');
   let score=0;
const QuestionBank=[
  {
    question:"What city is friends set in?",
    answer:"New york City",
    options: ['New york City', 'Los Angels', 'Thanjavur', 'Trichy']
  },
  {
    question:"How many seasons of Friends are there?",
    answer:"10",
    options:['11','10','9','12']
  },
  {
    question:"How many times did Ross get divorced?",
    answer:"3",
    options:["1","2","3","4"]
  },
  {
    question:"Rachel got a job with which company in Paris?",
    answer:"Louis Vuitton",
    options:["Zara","Louis Vuitton","H&M","Gucci"]
  },
  {
    question:"What was the occupation of Rachel’s fiancé Barry Farber?",
    answer:"Orthodontist",
    options:["cleark","developer","wealth manager","Orthodontist"]
  },
  {
  question:"True or false, Rachel kissed all of her Friends (male and female) on the show?",
  answer:"True",
  options:["True","False"]
  },
  {
    question:"Phoebe attempts to teach Joey what language?",
    answer:"French",
    options:["French","Latin","Tamil","Spanish"]
  }
]



console.log("Welcome to "+chalk.italic.blue("F")+chalk.bold.red(".")+chalk.italic.blue("R")+chalk.yellow(".")+chalk.italic.blue("I")+chalk.blue(".")+chalk.italic.blue("E")+chalk.red(".")+chalk.italic.blue("N")+chalk.yellow(".")+chalk.italic.blue("D")+chalk.blue(".")+chalk.italic.blue("S")+ " Quiz")

 function Questions(question,answer,option){

  const index=readlineSync.keyInSelect(option,question);
//const ans=readlineSync.question(question)
//if(ans==answer)

  if(option[index]===answer)
  {
   score=score+1
  console.log(chalk.bold.green("correct answer"))
 
 }
 else
 {
   console.log(chalk.bold.red("wrong answer"))
 }

 }

for(let i=0; i<QuestionBank.length; i++){
  
  Questions(QuestionBank[i].question, QuestionBank[i].answer, QuestionBank[i].options)
 }


 console.log(chalk.yellow("Your score is ")+chalk.greenBright(score))
