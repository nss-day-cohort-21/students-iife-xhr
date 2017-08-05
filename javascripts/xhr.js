/*
    
    the purpose this module is to make an xhr call
    to whatever url is passed and 
    on load, execute whatever callback was passed.

 */

var hello = (function(taco){

    //assign to taco (whatever object we pass),
    //a property called 'getJson'
    //which is a function that 
    //takes a a url and a callback to invoke on load
    taco.getJson = function(url, callback){

        //create a request object
        let xhr = new XMLHttpRequest();

        //listen for load and error event on our xhr object
        //when 'load' happens, invoke the callback function we passed
        xhr.addEventListener("load", callback);
        xhr.addEventListener("error", (error) => console.log(error));

        //open takes an 'http verb' and a url
        //which we passed when we called this in main.js
        xhr.open('GET', url);
        xhr.send();

        
    } 

    //return the object passsed ('taco' will be 'hello' when we actually invoke)
    //with it's cool new method attached
    return taco;

})(hello || {});
