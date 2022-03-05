var inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');

inquirer
  .prompt([
      {
          name:"type",
          message:"Would you like to add an engineer?",
          type:"confirm"
      } 
    ]) .then (
        answers => {
           if (answers.type === true) {
            getEngineer();
            }
         } 
)

function getEngineer() {
inquirer
  .prompt([
    {
        name: 'name',
        message: 'What is your name?',
        type: "input"
    },
    {
        name: 'id',
        message: 'What is your id?',
        type: "input"
    },
    {
        name: 'email',
        message: 'What is your email?',
        type: "input"
    },
    {
        name: 'github',
        message: 'What is your github?',
        type: "input"
    },
  ])
  .then((answers) => {
    const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github);
    console.log(engineer);
  });
}