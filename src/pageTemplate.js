const fs = require('fs')

const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')



const generateEmployeeCardHtml = (employeeData) => {
    const employeeCardHtml = [];
    employeeData.forEach(employee => {
        employeeCardHtml.push()
        if (employee.getRole() === 'Manager') {
            employeeCardHtml.push(
                `
            <div class="card col-10 col-md-3 m-3" id="card-background">
                <div class="card-header bg-dark">
                    <p class="h2">${employee.getName()}</p>
                    <p class="h5"> <i class="fas fa-mug-hot pe-2"></i> Manager</p>
                </div>
                <div class="card-body bg-light">
                    <div class="border mb-2" id="employeeInfo">
                        <p>ID: ${employee.getId()}</p>
                    </div>
                    <div class="border mb-2" id="employeeInfo">
                    <p>Email: <a href = "mailto: ${employee.getEmail()}">${employee.getEmail()}</a></p>
                    </div>
                    <div class="border mb-2" id="employeeInfo">
                        <p>Office #: ${employee.officeNumber}</p>
                    </div>
                </div>
            </div>
            `
            )
        }
        else if (employee.getRole() === 'Engineer') {
            employeeCardHtml.push(
                `
                <div class="card col-10 col-md-3 m-3" id="card-background">
                    <div class="card-header bg-dark">
                        <p class="h2">${employee.getName()}</p>
                        <p class="h5"> <i class="fas fa-glasses"></i> Engineer</p>
                    </div>
                    <div class="card-body bg-light">
                        <div class="border mb-2" id="employeeInfo">
                            <p>ID: ${employee.getId()}</p>
                        </div>
                        <div class="border mb-2" id="employeeInfo">
                            <p>Email: <a href = "mailto: ${employee.getEmail()}">${employee.getEmail()}</a></p>
                        </div>
                        <div class="border mb-2" id="employeeInfo">
                            <p>GitHub: <a href="https://github.com/${employee.github}" target="_blank" >${employee.github}</a></p>
                        </div>
                    </div>
                </div>
                `
            )
        }
        else if (employee.getRole() === 'Intern') {
            employeeCardHtml.push(
                `
                <div class="card col-10 col-md-3 m-3" id="card-background">
                    <div class="card-header bg-dark">
                        <p class="h2">${employee.getName()}</p>
                        <p class="h5"> <i class="fas fa-user-graduate"></i> Intern</p>
                    </div>
                    <div class="card-body bg-light">
                        <div class="border mb-2" id="employeeInfo">
                            <p>ID: ${employee.getId()}</p>
                        </div>
                        <div class="border mb-2" id="employeeInfo">
                            <p>Email: <a href = "mailto: ${employee.getEmail()}">${employee.getEmail()}</a></p>
                        </div>
                        <div class="border mb-2" id="employeeInfo">
                            <p>School: ${employee.getSchool()}</p>
                        </div>
                    </div>
                </div>
                `
            )
        }
    })
    generatePageHtml(employeeCardHtml.join(''))
}

const generatePageHtml = (employeeCardHtml) => {
    const pageHtml =
        `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="icon" type="image" href="https://www.shareicon.net/data/2015/11/11/670337_photography_512x512.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <script src="https://kit.fontawesome.com/37e04eb76c.js" crossorigin="anonymous"></script>
</head>

<body>
    <h1 class="display-1 text-center p-4 bg-info">My Team:</h1>
    <section class="container">
    <div class="row justify-content-center">
        ${employeeCardHtml}
    </div>
    </section>
</body>

</html>`
    fs.writeFile('./dist/index.html', pageHtml, (err) => {
        if (err) throw err;
        console.log('check the /dist folder to see your new file!');
    });
}
module.exports = generateEmployeeCardHtml