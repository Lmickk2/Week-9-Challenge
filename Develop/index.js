// TODO: Include packages needed for this application

const fs=require("fs")
const generateMarkdown=require("./utils/generateMarkdown")
const inquirer=require("inquirer");

// TODO: Create an array of questions for user input

inquirer.prompt([

{
    name:"license",
    message:"What is your project name?",
    type:"list",
    choices:["MIT","Apache","Mozilla"]
},    

{
    name:"title",
    message:"What is your project name?",
    type:"input"
},

{
    name:"desc",
    message:"Give a general description of your project",
    type:"input",
},

{
    name:"story",
    message:"What issue are you solving",
    type:"input",
},

{
    name:"solution",
    message:"How will you solve it?",
    type:"input",
},

{
    name:"usage",
    message:"How do you use this application?",
    type:"input",
}

])
// TODO: Create a function to write README file
.then(response=>{
    console.log(response)
    const result=generateMarkdown(response)
    fs.writeFile("README.md",result,error=>{
        if(error) {
            console.log(error);
        } else {
            console.log("README created!")
        }
    })
})

// TODO: Create a function to initialize app
function init() {



}


// Function call to initialize app
init();

