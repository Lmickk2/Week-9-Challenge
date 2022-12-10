const fs=require("fs")
const generateMarkdown=require("./utils/generateMarkdown")
const inquirer=require("inquirer");


inquirer.prompt([

{
    name:"license",
    message:"What license are you using for your project?",
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
    name:"features",
    message:"What features are offered with this application?",
    type:"input",
},

{
    name:"usage",
    message:"How do you use this application?",
    type:"input",
},

{
    name:"instructions",
    message:"how do you install this application",
    type:"input",
},

{
    name:"credits",
    message:"Please credit any sources used for your application",
    type:"input",
},

{
    name:"github",
    message:"What is your Github username?",
    type:"input",
},

{
    name:"email",
    message:"What is your email address?",
    type:"input",
},

{
    name:"deployed",
    message:"Please insert a link to your deployed application",
    type:"input",
}

])

.then(response=>{
    console.log(response)
    const result=generateMarkdown(response)
    fs.writeFile("NewREADME.md",result,error=>{
        if(error) {
            console.log(error);
        } else {
            console.log("README created!")
        }
    })
})


function init() {



}

init();

