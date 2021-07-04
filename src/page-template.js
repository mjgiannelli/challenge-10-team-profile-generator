// this is where we will create functions to write the html template and pass in the responses from the prompts
// include a header
// container
// one row
// add a card anytime a new employee is added
// card contains a container
// 2 rows
// first row two columns (Name and icon)
// second row 3 columns (list)

const generateEmployeeCards = employeesArray => {
  return `
    <section class='row-cards'>
      <div class='col'>
        ${employeesArray
      .filter(({ role }) => role === 'Manager')
      .map(({ name, role, id, email, officeNumber }) => {
        return `
          <div class='card-container'>
            <div class='card-title-row'>
              <div class='card-col-title'>
                <h2>${name}</h2>
              </div>
              <div class='card-col-title'>
                <h3>${role}</h3>
              </div>
            </div>
            <div class='card-body-row'>
              <div class='card-col-body'>
                <h4>ID: ${id}</h4>
              </div>
              <div class='card-col-body'>
                <a href='mailto:${email}'>Email: ${email}</a>
              </div>
              <div class='card-col-body'>
                <h4>Office Number: ${officeNumber}</h4>
              </div>
            </div>
          </div>
        `;
      })
      .join('')}

      ${employeesArray
        .filter(({ role }) => role === 'Engineer')
        .map(({ name, role, id, email, github }) => {
          return `
            <div class='card-container'>
              <div class='card-title-row'>
                <div class='card-col-title'>
                  <h2>${name}</h2>
                </div>
                <div class='card-col-title'>
                  <h3>${role}</h3>
                </div>
              </div>
              <div class='card-body-row'>
                <div class='card-col-body'>
                  <h4>ID: ${id}</h4>
                </div>
                <div class='card-col-body'>
                  <a href='mailto:${email}'>Email: ${email}</a>
                </div>
                <div class='card-col-body'>
                <a href='https://github.com/${github}'>GitHub: ${github}</a>
                </div>
              </div>
            </div>
          `;
        })
        .join('')}

        ${employeesArray
          .filter(({ role }) => role === 'Intern')
          .map(({ name, role, id, email, school }) => {
            return `
              <div class='card-container'>
                <div class='card-title-row'>
                  <div class='card-col-title'>
                    <h2>${name}</h2>
                  </div>
                  <div class='card-col-title'>
                    <h3>${role}</h3>
                  </div>
                </div>
                <div class='card-body-row'>
                  <div class='card-col-body'>
                    <h4>ID: ${id}</h4>
                  </div>
                  <div class='card-col-body'>
                    <a href='mailto:${email}'>Email: ${email}</a>
                  </div>
                  <div class='card-col-body'>
                    <h4>School: ${school}</h4>
                  </div>
                </div>
              </div>
            `;
          })
          .join('')}
      </div>
    </section>
  `;
}


// function to create html template
module.exports = templateData => {
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="style.css">
  </head>


  <body>
    <header>
      <h1>My Team<h1>
    </header>
    <main class="container">
      <div class='row'>
      ${generateEmployeeCards(templateData)}
      </div>
    </main>
  </body>
  </html>
  `;
};
