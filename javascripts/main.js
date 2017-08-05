
//declaring a global variable
//targeting the element which will hold student info
const studentsDiv = document.querySelector("#students");

//this method is called immediately
//defined, in xhr.js, it takes two arguments:
//a url to call to 
//and a function to be executed on load.
hello.getJson('../students.json', hello.displayStudents);
