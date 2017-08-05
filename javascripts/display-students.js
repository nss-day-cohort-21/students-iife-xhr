/*

    this module defines a function to display
    the data returned from an xhr

 */


var hello = (function(taco){
    
    //assign a new property to taco (the object passed)
    //called 'display' which is a function
    //to parse the JSON returned from our xhr
    //and put it on the DOM
    taco.displayStudents = function() {

        //store the student data (an array of objects)
        //'this' here means our xhr call
        let students = JSON.parse(this.responseText);

            //iterate over the students array and
            //forEach student write that student's information
            //to the div we targeted in main.js
            students.forEach((student)=>{
                studentsDiv.innerHTML += `<h1>Name: ${student.name}</h1>
                                          <p>Age: ${student.age}</p>
                                          <p>Awesome: ${student.awesome}</p>`;    
            });

        }
        
    //return taco
    //with it's cool new display property
    return taco;

})(hello || {});
