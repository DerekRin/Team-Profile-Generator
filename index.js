var inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//Check Pro-Read-Gen for file generation

var companyArray = [];

questions();

function questions() {
  inquirer
    .prompt([
      {
        name: "typeM",
        message: "Would you like to add an Manager?",
        type: "confirm",
      },
    ])
    .then((answers) => {
      if (answers.typeM === true) {
        inquirer
          .prompt([
            {
              name: "Mname",
              message: "What is your name?",
              type: "input",
            },
            {
              name: "Mid",
              message: "What is your id?",
              type: "input",
            },
            {
              name: "Memail",
              message: "What is your email?",
              type: "input",
            },
            {
              name: "officenumber",
              message: "What is your office number?",
              type: "input",
            },
          ])
          .then((answers) => {
            const manager = new Manager(
              answers.Mname,
              answers.Mid,
              answers.Memail,
              answers.officenumber
            );
            companyArray.push(manager);
            company();
            console.log(manager);
          });
      }
    });
}
function company() {
  inquirer
    .prompt([
      {
        name: "roleselect",
        message: "What else do you want to add?",
        type: "list",
        choices: ["Engineer", "Intern", "Finish"],
      },
    ])
    .then((answers) => {
      if (answers.roleselect === "Engineer") {
        getEngineer();
      } else if (answers.roleselect === "Intern") {
        getIntern();
      } else if (answers.roleselect === "Finish") console.log(companyArray);
    });
}

// .then(() => {

// });
// .then(() => {
//   inquirer
//     .prompt([
//       {
//         name: "typeI",
//         message: "Would you like to add an Intern?",
//         type: "confirm",
//       },
//     ])
//     .then((answers) => {
//       if (answers.typeI === true) {
//         getIntern();
//       }
//     });
// });

function getEngineer() {
  inquirer
    .prompt([
      {
        name: "nameE",
        message: "What is your name?",
        type: "input",
      },
      {
        name: "idE",
        message: "What is your id?",
        type: "input",
      },
      {
        name: "emailE",
        message: "What is your email?",
        type: "input",
      },
      {
        name: "github",
        message: "What is your github?",
        type: "input",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.nameE,
        answers.idE,
        answers.emailE,
        answers.github
      );
      companyArray.push(engineer);
      company();
      console.log(engineer);
    });
}

function getIntern() {
  inquirer
    .prompt([
      {
        name: "Iname",
        message: "What is your name?",
        type: "input",
      },
      {
        name: "Iid",
        message: "What is your id?",
        type: "input",
      },
      {
        name: "Iemail",
        message: "What is your email?",
        type: "input",
      },
      {
        name: "school",
        message: "What is your current school?",
        type: "input",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.Iname,
        answers.Iid,
        answers.Iemail,
        answers.school
      );
      companyArray.push(intern);
      company();
      console.log(intern);
    });
}

//Create function, add the logic for answers, recall the logic, this function will invoke the function again
