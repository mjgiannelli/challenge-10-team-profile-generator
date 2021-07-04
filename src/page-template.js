// this is where we will create functions to write the html template and pass in the responses from the prompts
// include a header
// container
// one row
// add a card anytime a new employee is added
// card contains a container
// 2 rows
// first row two columns (Name and icon)
// second row 3 columns (list)

// const generateEmployees = employeesArray => {
//     return `
//     <section class='row-cards'>
//         <div class='col'>
//         ${employeesArray
//         .map(({ name}))}    
//     `;
// }


// function to create html template
module.exports = templateData => {
    return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Organziation</title>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <h1>My Team<h1>
    </header>
    <main class="container">
      <div class='row'>
        
      </div>
    </main>
  </body>
  </html>
  `;
};
