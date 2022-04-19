module.exports = (templateData) => {
  const { projects, about, ...header } = templateData;

  return `
<!DOCTYPE html>
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

<div class="container m-4 p-4">

    <div>
      <div class="card text-white bg-primary mb-3" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Manager</h5>
          <p class="card-text">
            Manager: ${answers.Mname}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${answers.Mid} </li>
          <li class="list-group-item"><a href=>Email: ${answers.Memail} </li></a>
          <li class="list-group-item">Office Number: ${answers.officenumber} </li>
        </ul>
    </div>

    <div>
        <div class="card text-white bg-primary mb-3" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Engineer</h5>
            <p class="card-text">
                Engineer: ${answers.nameE}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${answers.idE} </li>
            <li class="list-group-item"><a href="mailto:${answers.emailE}">Email: </li></a>
            <li class="list-group-item"><a href="https://github.com/${answers.github}">Github: </li></a>
          </ul>
      </div>

      <div>
        <div class="card text-white bg-primary mb-3" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Intern</h5>
            <p class="card-text">
                Intern: ${answers.Iname}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${answers.Iid} </li>
            <li class="list-group-item"><a href="mailto:${answers.Iemail}">Email: </li></a>
            <li class="list-group-item">School: ${answers.school} </li>
          </ul>
      </div>
</div>
  </body>
</html>
`;
};
