const fs = require("fs");

let topText = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Test</title>
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
      <header">
        <div class="p-3 mb-2 bg-danger text-white text-center">
            <H1><p>My Team</p></H1>
        </div>
      </header>

<div id="accordion" class="container m-4 p-4">`;

let bottomText = `</div>
</body>
</html>
`;

function generateCards(companyArray) {
  let content = "";

  companyArray.forEach(function (employees) {
    const role = employees.getRole();

    if (role === "Manager") {
      content += `
    <div>
        <div class="card text-white bg-primary mb-3" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Manager</h5>
            <p class="card-text">
              Manager: ${employees.getName()}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employees.getId()} </li>
            <li class="list-group-item"><a href=>Email: ${employees.getEmail()} </li></a>
            <li class="list-group-item">Office Number: ${
              employees.officenumber
            } </li>
          </ul>
      </div>`;
    } else if (role === "Engineer") {
      content += `
        <div>
            <div class="card text-white bg-primary mb-3" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">Engineer</h5>
                <p class="card-text">
                    Engineer: ${employees.getName()}
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employees.getId()} </li>
                <li class="list-group-item"><a href=mailto${employees.getEmail()}.com:>Email: ${employees.getEmail()} </li></a>
                <li class="list-group-item"><a href="https://github.com/${
                  employees.github
                }">Github: ${employees.github} </li></a>
              </ul>
          </div>`;
    } else if (role === "Intern") {
      content += `
          <div>
          <div class="card text-white bg-primary mb-3" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Intern</h5>
              <p class="card-text">
                  Intern: ${employees.getName()}
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${employees.getId()} </li>
              <li class="list-group-item"><a href=mailto${employees.getEmail()}.com:>Email: ${employees.getEmail()} </li></a>
              <li class="list-group-item">School: ${employees.school} </li>
            </ul>
        </div>
    `;
    }
  });
  return content;
}

function createHTML(companyArray) {
  const fullPage = topText + generateCards(companyArray) + bottomText;

  fs.writeFile("./dist/index.html", fullPage, (er) => console.log(er));
}

module.exports = { createHTML };
